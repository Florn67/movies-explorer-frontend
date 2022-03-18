import UserForm from "../UserForm/UserForm";
import "./Register.css";

function Register(props) {
  return (
    <div className="register">
      <UserForm
        name="register"
        header="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkLineText="Уже зарегистрированы?"
        linkText="Войти"
        link="/sign-in"
        onRegisterSubmit={props.onRegisterSubmit}
      />
    </div>
  );
}

export default Register;
