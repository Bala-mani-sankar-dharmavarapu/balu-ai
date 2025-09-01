import React, { useState, useEffect } from "react";
import { Box, useTheme, Fade, CircularProgress, Alert } from "@mui/material";
import type { Application, TableInfo, TargetSystem } from "./types";
import { KaleReviewService } from "./services";
import SearchSection from "./SearchSection";
import TableInformationSection from "./TableInformationSection";
import TargetSystemsSection from "./TargetSystemsSection";

const KaleReviewDashboard: React.FC = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [applications, setApplications] = useState<Application[]>([]);
  const [targetSystems, setTargetSystems] = useState<TargetSystem[]>([]);
  const [selectedApplication, setSelectedApplication] =
    useState<Application | null>(null);
  const [tableInfo, setTableInfo] = useState<TableInfo[]>([]);
  const [overallStatus, setOverallStatus] = useState({
    completed: 0,
    total: 0,
  });
  const theme = useTheme();

  useEffect(() => {
    fetchInitialData();
  }, []);

  const fetchInitialData = async () => {
    try {
      setLoading(true);
      const [appsResponse, targetsResponse, statusResponse] = await Promise.all(
        [
          KaleReviewService.getApplications(),
          KaleReviewService.getTargetSystems(),
          KaleReviewService.getOverallStatus(),
        ]
      );

      if (
        appsResponse.success &&
        targetsResponse.success &&
        statusResponse.success
      ) {
        setApplications(appsResponse.data);
        setTargetSystems(targetsResponse.data);
        setOverallStatus(statusResponse.data);
        setError(null);
      } else {
        setError("Failed to load data. Please try again.");
      }
    } catch {
      setError("An error occurred while loading data.");
    } finally {
      setLoading(false);
    }
  };

  const handleApplicationSelect = async (application: Application) => {
    setSelectedApplication(application);
    try {
      const response = await KaleReviewService.getTableInfo();
      if (response.success) {
        setTableInfo(response.data);
      }
    } catch {
      console.error("Failed to fetch table info");
    }
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Usage found":
        return theme.palette.success.main;
      case "Usage not found":
        return theme.palette.error.main;
      case "Valid":
        return theme.palette.info.main;
      default:
        return theme.palette.grey[500];
    }
  };

  const getStatusBackground = (status: string) => {
    switch (status) {
      case "Usage found":
        return theme.palette.success.main + "15";
      case "Usage not found":
        return theme.palette.error.main + "15";
      case "Valid":
        return theme.palette.info.main + "15";
      default:
        return theme.palette.grey[500] + "15";
    }
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <CircularProgress size={60} />
      </Box>
    );
  }

  if (error) {
    return (
      <Box sx={{ p: 3 }}>
        <Alert severity="error" sx={{ mb: 2 }}>
          {error}
        </Alert>
        <Alert
          severity="info"
          onClick={fetchInitialData}
          sx={{ cursor: "pointer" }}
        >
          Click here to retry
        </Alert>
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Box
        sx={{
          height: "100%",
          display: "flex",
          flexDirection: "column",
          backgroundColor: theme.palette.background.default,
          overflow: "hidden",
        }}
      >
        {/* Search Section with Overall Status */}
        <Box sx={{ p: 2, pb: 1 }}>
          <SearchSection
            applications={applications}
            selectedApplication={selectedApplication}
            onApplicationSelect={handleApplicationSelect}
            overallStatus={overallStatus}
          />
        </Box>

        {/* Main Content - Table Info and Target Systems */}
        <Box
          sx={{
            flex: 1,
            display: "flex",
            gap: 2,
            px: 2,
            pb: 2,
            minHeight: 0,
            overflow: "hidden",
          }}
        >
          {/* Table Information Section */}
          <TableInformationSection
            selectedApplication={selectedApplication}
            tableInfo={tableInfo}
            getStatusColor={getStatusColor}
            getStatusBackground={getStatusBackground}
          />

          {/* Target Systems Section */}
          <TargetSystemsSection targetSystems={targetSystems} />
        </Box>
      </Box>
    </Fade>
  );
};

export default KaleReviewDashboard;
