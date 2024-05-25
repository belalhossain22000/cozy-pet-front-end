import { Checkbox, FormControlLabel, SxProps } from "@mui/material";
import { Controller, useFormContext } from "react-hook-form";

type TCheckboxProps = {
  name: string;
  label?: string;
  sx?: SxProps;
  required?: boolean;
};

const CPCheckbox = ({
  name,
  label,
  sx,
  required,
}: TCheckboxProps) => {
  const { control } = useFormContext();
  return (
    <Controller
      control={control}
      name={name}
      render={({ field: { onChange, value }, fieldState: { error } }) => (
        <FormControlLabel
          control={
            <Checkbox
              sx={{ ...sx }}
              checked={!!value}
              onChange={(e) => onChange(e.target.checked)}
              color="primary"
            />
          }
          label={label}
          required={required}
        />
      )}
    />
  );
};

export default CPCheckbox;
