import { useState } from "react";
import { validateEmail } from "../../utils.js";

/* - - - password check logic - -

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

- - - - - - - - - - - - - - - - - - */

/* no needed in meta's code, see difference below
function isPasswordOk(pass) {
  if (pass.length >= 8) return true;
  return false;
} */

const PasswordErrorMessage = () => {
  return (
    <p className="FieldError">Password should have at least 8 characters</p>
  );
};

function RegistrationForm() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState({
    value: "",
    isTouched: false,
  });
  const [role, setRole] = useState("role");

  //   const getIsFormValid = () => {
  //     if (firstName && validateEmail(email) && isPasswordOk(password.value) && role !== "role") {
  //       return true;
  //     }
  //     return false;
  //   };

  // meta's code
  const getIsFormValid = () => {
    return (
      firstName &&
      validateEmail(email) &&
      password.value.length >= 8 &&
      role !== "role"
    );
  };
  // - - -

  const clearForm = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setPassword({
      value: "",
      isTouched: false,
    });
    setRole("role");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Account created!");
    clearForm();
  };

  return (
    <div className="App">
      <form onSubmit={handleSubmit}>
        <fieldset>
          <h2>Sign Up</h2>
          <div className="Field">
            <label>
              First name <sup>*</sup>
            </label>
            <input
              placeholder="First name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>Last name</label>
            <input
              placeholder="Last name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Email address <sup>*</sup>
            </label>
            <input
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="Field">
            <label>
              Password <sup>*</sup>
            </label>
            <input
              type="password"
              placeholder="Password"
              value={password.value}
              onChange={(e) =>
                setPassword({ ...password, value: e.target.value })
              }
              //   onBlur={() => {
              //     if (!isPasswordOk(password.value)) {
              //       setPassword({ ...password, isTouched: true });
              //     }
              //   }}

              // meta's code
              onBlur={() => {
                setPassword({ ...password, isTouched: true });
              }}
              // - - -
            />

            {/* {password.isTouched && !isPasswordOk(password.value) && (
              <PasswordErrorMessage />
            )} */}

            {/* meta's code */}
            {password.isTouched && password.value.length < 8 ? (
              <PasswordErrorMessage />
            ) : null}
            {/* - - - */}
          </div>
          <div className="Field">
            <label>
              Role <sup>*</sup>
            </label>
            <select value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="role">Role</option>
              <option value="individual">Individual</option>
              <option value="business">Business</option>
            </select>
          </div>
          <button type="submit" disabled={!getIsFormValid()}>
            Create account
          </button>
        </fieldset>
      </form>
    </div>
  );
}

export default RegistrationForm;
