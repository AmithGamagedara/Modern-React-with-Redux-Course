import React, { useEffect, useState } from "react";
import Button from "../components/Button";
import useCounter from "../hooks/use-counter";

function CounterPage({ initialCount }) {
  const { count, increment } = useCounter(initialCount);

  return (
    <div>
      <hi>Count is {count}</hi>
      <Button primary onClick={increment}>
        increase
      </Button>
    </div>
  );
}

export default CounterPage;
