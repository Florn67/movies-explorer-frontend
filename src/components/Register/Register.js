import UserForm from "../UserForm/UserForm";
import "./Register.css";

function Register() {
  return (
    <div className="register">
      <UserForm
        name="register"
        header="Добро пожаловать!"
        buttonText="Зарегистрироваться"
        linkLineText="Уже зарегистрированы?"
        linkText="Войти"
        link="/sign-in"
      />
    </div>
  );
}

export default Register;
