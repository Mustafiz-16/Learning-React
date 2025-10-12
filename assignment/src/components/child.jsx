
const Child = ({ increment }) => {
  console.log("Child render");
  return <button onClick={increment}>Increment</button>;
};

export default Child;

