import useCounter from "../hooks/use-counter";

import Card from "./Card";

const ForwardCounter = () => {
  
  const counter = useCounter(); // the default argument is true here no need too pass it 
  // this logic has been converted to a custom hoook
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter + 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);

  return <Card>{counter}</Card>;
};

export default ForwardCounter;
