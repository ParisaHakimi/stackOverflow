import { useState, useRef } from "react";

const SignupForm = ({ addUser }) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [errorMsg, setErrorMsg] = useState(null);
  const nameRef = useRef("");
  const addUserHandler = (e, name, email, phone) => {
    if (name !== "" && email !== "" && phone !== "") {
      addUser(e, name, email, phone);
      setName("");
      setEmail("");
      setPhone("");
      nameRef.current.focus();
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
      onSubmit={(e) => addUserHandler(e, name, email, phone)}
    >
      {errorMsg ? <p className="error-msg">{errorMsg}</p> : null}
      <div className="signup-inputGroup">
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          ref={nameRef}
        />
      </div>
      <div className="signup-inputGroup">
        <label htmlFor="">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div className="signup-inputGroup">
        <label htmlFor="">Phone</label>
        <input
          type="text"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
      </div>
      <button>Sign Up </button>
    </form>
  );
};

export default SignupForm;
