import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";


const Form = () => {

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const inputRefUsername = React.useRef(null);
  const inputRefPassword = React.useRef(null);

  const [caps, setCaps] = React.useState(true);
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const {username, password} = formData;

    if (!username.trim() || !password.trim()) {
      alert("Form can't be empty");
      if(!username.trim()){
        inputRefUsername.current.focus();
      } else {
        inputRefPassword.current.focus();
      }
      return;
    }
    fetch("http://localhost:3000/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data && data.tokens) {
          // save token into cookie
          Cookies.set("tokens", data.tokens, { expires: 7 });
        }
        alert(data.message);
        navigate(`/profile`);
      });
  };

const handleChange = (event) => {
  setFormData({...formData, [event.target.name]: event.target.value})
}
  const handleCaps = (event) => {
    if (event.getModifierState("CapsLock")) {
      setCaps(false);
    } else {
      setCaps(true);
    }
  };

  return (
    <form
      id="form"
      className="form form-login"
      onSubmit={(e) => handleSubmit(e)}
    >
      <div className="field">
        <input
          type="text"
          id="input"
          className='input input-username'
          placeholder="Username"
          name="username"
          ref={inputRefUsername}
          value={formData.username}
          required
          onChange={(e) => handleChange(e)}
        />
      </div>

      <div className="field">
        <input
          type="password"
          id="password"
          className='input input-password'
          placeholder="Password"
          name="password"
          ref={inputRefPassword}
          value={formData.password}
          required
          onKeyUp={(e) => handleCaps(e)}
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="content">
         <div className="pass-link" >
          {
            caps ?
             <div class="vertical-divider"></div>
            :
            <span className="span-info" hidden={caps}>
              CapLocks is on!!!
            </span>
          }
        </div>
      </div>

      <button type="submit" className="btn btn-submit">Submit</button>
    </form>
  );
};

export default Form;
