import logoImg from "./image/stack-login.png";
const LogIn = () => {
  return (
    <>
      <div className="logIn-container">
        <div className="logIn-InnerContainer">
          <a href="/" className="login-logo">
            <img src={logoImg} alt="Logo" />
          </a>
          <ul className="login-btnGroup">
            <li>
              <a
                href="https://accounts.google.com/o/oauth2/auth/oauthchooseaccount?client_id=717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com&scope=profile%20email&redirect_uri=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Fgoogle&state=%7B%22sid%22%3A1%2C%22st%22%3A%2259%3A3%3Abbc%2C16%3Ac41242a3c65610ed%2C10%3A1643907841%2C16%3Afc703c8cfec7cfaf%2Ccd6031bd692c7b83c6fe0680e72c1fec7677d311345b84fff59c118ab821af53%22%2C%22cid%22%3A%22717762328687-iludtf96g1hinl76e4lc1b9a82g457nn.apps.googleusercontent.com%22%2C%22k%22%3A%22Google%22%2C%22ses%22%3A%22dd257b644649432f8e031c8344e1477d%22%7D&response_type=code&flowName=GeneralOAuthFlow"
                className="google"
              >
                Log in with Google
              </a>
            </li>
            <li>
              <a
                href="https://github.com/login?client_id=01b478c0264a1fbd7183&return_to=%2Flogin%2Foauth%2Fauthorize%3Fclient_id%3D01b478c0264a1fbd7183%26redirect_uri%3Dhttps%253A%252F%252Fstackauth.com%252Fauth%252Foauth2%252Fgithub%26response_type%3Dcode%26scope%3Duser%253Aemail%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253A1de31519f3ee998a%252C10%253A1643907736%252C16%253A88a0034805799976%252Cbf0dd8c92aa6106e11a2bba26de3da0793496baea9dc95db82a982c12d2ff2f2%2522%252C%2522cid%2522%253A%252201b478c0264a1fbd7183%2522%252C%2522k%2522%253A%2522GitHub%2522%252C%2522ses%2522%253A%2522b38dffb05644422ea1fe0565162ec321%2522%257D"
                className="github"
              >
                Log in with GitHub
              </a>
            </li>
            <li>
              <a
                href="https://www.facebook.com/login.php?skip_api_login=1&api_key=145044622175352&kid_directed_site=0&app_id=145044622175352&signed_next=1&next=https%3A%2F%2Fwww.facebook.com%2Fv2.0%2Fdialog%2Foauth%3Fclient_id%3D145044622175352%26scope%3Demail%26redirect_uri%3Dhttps%253A%252F%252Fstackauth.com%252Fauth%252Foauth2%252Ffacebook%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253A9df0439e8dc0c43f%252C10%253A1643907766%252C16%253A5cba73eb5109d7a7%252C0430e1605024d16ed6cf13aad863c79fea4976b3c95d3f971cb151001bd2e16d%2522%252C%2522cid%2522%253A%2522145044622175352%2522%252C%2522k%2522%253A%2522Facebook%2522%252C%2522ses%2522%253A%252258afda25359a480fa9a9000147af703c%2522%257D%26ret%3Dlogin%26fbapp_pres%3D0%26logger_id%3D31636ca5-2681-484b-ae51-66b6b1abf918%26tp%3Dunspecified&cancel_url=https%3A%2F%2Fstackauth.com%2Fauth%2Foauth2%2Ffacebook%3Ferror%3Daccess_denied%26error_code%3D200%26error_description%3DPermissions%2Berror%26error_reason%3Duser_denied%26state%3D%257B%2522sid%2522%253A1%252C%2522st%2522%253A%252259%253A3%253Abbc%252C16%253A9df0439e8dc0c43f%252C10%253A1643907766%252C16%253A5cba73eb5109d7a7%252C0430e1605024d16ed6cf13aad863c79fea4976b3c95d3f971cb151001bd2e16d%2522%252C%2522cid%2522%253A%2522145044622175352%2522%252C%2522k%2522%253A%2522Facebook%2522%252C%2522ses%2522%253A%252258afda25359a480fa9a9000147af703c%2522%257D%23_%3D_&display=page&locale=en_US&pl_dbl=0"
                className="facebook"
              >
                Log in with Facebook
              </a>
            </li>
          </ul>
          {/* <LogInForm /> */}
          <form action="" className="login-form">
            <div className="login-inputGroup">
              <label htmlFor="">Email</label>
              <input type="email" />
            </div>
            <div className="login-inputGroup">
              <label htmlFor="">Password</label>
              <input type="password" />
            </div>

            <button>Log in</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default LogIn;
