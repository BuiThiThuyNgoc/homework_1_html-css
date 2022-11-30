import React, { useState } from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
const App = () => {
  const [value, setValue] = useState("first");
  return (
    <div>
      <FormControl style={{ width: "300px" }}>
        <InputLabel htmlFor="my-select">My Select</InputLabel>
        <Select
          value={value}
          onChange={(e) => setValue(e.target.value)}
          inputProps={{ id: "my-select" }}
        >
          <MenuItem value="first">First</MenuItem>
          <MenuItem value="second">Second</MenuItem>
          <MenuItem value="third">Third</MenuItem>
        </Select>
      </FormControl>
    </div>
  );
};

export default App;