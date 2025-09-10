import React, { useState } from "react";
import {
  Box,
  Typography,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  IconButton,
} from "@mui/material";
import { Close as CloseIcon } from "@mui/icons-material";
import DOMPurify from "dompurify";
import type { Message } from "./types.js";

interface MessageContentProps {
  message: Message;
}

const MessageContent: React.FC<MessageContentProps> = ({ message }) => {
  const theme = useTheme();
  const [isModalOpen, setIsModalOpen] = useState(false);

  // If it's a user message, always show as plain text
  if (message.sender === "user") {
    return (
      <Typography
        variant="body1"
        sx={{
          fontSize: "0.9rem",
          lineHeight: 1.4,
          wordBreak: "break-word",
        }}
      >
        {message.text}
      </Typography>
    );
  }

  // For AI messages, check if we have HTML content
  if (message.html_text) {
    const sanitizedHTML = DOMPurify.sanitize(message.html_text, {
      ALLOWED_TAGS: [
        "p",
        "br",
        "strong",
        "em",
        "u",
        "b",
        "i",
        "h1",
        "h2",
        "h3",
        "h4",
        "h5",
        "h6",
        "ul",
        "ol",
        "li",
        "blockquote",
        "code",
        "pre",
        "span",
        "div",
        "table",
        "thead",
        "tbody",
        "tr",
        "th",
        "td",
        "a",
        "img",
        "style",
      ],
      ALLOWED_ATTR: [
        "href",
        "src",
        "alt",
        "class",
        "id",
        "style",
        "colspan",
        "rowspan",
        "type",
      ],
      ALLOW_DATA_ATTR: false,
    });

    // Check if content contains a table (for modal functionality)
    const hasTable = sanitizedHTML.includes("<table");

    return (
      <Box>
        {/* Show plain text if available */}
        {message.plain_text && (
          <Typography
            variant="body1"
            sx={{
              fontSize: "0.9rem",
              lineHeight: 1.4,
              wordBreak: "break-word",
              mb: 1,
            }}
          >
            {message.plain_text}
          </Typography>
        )}

        <Box
          sx={{
            fontSize: "0.9rem",
            lineHeight: 1.4,
            wordBreak: "break-word",
            width: "100%",
            maxHeight: "300px", // Fixed height for consistent UX
            overflow: "auto", // Enable scrolling for both horizontal and vertical
            "&::-webkit-scrollbar": {
              height: 8,
              width: 8,
            },
            "&::-webkit-scrollbar-track": {
              backgroundColor: theme.palette.grey[100],
              borderRadius: 4,
            },
            "&::-webkit-scrollbar-thumb": {
              backgroundColor: theme.palette.grey[400],
              borderRadius: 4,
              "&:hover": {
                backgroundColor: theme.palette.grey[600],
              },
            },
            "& table": {
              width: "max-content", // Let table take its natural width
              minWidth: "100%", // But at least full width
              borderCollapse: "collapse",
              margin: "8px 0",
              fontSize: "0.9rem", // Keep readable font size
            },
            "& thead": {
              position: "sticky",
              top: 0,
              zIndex: 3,
              backgroundColor: theme.palette.background.paper,
            },
            "& th, & td": {
              border: `1px solid ${theme.palette.divider}`,
              padding: "8px 12px", // Restore comfortable padding
              textAlign: "left",
              whiteSpace: "nowrap",
              minWidth: "120px", // Reasonable minimum column width
              maxWidth: "200px", // Reasonable maximum column width
              overflow: "hidden",
              textOverflow: "ellipsis",
            },
            "& th": {
              backgroundColor: theme.palette.grey[100],
              fontWeight: 600,
              position: "sticky",
              top: 0,
              zIndex: 2,
            },
            "& tr:nth-of-type(even)": {
              backgroundColor: theme.palette.grey[50],
            },
            "& code": {
              backgroundColor: theme.palette.grey[100],
              padding: "2px 4px",
              borderRadius: "4px",
              fontSize: "0.85rem",
              fontFamily: "monospace",
            },
            "& pre": {
              backgroundColor: theme.palette.grey[100],
              padding: "12px",
              borderRadius: "8px",
              overflow: "auto",
              fontSize: "0.85rem",
              fontFamily: "monospace",
            },
            "& blockquote": {
              borderLeft: `4px solid ${theme.palette.primary.main}`,
              paddingLeft: "16px",
              margin: "8px 0",
              fontStyle: "italic",
              color: theme.palette.text.secondary,
            },
            "& ul, & ol": {
              paddingLeft: "20px",
              margin: "8px 0",
            },
            "& li": {
              margin: "4px 0",
            },
          }}
          dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
        />

        {/* Expand button only for tables */}
        {hasTable && (
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mt: 1,
            }}
          >
            <Box
              component="button"
              onClick={() => setIsModalOpen(true)}
              sx={{
                background: "none",
                border: `1px solid ${theme.palette.primary.main}`,
                borderRadius: "20px",
                padding: "8px 12px",
                cursor: "pointer",
                fontSize: "0.75rem",
                color: theme.palette.primary.main,
                transition: "all 0.2s ease",
                "&:hover": {
                  backgroundColor: theme.palette.primary.main,
                  color: "white",
                },
              }}
            >
              View Full Table
            </Box>
          </Box>
        )}

        {/* Full-screen dialog for table display */}
        <Dialog
          open={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          fullScreen
        >
          <DialogTitle
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              borderBottom: `1px solid ${theme.palette.divider}`,
              backgroundColor: theme.palette.grey[50],
            }}
          >
            <Typography variant="h6" sx={{ fontWeight: 600 }}>
              Table Data
            </Typography>
            <IconButton
              onClick={() => setIsModalOpen(false)}
              sx={{
                color: theme.palette.text.secondary,
                "&:hover": {
                  backgroundColor: theme.palette.grey[200],
                },
              }}
            >
              <CloseIcon />
            </IconButton>
          </DialogTitle>

          <DialogContent
            sx={{
              p: 0,
              overflow: "auto",
              "&::-webkit-scrollbar": {
                height: 8,
                width: 8,
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: theme.palette.grey[100],
                borderRadius: 4,
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: theme.palette.grey[400],
                borderRadius: 4,
                "&:hover": {
                  backgroundColor: theme.palette.grey[600],
                },
              },
              "&::-webkit-scrollbar-corner": {
                backgroundColor: theme.palette.grey[100],
              },
            }}
          >
            <Box
              sx={{
                p: 2,
                minWidth: "max-content", // Ensure content can extend beyond container
                "& table": {
                  width: "max-content", // Let table take its natural width
                  minWidth: "100%", // But at least full width
                  borderCollapse: "collapse",
                  margin: "8px 0",
                  fontSize: "0.9rem",
                },
                "& thead": {
                  position: "sticky",
                  top: 0,
                  zIndex: 3,
                  backgroundColor: theme.palette.background.paper,
                },
                "& th, & td": {
                  border: `1px solid ${theme.palette.divider}`,
                  padding: "8px 12px",
                  textAlign: "left",
                  whiteSpace: "nowrap", // Prevent text wrapping
                  minWidth: "150px", // Increased minimum column width
                  maxWidth: "none", // Remove max width restriction
                  overflow: "visible", // Allow content to extend beyond cell
                },
                "& th": {
                  backgroundColor: theme.palette.grey[100],
                  fontWeight: 600,
                  position: "sticky",
                  top: 0,
                  zIndex: 2,
                },
                "& tr:nth-of-type(even)": {
                  backgroundColor: theme.palette.grey[50],
                },
              }}
              dangerouslySetInnerHTML={{ __html: sanitizedHTML }}
            />
          </DialogContent>
        </Dialog>
      </Box>
    );
  }

  // Fallback to plain text
  return (
    <Typography
      variant="body1"
      sx={{
        fontSize: "0.9rem",
        lineHeight: 1.4,
        wordBreak: "break-word",
      }}
    >
      {message.plain_text || message.text}
    </Typography>
  );
};

export default MessageContent;
