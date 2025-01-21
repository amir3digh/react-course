import { useState } from "react";
import Exercise01 from "./Exercise-01";
import Exercise02 from "./Exercise02";
import Exercise03 from "./Exercise03";

function App() {
  // firstName state is for Exercise01 and Exercise02
  // const [firstName, setFirstName] = useState("");

  return (
    <div className="flex w-screen justify-center">
      <Exercise03 />
      {/* <Exercise01 firstName={firstName} setFirstName={setFirstName} />
      <Exercise02 firstName={firstName} /> */}
    </div>
  );
}

export default App;
