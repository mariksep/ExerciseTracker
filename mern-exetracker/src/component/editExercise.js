import React, { useState, useEffect } from "react";
import useEditDestination from "../Hooks.js/editExerciseHooks";
import { addEdit } from "../Hooks.js/ApiHooks";
import axios from "axios";
import PropTypes from "prop-types";

//Bootstarp
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const EditExercise = ({ match }) => {
  const [users, setUsers] = useState();

  const doEdit = async () => {
    console.log(inputs);
    const res = await addEdit(inputs, match.params.id);
    window.location = "/";
  };

  const {
    setInputs,
    inputs,
    handlesubmit,
    handleInputChange,
    handleDateChange,
  } = useEditDestination(doEdit);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/exercises/${match.params.id}`)
      .then((res) => setInputs(res.data))
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("http://localhost:5000/users/")
      .then((res) => setUsers(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [setUsers]);
  console.log(inputs.date);

  return (
    <div>
      <h3>Edit Exercise Log</h3>
      <Form onSubmit={handlesubmit}>
        <Form.Group>
          <Form.Label>Username:</Form.Label>
          <Form.Control
            as="select"
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
          >
            {users !== undefined && (
              <>
                {users.map((user) => (
                  <option key={user._id}>{user.username}</option>
                ))}
              </>
            )}
          </Form.Control>
        </Form.Group>

        <Form.Group>
          <Form.Label>Description</Form.Label>
          <Form.Control
            name="description"
            value={inputs.description}
            onChange={handleInputChange}
            type="text"
          />
        </Form.Group>

        <Form.Group>
          <Form.Label>Duration (in minutes)</Form.Label>
          <Form.Control
            name="duration"
            onChange={handleInputChange}
            value={inputs.duration}
            type="text"
          />
        </Form.Group>
        <Form.Group>
          <Form.Label>Date:</Form.Label>
          <div>
            <DatePicker
              name="date"
              onChange={handleDateChange}
              selected={Date.parse(inputs.date)}
            />
          </div>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

EditExercise.propTypes = {
  match: PropTypes.object,
};

export default EditExercise;
