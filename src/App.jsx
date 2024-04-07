import { useState} from "react";
import Main from "./components/Main";
import useQuestionInfo from "./hooks/useQuestionInfo";

function App() {
  
  const [questionNo, setQuestionNo] = useState(1);
  const [question, setQuestion] = useState("--");
  const [op1, setOp1] = useState("--");
  const [op2, setOp2] = useState("--");
  const [op3, setOp3] = useState("--");
  const [op4, setOp4] = useState("--");

  const quests = useQuestionInfo(questionNo)
  setOp1((res)=>quests["OptionA"])
  setOp2((res)=>quests["OptionB"])
  setOp3((res)=>quests["OptionC"])
  setOp4((res)=>quests["OptionD"])

  return (
    <>
      <Main 
        Question={question}
        OptionA = {op1}
        OptionB = {op2}
        OptionC = {op3}
        OptionD = {op4}
      />
    </>
  );
}

export default App;
