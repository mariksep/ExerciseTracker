import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const table = {
  padding: "1em",
  display: "flex",
  alignItems: "center",
  justifyContent: "space-between",
  backgroundColor: "lightgrey",
  border: "0.5px solid #b2b2b2",
  width: "100%",
  height: "5vh",
};
const exercise = {
  padding: "1em",
  display: "flex",
  alingItems: "center",
  justifyContent: "space-between",
  borderTop: "1px solid #b2b2b2",
};
const desc = {
  width: "10vw",
};

const ExerciseList = (props) => {
  const [exe, setExe] = useState();
  const Exercise = () => (
    <tr>
      <td>{exe.username}</td>
      <td>{exe.description}</td>
      <td>{exe.duration}</td>
    </tr>
  );

  useEffect(() => {
    axios
      .get("http://localhost:5000/exercises")
      .then((res) => setExe(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [setExe]);

  const deleteExe = (id) => {
    axios
      .delete("http://localhost:5000/exercises/" + id)
      .then((res) => console.log(res.data));
    /**Loads list again, when you call state */
    setExe(exe.filter((el) => el._id !== id));
  };
  console.log(exe);

  return (
    <div>
      <h3>Logged Exercises</h3>
      <div style={table}>
        <h6 style={desc}>Username</h6>
        <h6 style={desc}>Description</h6>
        <h6 style={desc}>Duration</h6>
        <h6 style={desc}>Date</h6>
        <h6 style={desc}>Actions</h6>
      </div>
      <>
        {exe !== undefined && (
          <div>
            {exe.map((file) => (
              <div key={file._id} style={exercise}>
                <h6 style={desc}> {file.username}</h6>
                <h6 style={desc}> {file.description}</h6>
                <h6 style={desc}> {file.duration}</h6>
                <h6 style={desc}>{file.date.substring(0, 10)}</h6>
                <h6 style={desc}>
                  <Link to={"/edit/" + file._id}>edit</Link> |
                  <a
                    href="#"
                    onClick={() => {
                      deleteExe(file._id);
                    }}
                  >
                    delete
                  </a>
                </h6>
              </div>
            ))}
          </div>
        )}
      </>
    </div>
  );
};

export default ExerciseList;
