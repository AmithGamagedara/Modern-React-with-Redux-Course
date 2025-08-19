import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import Panel from "../components/Panel";

function CounterPage({ initialCount }) {
  const [count, setCount] = useState(initialCount);
  const [valueToAdd, setValueToAdd] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    setCount(count - 1);
  };

  const handleChange = (event) => {
    const value = parseInt(event.target.value) || 0;

    setValueToAdd(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    setCount(count + valueToAdd);
    setValueToAdd(0);
  };

  return (
    <Panel className="m-4">
      <h1 className="text-lg font-semibold text-gray-700">Count is {count}</h1>
      <div className="flex flex-row">
        <Button primary onClick={increment} className="m-2">
          + Increment
        </Button>
        <Button primary onClick={decrement} className="m-2">
          - Decrement
        </Button>
      </div>

      <form onSubmit={handleSubmit}>
        <label>Add a lot!</label>
        <input
          value={valueToAdd || ""}
          onChange={handleChange}
          type="number"
          className="p-1 m-3 bg-gray-50 border border-gray-300"
        />
        <Button outline>Add it!</Button>
      </form>
    </Panel>
  );
}

export default CounterPage;
