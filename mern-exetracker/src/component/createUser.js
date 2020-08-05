import React from "react";
import useCreateUser from "../Hooks.js/createUserHooks";
import { addUser } from "../Hooks.js/ApiHooks";
//Bootstarp
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const CreateUser = () => {
  const doAdd = async () => {
    console.log(inputs);
    const res = await addUser(inputs);
  };

  const { inputs, handlesubmit, handleInputChange } = useCreateUser(doAdd);
  return (
    <div>
      <h3>Create New User</h3>
      <Form onSubmit={handlesubmit}>
        <Form.Group>
          <Form.Label>username</Form.Label>
          <Form.Control
            name="username"
            value={inputs.username}
            onChange={handleInputChange}
            type="text"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default CreateUser;
