import { useState } from "react";
import SignupForm from "../Forms/SignupForm";

const SignUp = () => {
  const [users, setUsers] = useState([]);

  const addUser = (event, name, email, phone) => {
    event.preventDefault();
    if (name && email && phone) {
      const newUsers = [...users];
      newUsers.push({ name, email, phone });
      setUsers(newUsers);
    }
  };
  return (
    <>
      <div className="signUp-container">
        <p>
          Create your Stack Overflow account. It’s free and only takes a minute.
        </p>
        <div className="signup-InnerContainer">
          <ul className="signup-btnGroup">
            <li>
              <a
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com&scope=profile%20email&redirect_uri=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Fgoogle&state=%7B%22sid%22%3A1%2C%22st%22%3A%2259%3A3%3Abbc%2C16%3A00a53860a3e37554%2C10%3A1643924447%2C16%3A55366f76fed33275%2C651c74359e9d8797e8079d51fd517bc805c4b0b8b025e815ac11a93436153edf%22%2C%22cid%22%3A%22717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com%22%2C%22k%22%3A%22Google%22%2C%22ses%22%3A%2260bbefa8ffd54f94b502e2430a636c4a%22%7D&response_type=code&flowName=GeneralOAuthFlow"
                className="google"
              >
                Log in with Google
              </a>
            </li>
            <li>
              <a
                href="https://github.com/login?client_id=01b478c0264a1fbd7183&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D01b478c0264a1fbd7183%26redirect_uri%3Dhttps%253A%252F%252Fstackauth.com%252Fauth%252Foauth2%252Fgithub%26response_type%3Dcode%26scope%3Duser%253Aemail%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253A80ebb5fa0c95eb0a%252C10%253A1643924475%252C16%253A12f5891b8ea4da4f%252C3ff8448597740e1c5f89fa5d3883c6d17349f4f783e079c6cda5668df40f339e%2522%252C%2522cid%2522%253A%252201b478c0264a1fbd7183%2522%252C%2522k%2522%253A%2522GitHub%2522%252C%2522ses%2522%253A%25228b4fa354f4934ce5b50b444c58fa80bf%2522%257D"
                className="github"
              >
                Log in with GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=145044622175352&kid_directed_site=0&app_id=145044622175352&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.0%2Fdialog%2Foauth%3Fclient_id%3D145044622175352%26scope%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstackauth.com%252Fauth%252Foauth2%252Ffacebook%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253A84bd3624e8cfaf89%252C10%253A1643924501%252C16%253A119b1c8c9b91b0d1%252Cf3d7c6eae34787f30f771f92f53c00e0d73e801c0944393abef701013f9b2b51%2522%252C%2522cid%2522%253A%2522145044622175352%2522%252C%2522k%2522%253A%2522Facebook%2522%252C%2522ses%2522%253A%2522bc63f952c55c49219cbc9a40fa3a72c8%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D079138f8-04d7-4829-b7f4-8a8ce92f6447%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253A84bd3624e8cfaf89%252C10%253A1643924501%252C16%253A119b1c8c9b91b0d1%252Cf3d7c6eae34787f30f771f92f53c00e0d73e801c0944393abef701013f9b2b51%2522%252C%2522cid%2522%253A%2522145044622175352%2522%252C%2522k%2522%253A%2522Facebook%2522%252C%2522ses%2522%253A%2522bc63f952c55c49219cbc9a40fa3a72c8%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0"
                className="facebook"
              >
                Log in with Facebook
              </a>
            </li>
          </ul>
          <SignupForm addUser={addUser} />
        </div>
      </div>
      {/* adding user */}
      <ul className="signUpUsers">
        {users.map((user) => (
          <li>
            <h2>user name: {user.name}</h2>
            <h3>email: {user.email}</h3>
            <h4>phone: {user.phone} </h4>
          </li>
        ))}
      </ul>
    </>
  );
};

export default SignUp;
