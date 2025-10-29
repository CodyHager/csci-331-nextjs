import { Box, Button, Typography } from "@mui/material";
import Counter from "./components/Counter";
import Paragraph from "./components/Paragraph";

export default function Home() {
  return (
    <Box
      display="flex"
      flexDirection="column"
      textAlign="center"
      alignItems="center"
      sx={{ mt: 2 }}
    >
      <Typography variant="h3" component="h3">
        CSCI 331 NextJS Assignment
      </Typography>
      <Typography variant="h5" component="h5" gutterBottom>
        by Cody Hager
      </Typography>
      <Counter incrementBy={1} bgColor="#0cccfcff" />
      <Counter incrementBy={2} bgColor="#e747dfff" />
      <Paragraph />
      <Button href="/store" sx={{ m: 2 }}>
        Go to my store page
      </Button>
    </Box>
  );
}
