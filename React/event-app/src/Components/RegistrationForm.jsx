import React, { useState } from "react";

// TODO
// создайте форму регистрации, после отправки покажите сообщение об успешной регистрации

//TODO homework
// Создай компонент, который содержит поле ввода пароля и показывает уровень силы пароля (слабый, средний, сильный) в зависимости от длины и сложности пароля. Критерии и уровни сложности выбирайте сами. Обязательно использовать useState.

function RegistrationForm() {
  const [user, setUser] = useState({});
  const [pass, setPass] = useState("");
  const [borderColor, setBorderColor] = useState("#999");

  function handleSubmit(e) {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;

    setUser({ name, email, password });
    e.target.reset();
  }

  function handleChangePass(e) {
    const password = e.target.value;
    const strength = getPasswordStrength(password);
    setPass(password);
    getColor(strength);
  }

  function getPasswordStrength(pass) {
    const minLength = 6;
    let score = 0;

    if (pass.length > minLength) score += 20;
    if (/[a-z]/.test(pass)) score += 20;
    if (/[A-Z]/.test(pass)) score += 20;
    if (/[0-9]/.test(pass)) score += 20;
    if (/[!@#$%^&*]/.test(pass)) score += 20;

    return score;
  }

  function getColor(score) {
    if (score > 0 && score < 40) setBorderColor("red");
    if (score >= 40 && score <= 70) setBorderColor("orange");
    if (score > 70) setBorderColor("green");
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input name="name" type="text" placeholder="Your name" required />
        <input name="email" type="email" placeholder="Your e-mail" required />
        <input
          name="password"
          type="password"
          placeholder="Your password"
          onChange={handleChangePass}
          style={{ border: `2px solid ${borderColor}`}}
          required
        />

        <button>sign in</button>
        
      </form>
    </>
  );
}

export default RegistrationForm;
