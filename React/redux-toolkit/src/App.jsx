import React from "react";
import FormToDo from "./Components/FormToDo";
import ToDoList from "./Components/ToDoList";

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { getToDos } from "./store/slices/ToDoSlice";

import SingleToDo from "./Components/SingleToDo";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getToDos());
  }, []);

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <FormToDo />
              <ToDoList />
            </div>
          }
        />
        <Route
          path="/todos/:todoId"
          element={
            <>
              <button>back</button>
              <SingleToDo />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
