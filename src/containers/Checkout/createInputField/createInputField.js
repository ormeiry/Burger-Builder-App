const createInputField = (
  field,
  elementType,
  type = null,
  placeholder = null
) => {
  let inputFieldData = {};

  if (field === "deliverMethod") {
    inputFieldData = {
      elementType,
      elementConfig: {
        options: [
          { value: "fastest", displayValue: "Fastest" },
          { value: "cheapest", displayValue: "Cheapest" },
        ],
      },
    };
  } else {
    inputFieldData = {
      elementType,
      elementConfig: {
        type,
        placeholder,
      },
      value: "",
    };
  }

  return inputFieldData;
};

export default createInputField;
