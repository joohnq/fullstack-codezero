import React from "react";
import Radio from "@mui/material/Radio";
import "../../global.css";
import "../../App.css";
import "./style.css";

const RadioButton = () => {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="radioOptions">
      <div>
        <Radio
          {...controlProps("e")}
          sx={{
            color: "#ffd3ca",
            "&.Mui-checked": {
              color: "#eb8f7a",
            },
          }}
        />
        <span>Todos</span>
      </div>

      <div>
        <Radio
          {...controlProps("a")}
          sx={{
            color: "#ffd3ca",
            "&.Mui-checked": {
              color: "#eb8f7a",
            },
          }}
        />
        <span>Prioridade</span>
      </div>

      <div>
        <Radio
          {...controlProps("b")}
          sx={{
            color: "#ffd3ca",
            "&.Mui-checked": {
              color: "#eb8f7a",
            },
          }}
        />
        <span>Normal</span>
      </div>
    </div>
  );
};

export default RadioButton;
