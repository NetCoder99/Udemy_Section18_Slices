import classes from './Header.module.css';

const Header = () => {
  return (
    <header className={classes.header}>
      <h1>Redux</h1>
      <nav>
        <ul>
          <li>
            <a href='/counter'>Counter</a>
          </li>
          <li>
            <a href='/'>Products</a>
          </li>
          <li>
            <a href='/'>Sales</a>
          </li>
          <li>
            <button>Logout</button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
