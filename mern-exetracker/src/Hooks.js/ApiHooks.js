import axios from "axios";
import { useState } from "react";

const addUser = (user) => {
  axios
    .post("http://localhost:5000/users/add", user)
    .then((res) => console.log(res.data));
};
const addExercise = (exercise) => {
  axios
    .post("http://localhost:5000/exercises/add", exercise)
    .then((res) => console.log(res.data));
};

const addEdit = (edits, id) => {
  axios
    .post(`http://localhost:5000/exercises//update/${id}`, edits)
    .then((res) => console.log(res.data));
};

export { addUser, addExercise, addEdit };
