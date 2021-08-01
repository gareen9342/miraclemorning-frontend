import GoogleLogin from "react-google-login";

const GoogleLoginButton = () => {
  const responseGoogle = (response) => {
    console.log(response);
  };

  return (
    <>
      <div>
        <GoogleLogin
          clientId={process.env.googleClientId}
          buttonText="Login with Google"
          onSuccess={responseGoogle}
          onFailure={responseGoogle}
          cookiePolicy={"single_host_origin"}
        />
      </div>
    </>
  );
};

export default GoogleLoginButton;
