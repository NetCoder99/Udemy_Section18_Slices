import { useState } from 'react';
import { useSelector, useDispatch, RootStateOrAny } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions, toggleActions } from "../store/counterStore";
//import { sleep } from "../store/sleep";

const Counter = () => {
  const dispatch  = useDispatch()

  const counter   = useSelector((state: RootStateOrAny) => state.counter);
  const toggle    = useSelector((state: RootStateOrAny) => state.toggle);
  
  const [isLoading, setIsLoading] = useState(false);
  
  
  // ------------------------------------------------------------------------------------------
  function getAmount(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): number {
   return parseInt(event.currentTarget.getAttribute('data-amount') || "1");   
  }
  
  // ------------------------------------------------------------------------------------------
  function getMethod(event: React.MouseEvent<HTMLButtonElement, MouseEvent>): any {
    switch (event.currentTarget.getAttribute('data-id')) {
      case counterActions.increment.toString(): {
        return counterActions.increment({amount: getAmount(event)});
      }
      case counterActions.decrement.toString(): {
        return counterActions.decrement();
      }
      case counterActions.toggle.toString(): {
        return toggleActions.toggle();
      }
      case counterActions.reset.toString(): {
        return counterActions.reset();
      }
    }
  }

  // ------------------------------------------------------------------------------------------
  const buttonClickHandler = async (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setIsLoading(true); //await sleep(150);
    dispatch(getMethod(event));
    setIsLoading(false);
  };

  // ------------------------------------------------------------------------------------------
  const toggleMessage = toggle.showCount ? "Hide Counter" : "Show Counter";

  // ------------------------------------------------------------------------------------------
  return (
    <main className={`${classes.counter} ${classes.wrapper}`}>
      <div className={classes.item1}>
        <h1>Redux Counter</h1>
        {toggle.showCount && <div className={classes.value}>{counter.counter}</div>}
        {!toggle.showCount && <div className={classes.value}>&nbsp;</div>}
      </div>

      <div className={classes.item3}>
        <button 
          disabled={isLoading} 
          onClick={buttonClickHandler}  
          data-id={counterActions.increment.toString()} 
          data-amount="1">Increment</button>
      </div>
      <div className={classes.item4}><button disabled={isLoading} onClick={buttonClickHandler}  data-id={counterActions.increment.toString()} data-amount="5">Increment By 5</button></div>
      <div className={classes.item5}><button disabled={isLoading} onClick={buttonClickHandler}  data-id={counterActions.decrement.toString()} data-amount="1">Decrement</button></div>

      <div className={classes.item6}></div>
      <div className={classes.item7}><button onClick={buttonClickHandler} data-id={counterActions.toggle.toString()} >{toggleMessage}</button></div>
      <div className={classes.item8}><button onClick={buttonClickHandler} data-id={counterActions.reset.toString()} >Reset Counter</button></div>
    </main>
  );
};

export default Counter;
