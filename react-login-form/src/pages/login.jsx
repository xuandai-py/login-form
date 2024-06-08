import Form from "../components/form";

function Login() {

  return (
 
    <div className="wrapper">
      <div className="login login-content">
        <h1 className="title">Login Form </h1>
        <div>
          <Form />
        </div>
        <div className="content">
            <div className="pass-link" >
             View the source at: 
               <a href="https://github.com/xuandai-py/login-form.git" target="_blank">Github</a>
            </div>
         </div>
        
      </div>
    </div>
  );
}

export default Login;
