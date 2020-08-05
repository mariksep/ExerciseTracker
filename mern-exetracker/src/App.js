import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";

//Components
import Navi from "./component/navbar";
import ExerciseList from "./component/exercisesList";
import EditExercise from "./component/editExercise";
import CreateExercise from "./component/createExercise";
import CreateUser from "./component/createUser";

function App() {
  return (
    <Router>
      <div className="container">
        <Navi />
        <br />
        <Route path="/" exact component={ExerciseList} />
        <Route path="/edit/:id" exact component={EditExercise} />
        <Route path="/create" component={CreateExercise} />
        <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
}

export default App;
