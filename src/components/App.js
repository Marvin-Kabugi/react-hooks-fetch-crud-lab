import React, { useState, useEffect } from "react";
import AdminNavBar from "./AdminNavBar";
import QuestionForm from "./QuestionForm";
import QuestionList from "./QuestionList";

function App() {
  const [page, setPage] = useState("List");
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    fetch("http://localhost:4000/questions")
      .then(r => r.json())
      .then(questions => setQuestions(questions))
  }, []);

  function addQuestion(question) {
    setQuestions([...questions, question]);
  }

  function deleteQuestion(questionToDelete){
    const updatedQuestions = questions.filter(question => question.id !== questionToDelete.id)
    setQuestions(updatedQuestions);
  }

  function updateQuestion(questionToUpdate){
    const updatedQuestions = questions.map(question => {
      if(question.id === questionToUpdate.id) return questionToUpdate;
      else return question;
    });
    setQuestions(updatedQuestions);
  }

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm onAddQuestion={addQuestion} /> : 
      <QuestionList questionList={questions} onDelete={deleteQuestion} onUpdate={updateQuestion} />}
    </main>
  );
}

export default App;
