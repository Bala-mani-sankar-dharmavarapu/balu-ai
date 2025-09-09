import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    mode: "light",
    primary: {
      main: "#FF9900", // Amazon's signature orange
      light: "#FFB84D",
      dark: "#E47911",
      contrastText: "#000000",
    },
    secondary: {
      main: "#232F3E", // Amazon's dark blue
      light: "#37475A",
      dark: "#131921",
      contrastText: "#FFFFFF",
    },
    background: {
      default: "#FFFFFF",
      paper: "#F8F9FA",
    },
    text: {
      primary: "#0F1111", // Amazon's primary text color
      secondary: "#565959", // Amazon's secondary text color
    },
    success: {
      main: "#007600", // Amazon's success green
      light: "#00A600",
      dark: "#005500",
    },
    warning: {
      main: "#FF9900",
      light: "#FFB84D",
      dark: "#E47911",
    },
    error: {
      main: "#C40000", // Amazon's error red
      light: "#E60000",
      dark: "#A30000",
    },
    info: {
      main: "#0066C0", // Amazon's link blue
      light: "#0077D9",
      dark: "#0055A3",
    },
    divider: "#E7E7E7",
  },
  typography: {
    fontFamily:
      '"Inter", "Amazon Ember", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif',
    h1: {
      fontSize: "2.5rem",
      fontWeight: 700,
      lineHeight: 1.2,
      background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    h2: {
      fontSize: "2rem",
      fontWeight: 600,
      lineHeight: 1.3,
      background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
    },
    h3: {
      fontSize: "1.75rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h4: {
      fontSize: "1.5rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h5: {
      fontSize: "1.25rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    h6: {
      fontSize: "1.125rem",
      fontWeight: 600,
      lineHeight: 1.4,
    },
    body1: {
      fontSize: "1rem",
      lineHeight: 1.6,
      color: "#0F1111",
    },
    body2: {
      fontSize: "0.875rem",
      lineHeight: 1.6,
      color: "#565959",
    },
    button: {
      textTransform: "none",
      fontWeight: 600,
      fontSize: "0.875rem",
    },
    caption: {
      fontSize: "0.75rem",
      fontWeight: 500,
      color: "#565959",
    },
    overline: {
      fontSize: "0.75rem",
      fontWeight: 600,
      textTransform: "uppercase",
      letterSpacing: "0.1em",
      color: "#565959",
    },
  },
  shape: {
    borderRadius: 16,
  },
  shadows: [
    "none",
    "0px 2px 4px rgba(0, 0, 0, 0.05)",
    "0px 4px 8px rgba(0, 0, 0, 0.05)",
    "0px 8px 16px rgba(0, 0, 0, 0.05)",
    "0px 16px 32px rgba(0, 0, 0, 0.05)",
    "0px 32px 64px rgba(0, 0, 0, 0.05)",
    "0px 2px 4px rgba(0, 0, 0, 0.1)",
    "0px 4px 8px rgba(0, 0, 0, 0.1)",
    "0px 8px 16px rgba(0, 0, 0, 0.1)",
    "0px 16px 32px rgba(0, 0, 0, 0.1)",
    "0px 32px 64px rgba(0, 0, 0, 0.1)",
    "0px 2px 4px rgba(0, 0, 0, 0.15)",
    "0px 4px 8px rgba(0, 0, 0, 0.15)",
    "0px 8px 16px rgba(0, 0, 0, 0.15)",
    "0px 16px 32px rgba(0, 0, 0, 0.15)",
    "0px 32px 64px rgba(0, 0, 0, 0.15)",
    "0px 2px 4px rgba(0, 0, 0, 0.2)",
    "0px 4px 8px rgba(0, 0, 0, 0.2)",
    "0px 8px 16px rgba(0, 0, 0, 0.2)",
    "0px 16px 32px rgba(0, 0, 0, 0.2)",
    "0px 32px 64px rgba(0, 0, 0, 0.2)",
    "0px 2px 4px rgba(0, 0, 0, 0.25)",
    "0px 4px 8px rgba(0, 0, 0, 0.25)",
    "0px 8px 16px rgba(0, 0, 0, 0.25)",
    "0px 16px 32px rgba(0, 0, 0, 0.25)",
  ],
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 25%, rgba(240, 242, 245, 0.85) 50%, rgba(232, 235, 240, 0.8) 75%, rgba(225, 230, 235, 0.75) 100%), radial-gradient(circle at 20% 80%, rgba(255, 153, 0, 0.1) 0%, transparent 50%), radial-gradient(circle at 80% 20%, rgba(35, 47, 62, 0.08) 0%, transparent 50%), linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderRight: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow:
            "0 8px 32px rgba(0, 0, 0, 0.1), inset 0 1px 0 rgba(255, 255, 255, 0.2), inset 0 -1px 0 rgba(0, 0, 0, 0.05)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(90deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.1) 50%, 
                transparent 100%
              )
            `,
            pointerEvents: "none",
            zIndex: 1,
          },
        },
      },
    },
    MuiAppBar: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 50%, rgba(240, 242, 245, 0.85) 100%), radial-gradient(circle at 10% 50%, rgba(255, 153, 0, 0.08) 0%, transparent 50%), radial-gradient(circle at 90% 50%, rgba(35, 47, 62, 0.06) 0%, transparent 50%)",
          backdropFilter: "blur(20px) saturate(180%)",
          borderBottom: "1px solid rgba(255, 255, 255, 0.2)",
          boxShadow: `
            0 4px 20px rgba(0, 0, 0, 0.05),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: "12px 24px",
          fontWeight: 600,
          textTransform: "none",
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          overflow: "hidden",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: "-100%",
            width: "100%",
            height: "100%",
            background:
              "linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent)",
            transition: "left 0.5s",
          },
          "&:hover::before": {
            left: "100%",
          },
        },
        contained: {
          background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
          boxShadow: "0 8px 25px rgba(255, 153, 0, 0.3)",
          "&:hover": {
            background: "linear-gradient(135deg, #E47911 0%, #D2691E 100%)",
            boxShadow: "0 12px 35px rgba(255, 153, 0, 0.4)",
            transform: "translateY(-2px)",
          },
        },
        outlined: {
          border: "2px solid",
          borderImage: "linear-gradient(135deg, #FF9900 0%, #E47911 100%) 1",
          background:
            "linear-gradient(135deg, rgba(255, 153, 0, 0.05) 0%, rgba(228, 121, 17, 0.05) 100%)",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(228, 121, 17, 0.1) 100%)",
            transform: "translateY(-1px)",
          },
        },
        text: {
          background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          backgroundClip: "text",
          "&:hover": {
            background: "linear-gradient(135deg, #E47911 0%, #D2691E 100%)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            backgroundClip: "text",
          },
        },
      },
    },
    MuiCard: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(135deg, rgba(255, 255, 255, 0.95) 0%, rgba(248, 249, 250, 0.9) 25%, rgba(240, 242, 245, 0.85) 50%, rgba(232, 235, 240, 0.8) 75%, rgba(225, 230, 235, 0.75) 100%), radial-gradient(circle at 30% 70%, rgba(255, 153, 0, 0.08) 0%, transparent 60%), radial-gradient(circle at 70% 30%, rgba(35, 47, 62, 0.06) 0%, transparent 60%), linear-gradient(45deg, rgba(255, 255, 255, 0.1) 0%, rgba(255, 255, 255, 0.05) 100%)",
          backdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 20,
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2),
            inset 0 -1px 0 rgba(0, 0, 0, 0.05)
          `,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(45deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.1) 50%, 
                transparent 100%
              )
            `,
            borderRadius: 20,
            pointerEvents: "none",
            zIndex: 1,
          },
          "&:hover": {
            transform: "translateY(-4px)",
            boxShadow: `
              0 16px 48px rgba(0, 0, 0, 0.12),
              inset 0 1px 0 rgba(255, 255, 255, 0.3),
              inset 0 -1px 0 rgba(0, 0, 0, 0.05)
            `,
            "&::before": {
              background: `
                linear-gradient(45deg, 
                  transparent 0%, 
                  rgba(255, 255, 255, 0.15) 50%, 
                  transparent 100%
                )
              `,
            },
          },
        },
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: `
            linear-gradient(135deg, 
              rgba(255, 255, 255, 0.95) 0%, 
              rgba(248, 249, 250, 0.9) 50%,
              rgba(240, 242, 245, 0.85) 100%
            ),
            radial-gradient(circle at 20% 80%, 
              rgba(255, 153, 0, 0.06) 0%, 
              transparent 50%
            ),
            radial-gradient(circle at 80% 20%, 
              rgba(35, 47, 62, 0.04) 0%, 
              transparent 50%
            )
          `,
          backdropFilter: "blur(20px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.2)",
          borderRadius: 16,
          position: "relative",
          "&::before": {
            content: '""',
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            background: `
              linear-gradient(135deg, 
                transparent 0%, 
                rgba(255, 255, 255, 0.08) 50%, 
                transparent 100%
              )
            `,
            borderRadius: 16,
            pointerEvents: "none",
            zIndex: 1,
          },
        },
        elevation1: {
          boxShadow: `
            0 4px 20px rgba(0, 0, 0, 0.08),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
        },
        elevation2: {
          boxShadow: `
            0 8px 32px rgba(0, 0, 0, 0.1),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
        },
        elevation3: {
          boxShadow: `
            0 12px 48px rgba(0, 0, 0, 0.12),
            inset 0 1px 0 rgba(255, 255, 255, 0.2)
          `,
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          "& .MuiOutlinedInput-root": {
            borderRadius: 12,
            background: "rgba(255, 255, 255, 0.8)",
            backdropFilter: "blur(10px)",
            border: "1px solid rgba(231, 231, 231, 0.5)",
            transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
            "&:hover": {
              border: "1px solid rgba(255, 153, 0, 0.3)",
              background: "rgba(255, 255, 255, 0.9)",
            },
            "&.Mui-focused": {
              border: "2px solid",
              borderImage:
                "linear-gradient(135deg, #FF9900 0%, #E47911 100%) 1",
              background: "rgba(255, 255, 255, 0.95)",
              boxShadow: "0 0 0 4px rgba(255, 153, 0, 0.1)",
            },
          },
        },
      },
    },
    MuiChip: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          fontWeight: 600,
          background:
            "linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(228, 121, 17, 0.1) 100%)",
          border: "1px solid rgba(255, 153, 0, 0.2)",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(255, 153, 0, 0.15) 0%, rgba(228, 121, 17, 0.15) 100%)",
            transform: "translateY(-1px)",
          },
        },
      },
    },
    MuiListItem: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          marginBottom: 4,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
        },
      },
    },
    MuiListItemButton: {
      styleOverrides: {
        root: {
          borderRadius: 12,
          transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
          "&:hover": {
            background:
              "linear-gradient(135deg, rgba(255, 153, 0, 0.1) 0%, rgba(228, 121, 17, 0.1) 100%)",
            transform: "translateX(4px)",
          },
          "&.Mui-selected": {
            background:
              "linear-gradient(135deg, rgba(255, 153, 0, 0.15) 0%, rgba(228, 121, 17, 0.15) 100%)",
            border: "1px solid rgba(255, 153, 0, 0.3)",
            boxShadow: "0 4px 20px rgba(255, 153, 0, 0.2)",
          },
        },
      },
    },
    MuiDivider: {
      styleOverrides: {
        root: {
          background:
            "linear-gradient(90deg, transparent, rgba(231, 231, 231, 0.5), transparent)",
          height: 1,
        },
      },
    },
    MuiAvatar: {
      styleOverrides: {
        root: {
          background: "linear-gradient(135deg, #FF9900 0%, #E47911 100%)",
          boxShadow: "0 4px 16px rgba(255, 153, 0, 0.3)",
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: "#FF9900",
        },
        circle: {
          strokeLinecap: "round",
        },
      },
    },
    MuiLinearProgress: {
      styleOverrides: {
        root: {
          borderRadius: 10,
          backgroundColor: "rgba(255, 153, 0, 0.1)",
        },
        bar: {
          borderRadius: 10,
          background: "linear-gradient(90deg, #FF9900 0%, #E47911 100%)",
        },
      },
    },
  },
});
