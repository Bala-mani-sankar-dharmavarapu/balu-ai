import React from "react";
import { Box, Typography, useTheme, Fade } from "@mui/material";
import QueryList from "../common/QueryList";

interface WelcomeSectionProps {
  onSendMessage: (message: string) => void;
}

const WelcomeSection: React.FC<WelcomeSectionProps> = ({ onSendMessage }) => {
  const theme = useTheme();

  return (
    <Fade in={true} timeout={800}>
      <Box
        sx={{
          textAlign: "center",
          py: 3,
          px: 2,
          maxWidth: 600,
          mx: "auto",
          width: "100%",
        }}
      >
        {/* Welcome Message */}
        <Typography
          variant="h4"
          sx={{
            fontWeight: 700,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            mb: 1,
            fontSize: { xs: "1.75rem", md: "2rem" },
          }}
        >
          Hello Sriram! 👋
        </Typography>

        <Typography
          variant="h6"
          sx={{
            color: theme.palette.text.secondary,
            fontWeight: 500,
            mb: 2.5,
            fontSize: "1rem",
            lineHeight: 1.4,
          }}
        >
          I'm your AI assistant. How can I help you today?
        </Typography>

        {/* Quick Prompts */}
        <QueryList
          setInput={onSendMessage}
          title="Quick Starters"
          functions={[
            {
              id: "general-help",
              title: "General Help",
              description: "Get help with general questions and tasks",
              example: "How can you help me today?",
              examples: [
                "How can you help me today?",
                "What can you do for me?",
                "Show me your capabilities",
                "What are your main features?",
              ],
              icon: "🤖",
              color: "primary",
              query: "How can you help me today?",
            },
            {
              id: "data-analysis",
              title: "Data Analysis",
              description: "Analyze data and create visualizations",
              example: "Help me analyze this dataset",
              examples: [
                "Help me analyze this dataset",
                "Create a visualization for this data",
                "What insights can you find in this data?",
                "Generate a report from this dataset",
              ],
              icon: "📈",
              color: "secondary",
              query: "Help me analyze this dataset",
            },
            {
              id: "code-assistance",
              title: "Code Assistance",
              description: "Get help with programming and debugging",
              example: "Help me debug this code",
              examples: [
                "Help me debug this code",
                "Review my code for best practices",
                "Optimize this function for better performance",
                "Explain how this algorithm works",
              ],
              icon: "💻",
              color: "info",
              query: "Help me debug this code",
            },
            {
              id: "documentation",
              title: "Documentation Help",
              description: "Get help with documentation and writing",
              example: "Help me write documentation",
              examples: [
                "Help me write documentation",
                "Create a README for my project",
                "Write technical specifications",
                "Generate API documentation",
              ],
              icon: "📚",
              color: "warning",
              query: "Help me write documentation",
            },
          ]}
          cardWidth={140}
        />
      </Box>
    </Fade>
  );
};

export default WelcomeSection;
