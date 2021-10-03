import { Fragment } from "react";
import { RootStateOrAny, useSelector } from "react-redux";

import Counter from "./components/Counter";
import Header  from "./components/Header";
import Auth    from "./components/Auth";

function App() {
  const authState   = useSelector((state: RootStateOrAny) => state.auth);
  return (
    <Fragment>
      <Header />
      {authState.isAuthenticated && <Counter />}
      {!authState.isAuthenticated && <Auth />}
    </Fragment>
  );
}

export default App;
