import React from "react";
import {
  Card,
  CardContent,
  Typography,
  Radio,
  RadioGroup,
  FormControlLabel,
  FormControl,
  FormLabel,
} from "@mui/material";

const Question = ({ question, options, selectedOption, onChange }) => {
  return (
    <Card variant="outlined">
      <CardContent>
        <FormControl component="fieldset">
          <FormLabel component="legend">
            <Typography variant="h6">{question}</Typography>
          </FormLabel>
          <RadioGroup
            value={selectedOption}
            onChange={onChange}
            name="quiz-options"
          >
            {options.map((option, index) => (
              <FormControlLabel
                key={index}
                value={option}
                control={<Radio />}
                label={option}
              />
            ))}
          </RadioGroup>
        </FormControl>
      </CardContent>
    </Card>
  );
};

export default Question;
