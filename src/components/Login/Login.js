import UserForm from "../UserForm/UserForm";
import "./Login.css";

function Login() {
  return (
    <div className="login">
      <UserForm
        name="login"
        header="Рады видеть!"
        buttonText="Войти"
        linkLineText="Еще не зарегистрированы?"
        linkText="Регистрация"
        link="/sign-up"
      />
    </div>
  );
}

export default Login;