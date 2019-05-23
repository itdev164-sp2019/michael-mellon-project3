import React from "react";
import ReactDOM from "react-dom";
import Typography from "@material-ui/core/Typography";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import useTodoState from "./components/useTodoState";
import "./style.scss";

const App = () => {
  const { todos, addTodo, deleteTodo } = useTodoState([]);

  return (
    <div className="App">
      <br />
      <Typography component="h1" variant="h2">
        Quick-Do
        <br />
        <br />
      </Typography>
      <TodoForm
        saveTodo={todoText => {
          const trimmedText = todoText.trim();

          if (trimmedText.length > 0) {
            addTodo(trimmedText);
          }
        }}
      />
      <TodoList todos={todos} deleteTodo={deleteTodo} />
    </div>
  );
};

const rootElement = document.getElementById("root");

ReactDOM.render(<App />, rootElement);
