import { useState } from "react";


function Quiz() {
  // Currently displayed question
  const [activeQuestionIndex, setActiveQuestionIndex] = useState(0);
  // Answers selected by the user
  const [userAnswers, setUserAnswers] = useState([]);


  return (
    <p>Currently active Question</p>
  );
}

export default Quiz;