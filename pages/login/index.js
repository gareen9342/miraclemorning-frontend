import CenteredLayout from "../../components/CenteredLayout";
import GoogleLoginButton from "../../components/GoogleLogin";
import { TextInput } from "../../components/UI";
import useInput from "../hooks/useInput";

const Login = () => {
  const [email, onChangeEmail, setEmail] = useInput("");

  return (
    <CenteredLayout>
      <GoogleLoginButton setEmail={setEmail} />
      <TextInput value={email} onChange={onChangeEmail} />
    </CenteredLayout>
  );
};

export default Login;
