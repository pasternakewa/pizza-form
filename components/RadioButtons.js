const RadioButtons = ({ name }) => {
  const createRadioButton = props.options.map((option) => {
    return (
      <div>
        <label>{option}</label>
        <input type="radio" value={option} key={option} name={props.name} />
      </div>
    );
  });

  return (
    <div>
      <label>{name}</label>
      <div onChange={handleChange}>{createRadioButton}</div>
    </div>
  );
};

export default RadioButtons;
