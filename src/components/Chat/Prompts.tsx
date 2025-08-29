import { Box, Grid, Typography } from "@mui/material";
import { EmojiEvents, FlashOn } from "@mui/icons-material"; // MUI icons
import { TbSitemap } from "react-icons/tb";

const cards = [
  {
    icon: <EmojiEvents fontSize="inherit" />, // Trophy for Achievements
    title: "Achievements",
  },
  {
    icon: <FlashOn fontSize="inherit" />, // Lightning for Highlights
    title: "Highlights",
  },
  {
    icon: <TbSitemap fontSize="inherit" />, // Road for Roadmap
    title: "Roadmap",
  },
];

interface Props {
  sendMessage: (prompt?: string) => void;
}

const Prompts = ({ sendMessage }: Props) => {
  return (
    <Grid container spacing={3} justifyContent="center">
      {cards.map((card, index) => (
        <Grid
          item
          xs={12}
          sm={6}
          md={4}
          key={index}
          display="flex"
          justifyContent="center"
        >
          <Box
            onClick={() => sendMessage(card.title)}
            sx={{
              width: "100%", // full width inside grid
              maxWidth: 260, // consistent width for all
              minWidth: 220, // prevents shrinking too much
              p: 2,
              borderRadius: "20px",
              textAlign: "center",
              color: "#fff",
              position: "relative",
              overflow: "hidden",
              background: "rgba(255, 255, 255, 0.1)",
              backdropFilter: "blur(12px)",
              boxShadow: "0 8px 32px rgba(0, 0, 0, 0.2)",
              cursor: "pointer",
              transition: "transform 0.2s ease, box-shadow 0.2s ease",
              "&:hover": {
                transform: "translateY(-4px)",
                boxShadow: "0 12px 40px rgba(0,0,0,0.3)",
              },
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
                width: 55,
                height: 55,
                borderRadius: "50%",
                mb: 2,
                fontSize: "2rem", // uniform size across MUI + react-icons
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
          </Box>
        </Grid>
      ))}
    </Grid>
  );
};

export default Prompts;
