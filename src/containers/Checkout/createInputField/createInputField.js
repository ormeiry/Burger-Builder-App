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
      valid: true,
      value: "fastest",
      validation: {
        required: true,
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
      validation: {
        required: true,
      },
      valid: false,
      touched: false,
    };
  }

  return inputFieldData;
};

export default createInputField;
