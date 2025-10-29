import { Box, Button, Link, Typography } from "@mui/material";

const Paragraph: React.FC = () => {
  return (
    <Box sx={{ maxWidth: "40%", border: "4px solid grey", p: 4 }}>
      <Typography variant="h5" component="h5" gutterBottom>
        Paragraph Component
      </Typography>
      <Button
        href="https://github.com/CodyHager/csci-331-nextjs"
        variant="contained"
      >
        Link to Github Repo
      </Button>
      <Typography variant="body1" sx={{ mt: 2, textAlign: "left" }}>
        For my final project, I plan to take a project that I started on this
        summer and get it over the finish line. The app is a music transcription
        platform where you can upload a file and it will generate sheet music
        for you. My partner and I plan to add a number of features, such as
        access management (user accounts), a $5.99/month subscription using
        Stripe as the payment platform, and the ability to transcribe music via
        YouTube links.
        <br />
        <br />
        The app is written with React/Typescript for the frontend (just like
        this assignment) and Python with FastAPI for the backend. We will host
        the app with an external service, such as <Link>https://fly.io/</Link>,
        instead of the school server.
      </Typography>
    </Box>
  );
};

export default Paragraph;
