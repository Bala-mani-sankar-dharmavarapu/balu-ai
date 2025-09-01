import React from "react";
import { Box, Typography, Paper, List, ListItem } from "@mui/material";
import type { TargetSystem } from "./types";

interface TargetSystemsSectionProps {
  targetSystems: TargetSystem[];
}

const TargetSystemsSection: React.FC<TargetSystemsSectionProps> = ({
  targetSystems,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        width: "28%",
        borderRadius: 2,
        background: `linear-gradient(135deg, #fafafa, #f5f5f5)`,
        border: `1px solid #e0e0e0`,
        overflow: "hidden",
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <Box
        sx={{
          p: 2,
          borderBottom: `1px solid #e0e0e0`,
        }}
      >
        <Typography
          variant="h6"
          sx={{
            fontWeight: 600,
            color: "text.primary",
            mb: 1,
          }}
        >
          Target List
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {targetSystems.length} target systems
        </Typography>
      </Box>
      <List
        sx={{
          p: 0,
          flex: 1,
          overflow: "auto",
          maxHeight: "100%",
        }}
      >
        {targetSystems.map((target) => (
          <ListItem key={target.id} disablePadding>
            <Box sx={{ p: 1.5, width: "100%" }}>
              <Typography
                variant="body2"
                sx={{
                  fontFamily: "monospace",
                  color: "text.primary",
                  fontWeight: 500,
                  fontSize: "0.85rem",
                  mb: 0.5,
                  backgroundColor: "background.default",
                  p: 1,
                  borderRadius: 1,
                  border: `1px solid #e0e0e0`,
                }}
              >
                '{target.name}'
              </Typography>
              <Typography
                variant="caption"
                sx={{
                  color: "text.secondary",
                  display: "block",
                  mt: 0.5,
                  lineHeight: 1.3,
                  fontSize: "0.7rem",
                }}
              >
                {target.description}
              </Typography>
            </Box>
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default TargetSystemsSection;
