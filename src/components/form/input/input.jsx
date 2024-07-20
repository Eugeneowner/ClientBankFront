import s from "./input.module.scss";

const InputForm = ({ label, handleUpdate, value, type = "text", formName }) => {
  return (
    <label className={s.label}>
      <p className={s.label_text}>{label}</p>
      <input
        onChange={e=>handleUpdate(formName, e.target.value)}
        value={value}
        className={s.label_input}
        type={type}
      />
    </label>
  );
};

export default InputForm