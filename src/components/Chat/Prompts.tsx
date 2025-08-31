import { Box, Typography, useTheme, Chip, Fade } from "@mui/material";
import {
  Lightbulb as LightbulbIcon,
  TrendingUp as TrendingUpIcon,
  Code as CodeIcon,
} from "@mui/icons-material";

const prompts = [
  {
    icon: <LightbulbIcon />,
    title: "Creative Ideas",
    description: "Generate innovative solutions",
    category: "Innovation",
  },
  {
    icon: <TrendingUpIcon />,
    title: "Performance Analysis",
    description: "Analyze metrics and trends",
    category: "Analytics",
  },
  {
    icon: <CodeIcon />,
    title: "SQL Query Optimization",
    description: "Review and optimize query",
    category: "Development",
  },
];

interface Props {
  sendMessage: (prompt?: string) => void;
}

const Prompts = ({ sendMessage }: Props) => {
  const theme = useTheme();

  return (
    <Box sx={{ width: "100%" }}>
      <Typography
        variant="overline"
        sx={{
          color: theme.palette.text.secondary,
          fontWeight: 600,
          fontSize: "0.7rem",
          mb: 2,
          display: "block",
          textAlign: "center",
        }}
      >
        QUICK STARTERS
      </Typography>

      {/* Quick starter section */}
      <Box
        sx={{
          display: "flex",
          gap: 1,
          justifyContent: "center",
          flexWrap: "nowrap",
          maxWidth: "100%",
        }}
      >
        {prompts.map((prompt, index, arr) => (
          <Fade in={true} timeout={800 + index * 100} key={index}>
            <Box
              onClick={() =>
                index !== arr.length - 1 && sendMessage(prompt.title)
              }
              sx={{
                flex: "1 1 0",
                minWidth: 0,
                maxWidth: 180,
                p: 1.5,
                borderRadius: 2,
                textAlign: "center",
                position: "relative",
                overflow: "hidden",
                backgroundColor: theme.palette.background.paper,
                border: `1px solid ${theme.palette.divider}`,
                boxShadow: "0 4px 20px rgba(0,0,0,0.08)",
                cursor: "pointer",
                transition: "all 0.3s ease-in-out",
                "&:hover": {
                  transform: "translateY(-6px)",
                  boxShadow: "0 12px 40px rgba(0,0,0,0.15)",
                  borderColor: theme.palette.primary.main + "40",
                  "& .prompt-icon": {
                    transform: "scale(1.1)",
                    backgroundColor: theme.palette.primary.main + "25",
                  },
                },
                "&::before": {
                  content: '""',
                  position: "absolute",
                  top: 0,
                  left: 0,
                  right: 0,
                  height: 3,
                  background: `linear-gradient(90deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  opacity: 0,
                  transition: "opacity 0.3s ease-in-out",
                },
                "&:hover::before": {
                  opacity: 1,
                },
              }}
            >
              {/* Category Badge */}
              <Chip
                label={prompt.category}
                size="small"
                sx={{
                  position: "absolute",
                  top: 6,
                  right: 6,
                  backgroundColor: theme.palette.primary.main + "15",
                  color: theme.palette.primary.main,
                  fontWeight: 600,
                  fontSize: "0.6rem",
                  height: 16,
                }}
              />

              {/* Icon */}
              <Box
                className="prompt-icon"
                sx={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  mb: 1,
                  fontSize: "1.25rem",
                  backgroundColor: theme.palette.primary.main + "15",
                  color: theme.palette.primary.main,
                  transition: "all 0.3s ease-in-out",
                  boxShadow: "0 4px 12px rgba(255, 153, 0, 0.2)",
                }}
              >
                {prompt.icon}
              </Box>

              {/* Content */}
              <Typography
                variant="h6"
                sx={{
                  fontWeight: 600,
                  color: theme.palette.text.primary,
                  mb: 0.5,
                  fontSize: "0.8rem",
                  lineHeight: 1.2,
                }}
              >
                {prompt.title}
              </Typography>

              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.7rem",
                  lineHeight: 1.2,
                }}
              >
                {prompt.description}
              </Typography>
            </Box>
          </Fade>
        ))}
      </Box>

      {/* Additional suggestion */}
      <Box
        sx={{
          textAlign: "center",
          mt: 3,
          p: 1.5,
          borderRadius: 2,
          backgroundColor: theme.palette.background.default,
          border: `1px dashed ${theme.palette.divider}`,
        }}
      >
        <Typography
          variant="body2"
          sx={{
            color: theme.palette.text.secondary,
            fontSize: "0.8rem",
          }}
        >
          💡 You can also ask me anything directly in the chat below
        </Typography>
      </Box>
    </Box>
  );
};

export default Prompts;
