import React, { useState, useEffect } from "react";
import usePostDestination from "../Hooks.js/exerciseHooks";
import { addExercise } from "../Hooks.js/ApiHooks";
import axios from "axios";

//Bootstarp
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//datepicker
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const CreateExercise = () => {
  const [users, setUsers] = useState();
  const doAdd = async () => {
    console.log(inputs);
    const res = await addExercise(inputs);
    window.location = "/";
  };

  useEffect(() => {
    axios
      .get("http://localhost:5000/users/")
      .then((res) => setUsers(res.data))
      .catch((error) => {
        console.log(error);
      });
  }, [setUsers]);

  const {
    inputs,
    handlesubmit,
    handleInputChange,
    handleDateChange,
  } = usePostDestination(doAdd);
  console.log(users);
  return (
    <div>
      <h3>Create New Exercise Log</h3>
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
                <option> </option>
                {users.map((user) => (
                  <option key={user._id} value={user.username}>
                    {user.username}
                  </option>
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
              selected={inputs.date}
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

export default CreateExercise;
