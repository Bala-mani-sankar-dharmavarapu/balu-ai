import React from "react";
import {
  Box,
  Typography,
  Paper,
  TextField,
  Button,
  Autocomplete,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import type { Application } from "./types";

interface SearchSectionProps {
  applications: Application[];
  selectedApplication: Application | null;
  onApplicationSelect: (application: Application) => void;
  overallStatus: {
    completed: number;
    total: number;
  };
}

const SearchSection: React.FC<SearchSectionProps> = ({
  applications,
  selectedApplication,
  onApplicationSelect,
  overallStatus,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        p: 2,
        mb: 2,
        borderRadius: 2,
        background: `linear-gradient(135deg, #1976d208, #dc004e12)`,
        border: `1px solid #e0e0e0`,
        boxShadow: "0 2px 12px rgba(0,0,0,0.08)",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 2,
          alignItems: "center",
        }}
      >
        {/* Search Section */}
        <Box sx={{ flex: 1, minWidth: "300px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 0.5,
              fontWeight: 600,
              color: "text.secondary",
              fontSize: "0.8rem",
            }}
          >
            Search & Select Application
          </Typography>
          <Autocomplete
            options={applications}
            getOptionLabel={(option) => option.name}
            value={selectedApplication}
            onChange={(_event, newValue) => {
              if (newValue) {
                onApplicationSelect(newValue);
              }
            }}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder="Search applications..."
                InputProps={{
                  ...params.InputProps,
                  startAdornment: (
                    <SearchIcon sx={{ mr: 1, color: "text.secondary" }} />
                  ),
                }}
                sx={{
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "background.paper",
                    borderRadius: 1.5,
                    height: 40,
                    fontSize: "0.9rem",
                    "& input:focus": {
                      outline: "none", // Remove default outline
                    },
                    "&.Mui-focused": {
                      outline: "none !important",
                      "& .MuiOutlinedInput-notchedOutline": {
                        outline: "none",
                      },
                    },
                  },
                  "& .MuiAutocomplete-input:focus": {
                    outline: "none",
                  },
                  "& .MuiInputBase-input:focus": {
                    outline: "none",
                  },
                  "& .MuiInputBase-root.Mui-focused": {
                    outline: "none !important",
                  },
                  "& .MuiOutlinedInput-root.Mui-focused": {
                    outline: "none !important",
                  },
                }}
              />
            )}
            renderOption={(props, option) => (
              <Box component="li" {...props}>
                <Box>
                  <Typography
                    variant="body2"
                    sx={{
                      fontWeight: 500,
                      color: "text.primary",
                    }}
                  >
                    {option.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ color: "text.secondary" }}
                  >
                    {option.description}
                  </Typography>
                </Box>
              </Box>
            )}
            sx={{
              "& .MuiAutocomplete-listbox": {
                maxHeight: "250px",
              },
              "& .MuiAutocomplete-input": {
                outline: "none !important",
              },
              "& .MuiInputBase-input": {
                outline: "none !important",
              },
              "& .MuiOutlinedInput-root": {
                "&.Mui-focused": {
                  "& .MuiOutlinedInput-notchedOutline": {
                    outline: "none !important",
                  },
                },
              },
              "& input:focus": {
                outline: "none !important",
              },
            }}
          />
        </Box>

        {/* Submit Button */}
        <Box sx={{ minWidth: "100px" }}>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 0.5,
              fontWeight: 600,
              color: "text.secondary",
              visibility: "hidden",
              fontSize: "0.8rem",
            }}
          >
            &nbsp;
          </Typography>
          <Button
            variant="contained"
            fullWidth
            sx={{
              backgroundColor: "warning.main",
              color: "warning.contrastText",
              "&:hover": {
                backgroundColor: "warning.dark",
              },
              borderRadius: 1.5,
              py: 1,
              height: 40,
              fontSize: "0.9rem",
              fontWeight: 600,
              textTransform: "none",
              boxShadow: "0 2px 8px rgba(255,152,0,0.3)",
            }}
          >
            Submit
          </Button>
        </Box>

        {/* Overall Status */}
        <Box sx={{ minWidth: "150px", textAlign: "center" }}>
          <Typography
            variant="subtitle2"
            sx={{
              mb: 0.5,
              fontWeight: 600,
              color: "text.secondary",
              fontSize: "0.8rem",
            }}
          >
            Overall Status
          </Typography>
          <Box
            sx={{
              backgroundColor: "background.paper",
              borderRadius: 1.5,
              p: 1.5,
              border: "1px solid #e0e0e0",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              height: 40,
            }}
          >
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                color: "primary.main",
                lineHeight: 1,
                fontSize: "1.1rem",
              }}
            >
              {overallStatus.completed}/{overallStatus.total}
            </Typography>
          </Box>
        </Box>
      </Box>
    </Paper>
  );
};

export default SearchSection;
