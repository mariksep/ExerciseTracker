import { useState } from "react";

const useEditExercise = (callback) => {
  const [inputs, setInputs] = useState({
    username: "",
    description: "",
    duration: "",
    date: "",
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

  const handleDateChange = (date) => {
    setInputs((inputs) => {
      return {
        ...inputs,
        date: date,
      };
    });
  };

  return {
    inputs,
    setInputs,
    handlesubmit,
    handleInputChange,
    handleDateChange,
  };
};

export default useEditExercise;
