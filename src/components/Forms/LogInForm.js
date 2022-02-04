import { useState, useRef } from "react";

const LogInForm = ({ addUser }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const emailRef = useRef("");
  const addUserHandler = (e, email, password) => {
    if (email !== "" && password !== "") {
      addUser(e, email, password);
      setEmail("");
      setPassword("");
      emailRef.current.focus();
    } else {
      addUser(e);
      setErrorMsg("please fill the input");
      setTimeout(() => {
        setErrorMsg(null);
      }, 3000);
    }
  };
  return (
    <form
      action=""
      className="signup-form"
      onSubmit={(e) => addUserHandler(e, email, password)}
    >
      {errorMsg ? <p className="error-msg">{errorMsg}</p> : null}

      <div className="signup-inputGroup">
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          ref={emailRef}
        />
      </div>
      <div className="signup-inputGroup">
        <label htmlFor="">password</label>
        <input
          type="text"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <button>Log in </button>
    </form>
  );
};

export default LogInForm;
