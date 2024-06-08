import Cookies from "js-cookie";
import React from "react";
import { useNavigate } from "react-router-dom";
import Spinner from './spinner';

const Form = () => {
  const envs = import.meta.env;
  const server_path_local = envs.VITE_DEV_BASE_URL;
  const server_path_prod = envs.VITE_PROD_BASE_URL;
  const server_path = envs.VITE_ENV === 'development' ? server_path_local : server_path_prod

  const [formData, setFormData] = React.useState({
    username: '',
    password: '',
  });

  const inputRefUsername = React.useRef(null);
  const inputRefPassword = React.useRef(null);

  const [caps, setCaps] = React.useState(true);
  const [isLoading, setIsLoading] = React.useState(false);

  const navigate = useNavigate();



  const handleSubmit = async (event) => {
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

    setIsLoading(true);
      try {
      const response = await fetch(`${server_path}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
      });

      if (!response.ok) {
        throw new Error(`Login failed: ${response.statusText}`); 
      }
      await new Promise((resolve) => setTimeout(resolve, 500));
      const data = await response.json();

      if (data && data.tokens) {
        Cookies.set("tokens", data.tokens, { expires: 7 });
      }

      alert(data.message); 
      navigate("/profile");
    } catch (error) {
      alert('Something went wrong');
      console.error('Something went wrong: ', error)
    } finally {
      setIsLoading(false);
    }
    
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

  React.useEffect(() => {
    // Focus username input on initial form render
    inputRefUsername.current.focus();
  }, []); 

  return (
    <form
      id="form"
      className="form form-login"
      onSubmit={handleSubmit}
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
             <div className="vertical-divider"></div>
            :
            <span className="span-info" hidden={caps}>
              CapLocks is on!!!
            </span>
          }
        </div>
      </div>

      <button type="submit" className="btn btn-submit" disabled={isLoading}>Submit {isLoading && <Spinner />}</button>
    </form>
  );
};

export default Form;
