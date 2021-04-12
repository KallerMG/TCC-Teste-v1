import { useForm } from "react-hook-form";
//import { getLogin } from "../services/login";
//import { toast } from "react-toastify";

import "../styles/Login.css";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const Login = () => {
  const { register, handleSubmit } = useForm();

  return (
    <div className="divlogin">
      <form className="formlogin">
        <h3>Entrar no Sistema</h3>
        <div className="divLoginInputs">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            color="secondary"
            type="email"
          />
        </div>
        <div className="divLoginInputs">
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            color="secondary"
            type="password"
          />
        </div>

        <div className="divLoginInputs">
          <Button type="submit" variant="contained" color="primary" onClick="">
            Login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default Login;
