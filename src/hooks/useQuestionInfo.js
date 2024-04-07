import { useEffect, useState } from "react";
import output from "../assets/output.json";

function useQuestionInfo(questionNo) {
  const [quest, setQuest] = useState({});
  useEffect(() => {
    fetch(output)
    .then((res)=>res.json())
    .then((res) => setQuest(res[questionNo]));
    //console.log(quest)
  }, [questionNo]);
  // console.log(quest);
  return quest;
}

export default useQuestionInfo;
