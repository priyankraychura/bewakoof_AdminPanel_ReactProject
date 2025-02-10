import React from "react";
import { FormControl, InputLabel, MenuItem, Select, OutlinedInput } from "@mui/material";

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

export default function SelectDropdown({ label, options, value, onChange, isDisabled = false }) {
  return (
    <FormControl sx={{ m: 1, width: '25ch' }}>
      <InputLabel>{label}</InputLabel>
      <Select
        value={value}
        onChange={onChange}
        input={<OutlinedInput label={label} />}
        MenuProps={MenuProps}
        disabled={isDisabled}
      >
        {options.map((option) => (
          <MenuItem key={option.id} value={option.label}>
            {option.label}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  );
}
