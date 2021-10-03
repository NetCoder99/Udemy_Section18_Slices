import classes from './Header.module.css';
import { RootStateOrAny, useSelector, useDispatch } from "react-redux";
import { authActions } from "../store/authSlice";

const Header = () => {
  const dispatch   = useDispatch()
  const authState   = useSelector((state: RootStateOrAny) => state.auth);
  const buttonText  = authState.isAuthenticated ? authState.loginEmail : "Login";

  // ------------------------------------------------------------------------------------------
  const buttonClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log("Header.buttonClickHandler");
    event.preventDefault();
    dispatch(authActions.logout());
  };
  

  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>{authState.isAuthenticated && <a href='/counter'>Counter</a>}</li>
          <li>{authState.isAuthenticated && <a href='/products'>Products</a>}</li>
          <li>{authState.isAuthenticated && <a href='/sales'>Sales</a>}</li>
          <li><button onClick={buttonClickHandler}>{buttonText}</button></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
