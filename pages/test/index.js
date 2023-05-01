import { useState } from "react";

function MyPage() {
  const [response, setResponse] = useState("");

  async function handleClick() {
    try {
      const res = await fetch("http://3.72.38.1:3000/show-result");
      const text = await res.text();
      //   console.log(text);
      setResponse(text);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <div>
      <button onClick={handleClick}>Get Result</button>
      <div>{response}</div>
    </div>
  );
}

export default MyPage;
