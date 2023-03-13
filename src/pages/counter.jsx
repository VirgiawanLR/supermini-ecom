import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  increment,
  decrement,
  randomNumber,
} from "../features/counter/counterSlice";

function Counter() {
  //useSelectore = for access global state
  //useDispatch = for access actions
  const count = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();
  return (
    <div className="flex items-center gap-3">
      <button
        className="px-3 py-2 rounded-full bg-sky-500 text-white"
        onClick={() => dispatch(decrement())}
      >
        kurang
      </button>
      <p>Counter {count}</p>
      <button
        className="px-3 py-2 rounded-full bg-sky-500 text-white"
        onClick={() => dispatch(increment())}
      >
        tambah
      </button>
      <button
        className="px-3 py-2 rounded-full bg-sky-500 text-white"
        onClick={() => dispatch(randomNumber())}
      >
        random number
      </button>
    </div>
  );
}

export default Counter;
