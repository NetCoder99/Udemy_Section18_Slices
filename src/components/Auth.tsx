import React, { useRef } from 'react';
import classes from './Auth.module.css';
import { useDispatch  } from "react-redux";
import { authActions  } from "../store/authSlice";
import { validateForm, validateEmail } from "../functions/validateAuth";

const Auth = () => {
  const dispatch   = useDispatch()
  const loginEmail = useRef<HTMLInputElement>(null);

  // ------------------------------------------------------------------------------------------
  const buttonClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Auth.buttonClickHandler");
    event.preventDefault();

    const t1 = loginEmail.current?.value || "";
    const formErrors = validateForm(t1, "");
    console.log("Auth.formErrors");
    console.log(formErrors);

    //const err1 = validateEmail(t1);
    //console.log("Auth.err1");
    //console.log(err1);

    //const t1 = loginEmail.current?.value || "";
    dispatch(authActions.login({loginEmail : t1}));
  };
  
  return (
    <main className={classes.auth}>
      <section>
        <form>
          <div className={classes.control}>
            <label htmlFor='email'>Email</label>
            <input type='email' id='email' ref={loginEmail} />
          </div>
          <div className={classes.control}>
            <label htmlFor='password'>Password</label>
            <input type='password' id='password' />
          </div>
          <button onClick={buttonClickHandler}>Login</button>
        </form>
      </section>
    </main>
  );
};

export default Auth;
