import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../Components/Input";
import Title from "../../Components/Title";
import Label from "../../Components/Label";
import Button, { ButtonType } from "../../Components/Button";
//@ts-ignore
import classNames from "classnames";
import styles from "./SignUp.module.css";
import { useThemeContext, Theme } from "../../Context/ThemeContext/Context";
import { PathNames } from "../Router";
import { useDispatch } from "react-redux";
import { createNewUser } from "../../Redux/reducers/authReducers";




const validateEmail = (email: string) => {
  return String(email)
    .toLowerCase()
    .match(
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    );
};


const SignUp = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState('');

  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);

  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [passwordTouched, setPasswordTouched] = useState(false);

  const [confirmPassword, setConfirmPassword] = useState('');
  const [confirmPasswordError, setconfirmPasswordError] = useState('');
  const [confirmPasswordTouched, setconfirmPasswordTouched] = useState(false);

  const {theme} = useThemeContext();

  useEffect(() => {
    if (emailTouched && !validateEmail(email)) {
      setEmailError('Set correct email');
    } else {
      setEmailError('');
    }
  }, [emailTouched, email]);

  useEffect(() => {
    if (passwordTouched && password.length < 8) {
      setPasswordError('Enter more than 8 characters');
    } else {
      setPasswordError('');
    }
  }, [passwordTouched, password]);

  useEffect(() => {
    if (confirmPasswordTouched && confirmPassword.length < 8) {
      setconfirmPasswordError ('enter more than 8 characters');
    } else if (confirmPasswordTouched && confirmPassword != password) {
      setconfirmPasswordError('Password does no match');
    } else {
      setconfirmPasswordError ('')
    }
  }, [confirmPasswordTouched, confirmPassword, password])

  const onBlurEmail = () => {
    setEmailTouched(true)
  };

  const onBlurPassword = () => {
    setPasswordTouched(true)
  };

  const onBlurConfirmPassword = () => {
    setconfirmPasswordTouched(true)
  };

  const onSignUp = () => {
    dispatch(createNewUser({username: name, email, password}))
  };

  const navigate = useNavigate();

  const onBackHomeClick = () => {
    navigate(PathNames.Home)
  };


  return (
    <div
      className={classNames(styles.container, {
        [styles.darkContainer]: theme === Theme.Dark
      })}
    >
      <div className={styles.headForm}>
        <div className={styles.backHomeBtn} onClick={onBackHomeClick}>Back to Home</div>
        <Title title={"Sign Up"} />
      </div>
      <div className={styles.formContainer}>
        <div className={styles.inputContainer}>
          <Label title={"Name"} />
          <Input placeholder={"Your name"} onChange={setName} value={name} />
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Email"} />
          <Input
            placeholder={"Your email"}
            onChange={setEmail}
            onBlur={onBlurEmail}
            value={email}
            error={!!emailError}
          />
          {emailTouched && emailError && <div>{emailError}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Password"} />
          <Input
            placeholder={"Your password"}
            onChange={setPassword}
            onBlur={onBlurPassword}
            value={password}
            error={!!passwordError}
          />
          {passwordTouched && passwordError && <div>{passwordError}</div>}
        </div>

        <div className={styles.inputContainer}>
          <Label title={"Confirm password"} />
          <Input
            placeholder={"Confirm password"}
            onChange={setConfirmPassword}
            onBlur={onBlurConfirmPassword}
            value={confirmPassword}
            error={!!confirmPasswordError}
          />
          {confirmPasswordTouched && confirmPasswordError && (
            <div>{confirmPasswordError}</div>
          )}
        </div>
        <div>
          <Button
            type={ButtonType.Primary}
            title={"Sign Up"}
            onClick={onSignUp}
            className={styles.signUpBtn}
            disabled={false}
          />
        </div>

        <div className={styles.haveAccount}>
          Already have an account? <Link to={PathNames.SignIn}>Sign In</Link>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
