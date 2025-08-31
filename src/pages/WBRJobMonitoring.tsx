import React from "react";
import { Box } from "@mui/material";
import WBRJobMonitoringDashboard from "../components/WBRJobMonitoring/WBRJobMonitoringDashboard";

const WBRJobMonitoring = () => {
  return (
    <Box sx={{ height: "100%", width: "100%" }}>
      <WBRJobMonitoringDashboard />
    </Box>
  );
};

export default WBRJobMonitoring;
