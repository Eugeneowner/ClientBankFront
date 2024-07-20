import s from "./form.module.scss";
import { useState } from "react";
import { useDispatch } from "react-redux";

import generateLabel from "../../scripts/generateLabel";

import Button from "./button/button";
import InputForm from "./input/input";
import { sendForm } from "../../redux/slices/users";

const Form = ({ list, type }) => {
  const dispatch = useDispatch();
  const [formData, setFormData] = useState({});
  const handleUpdate = (formName, newValue) => {
    setFormData((prev) => ({
      ...prev,
      [formName]: newValue,
    }));
  };
  const handleClick = () => {
    dispatch(sendForm(type, formData));
  };
  return (
    <form className={s.form}>
      {list.map((input) => (
        <InputForm
          key={input}
          label={generateLabel(input)}
          value={formData[input]}
          formName={input}
          handleUpdate={handleUpdate}
        />
      ))}
      <Button handleClick={handleClick} text="Send" />
    </form>
  );
};

export default Form;
