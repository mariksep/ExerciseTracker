import { useState } from "react";

const useCreateUser = (callback) => {
  const [inputs, setInputs] = useState({
    username: "",
  });
  const handlesubmit = (event) => {
    if (event) {
      event.preventDefault();
    }
    console.log(inputs);
    callback();
  };

  const handleInputChange = (event) => {
    event.persist();
    setInputs((inputs) => {
      return {
        ...inputs,
        [event.target.name]: event.target.value,
      };
    });
  };

  return {
    inputs,
    setInputs,
    handlesubmit,
    handleInputChange,
  };
};

export default useCreateUser;
