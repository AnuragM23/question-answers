import React from "react";
import { useState } from "react";

function Main() {
  // const [question, setQuestion] = useState(Question);
  // const [op1, setOp1] = useState(OptionA);
  // const [op2, setOp2] = useState(OptionB);
  // const [op3, setOp3] = useState(OptionC);
  // const [op4, setOp4] = useState(OptionD);

  return (
    <div>
      <div className="mx-24">
        {/* question heading */}
        <h1 className="text-3xl font-bold text-center m-8">Question</h1>

        {/* questions */}
        <div className="m-4 grid gap-4">
          <div className=" min-h-[150px] rounded-lg"></div>
        </div>

        {/* answers */}
        <div className="m-3 py-3 grid">
          <div className=" min-h-[100px]">
            <div className=" min-h-[80px] hover:border-blue-500 border-4 rounded-lg"></div>
          </div>

          <div className=" min-h-[100px]">
            <div className=" min-h-[80px] hover:border-blue-500 border-4 rounded-lg"></div>
          </div>

          <div className=" min-h-[100px]">
            <div className=" min-h-[80px] hover:border-blue-500 border-4 rounded-lg"></div>
          </div>

          <div className=" min-h-[100px]">
            <div className=" min-h-[80px] hover:border-blue-500 border-4 rounded-lg"></div>
          </div>
        </div>

        {/* submit-button */}
        <div className="flex">
          <div className="w-2/6 p-2 mx-auto rounded-3xl text-center bg-green-500 ">
            Next
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
