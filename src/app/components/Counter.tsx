"use client";
import { Button, Paper, Typography } from "@mui/material";
import { useState } from "react";

interface CounterProps {
  incrementBy: number;
  bgColor: string;
}
const Counter: React.FC<CounterProps> = ({ incrementBy, bgColor }) => {
  const [count, setCount] = useState(0);

  const handleClickButton = () => {
    const newCount = count + incrementBy;
    if (newCount > 10) {
      setCount(0);
    } else {
      setCount(newCount);
    }
  };

  return (
    <Paper
      variant="outlined"
      elevation={24}
      sx={{
        width: "40%",
        m: 3,
      }}
    >
      <Typography variant="h5" component="h5">
        Counter incrementing by {incrementBy} and background color {bgColor}
      </Typography>
      <Typography variant="body1">Count: {count}</Typography>
      <Button
        onClick={handleClickButton}
        sx={{
          backgroundColor: bgColor,
          "&:hover": { backgroundColor: bgColor },
        }}
      >
        Increment
      </Button>
    </Paper>
  );
};

export default Counter;
