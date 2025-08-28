import { Box, Grid, Typography } from "@mui/material";
import { Star, Bolt, Favorite } from "@mui/icons-material";

const cards = [
  {
    icon: <Star fontSize="large" />,
    title: "Achievements",
  },
  {
    icon: <Bolt fontSize="large" />,
    title: "Highlights",
  },
  {
    icon: <Favorite fontSize="large" />,
    title: "Roadmap",
    // desc: "Care for what matters",
  },
];

interface Props {
  sendMessage: (prompt?: string) => void;
}
const Prompts = ({ sendMessage }: Props) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {cards.map((card, index) => (
        <Grid item xs={12} sm={6} md={4} key={index}>
          <Box
            onClick={() => sendMessage(card.title)}
            sx={{
              p: 2.5,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              "&::before": {
                content: '""',
                position: "absolute",
                inset: 0,
                borderRadius: "20px",
                background:
                  "linear-gradient(135deg, #bb3187, #e68185, #f55c4b)",
                opacity: 0.9,
                zIndex: -1,
              },
            }}
          >
            <Box
              sx={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 60,
                height: 60,
                borderRadius: "50%",
                mb: 2,
                background:
                  "linear-gradient(135deg, #bb3187, #e68185, #f55c4b)",
                boxShadow: "0 0 25px rgba(241, 91, 91, 0.6)",
              }}
            >
              {card.icon}
            </Box>
            <Typography variant="h6" fontWeight="bold">
              {card.title}
            </Typography>
            {/* <Typography variant="body2">{card.desc}</Typography> */}
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Prompts;
