import React from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questionList, onDelete, onUpdate }) {

  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{
      /* display QuestionItem components after fetching */
      questionList.map(question => {
        return <QuestionItem
                  key={question.id} 
                  question={question} 
                  onDeleteQuestion={onDelete} 
                  onUpdateQuestion={onUpdate} 
                />
      })
      }</ul>
    </section>
  );
}

export default QuestionList;
