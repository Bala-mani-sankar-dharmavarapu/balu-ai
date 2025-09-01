import React, { useState, useEffect } from "react";
import {
  Box,
  Typography,
  Paper,
  Switch,
  useTheme,
  Fade,
  CircularProgress,
  Alert,
  Tabs,
  Tab,
} from "@mui/material";
import RiskCategory from "../CentralOEPlatform/RiskCategory";
import WoWGraph from "../CentralOEPlatform/WoWGraph";
import type { RiskData, ViewMode } from "../CentralOEPlatform/types";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`central-oe-tabpanel-${index}`}
      aria-labelledby={`central-oe-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ pt: 2 }}>{children}</Box>}
    </div>
  );
}

const CentralOEDashboard: React.FC = () => {
  const [viewMode, setViewMode] = useState<ViewMode>("weekly");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [riskData, setRiskData] = useState<RiskData[]>([]);
  const [userContext] = useState({ name: "Current User", id: "user-001" });
  const [tabValue, setTabValue] = useState(0);
  const theme = useTheme();

  useEffect(() => {
    // Simulate API call
    const fetchData = async () => {
      try {
        setLoading(true);
        // Simulate API delay
        await new Promise((resolve) => setTimeout(resolve, 1000));

        // Mock data - in real app this would come from API
        const mockData: RiskData[] = [
          {
            id: "high-risk",
            name: "High Priority Risks",
            percentage: 40,
            score: 88,
            items: [
              {
                id: "1",
                title: "Data Classification for Customer Datasets",
                owner: "Risk Manager",
                assignee: "Data Analyst",
                dueIn: 15,
                link: "https://example.com/data-classification",
                status: "active",
              },
              {
                id: "2",
                title: "Authentication System for External Users",
                owner: "Security Lead",
                assignee: "DevOps Engineer",
                dueIn: 26,
                link: "https://example.com/auth-system",
                status: "active",
              },
              {
                id: "3",
                title: "Network Security: Firewall Configuration Review",
                owner: "Security Lead",
                assignee: "Network Admin",
                dueIn: 26,
                link: "https://example.com/network-security",
                status: "active",
              },
            ],
          },
          {
            id: "medium-risk",
            name: "Medium Priority Risks",
            percentage: 35,
            score: 65,
            items: [
              {
                id: "4",
                title: "Data Pipeline Development Standards",
                owner: "Data Engineer",
                assignee: "DevOps Engineer",
                dueIn: 15,
                link: "https://example.com/data-pipeline",
                status: "active",
              },
              {
                id: "5",
                title: "API Security for Third-party Integrations",
                owner: "Security Lead",
                assignee: "Backend Developer",
                dueIn: 26,
                link: "https://example.com/api-security",
                status: "active",
              },
              {
                id: "6",
                title: "Access Control: User Permission Review",
                owner: "Security Lead",
                assignee: "System Admin",
                dueIn: 26,
                link: "https://example.com/access-control",
                status: "active",
              },
            ],
          },
          {
            id: "low-risk",
            name: "Low Priority Risks",
            percentage: 25,
            score: 45,
            items: [
              {
                id: "7",
                title: "Client Application Beta Testing",
                owner: "Product Manager",
                assignee: "QA Engineer",
                dueIn: 15,
                link: "https://example.com/client-testing",
                status: "active",
              },
              {
                id: "8",
                title: "Database Backup and Recovery Testing",
                owner: "DBA",
                assignee: "DevOps Engineer",
                dueIn: 26,
                link: "https://example.com/backup-testing",
                status: "active",
              },
              {
                id: "9",
                title: "Logging and Monitoring Setup",
                owner: "DevOps Lead",
                assignee: "SRE Engineer",
                dueIn: 26,
                link: "https://example.com/logging-monitoring",
                status: "active",
              },
            ],
          },
        ];

        setRiskData(mockData);
        setError(null);
      } catch {
        setError("Failed to load risk data. Please try again.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [viewMode]);

  const handleNotify = (itemId: string) => {
    // Handle notification logic
    console.log(`Notify clicked for item: ${itemId}`);
  };

  const handleTabChange = (_event: React.SyntheticEvent, newValue: number) => {
    setTabValue(newValue);
  };

  if (loading) {
    return (
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
          minHeight: "400px",
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
      </Box>
    );
  }

  return (
    <Fade in={true} timeout={800}>
      <Box sx={{ p: { xs: 1.5, md: 2 }, height: "100%", overflow: "hidden" }}>
        {/* Header Section */}
        <Paper
          elevation={0}
          sx={{
            p: { xs: 1.5, md: 2 },
            mb: 2,
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.secondary.main}12)`,
            border: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(10px)",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              flexWrap: "wrap",
              gap: 2,
            }}
          >
            {/* User Context */}
            <Box>
              <Typography
                variant="h5"
                sx={{
                  fontWeight: 700,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  mb: 0.5,
                  fontSize: { xs: "1.25rem", md: "1.5rem" },
                }}
              >
                Viewing as: {userContext.name}
              </Typography>
              <Typography
                variant="body2"
                sx={{
                  color: theme.palette.text.secondary,
                  fontSize: "0.9rem",
                  fontWeight: 500,
                }}
              >
                ID: {userContext.id}
              </Typography>
            </Box>

            {/* View Mode Toggle */}
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                gap: 1,
                p: 1.5,
                borderRadius: 2,
                backgroundColor: theme.palette.background.default,
                border: `1px solid ${theme.palette.divider}`,
                backdropFilter: "blur(8px)",
              }}
            >
              <Typography
                variant="body2"
                sx={{
                  color:
                    viewMode === "monthly"
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                  fontWeight: viewMode === "monthly" ? 700 : 500,
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                }}
              >
                Monthly
              </Typography>
              <Switch
                checked={viewMode === "weekly"}
                onChange={(e) =>
                  setViewMode(e.target.checked ? "weekly" : "monthly")
                }
                sx={{
                  "& .MuiSwitch-switchBase.Mui-checked": {
                    color: theme.palette.primary.main,
                    transform: "scale(1.1)",
                  },
                  "& .MuiSwitch-switchBase.Mui-checked + .MuiSwitch-track": {
                    backgroundColor: theme.palette.primary.main,
                    opacity: 0.8,
                  },
                  "& .MuiSwitch-track": {
                    borderRadius: 22 / 2,
                    opacity: 0.3,
                  },
                  "& .MuiSwitch-thumb": {
                    boxShadow: "0 2px 4px 0 rgba(0,0,0,0.2)",
                  },
                }}
              />
              <Typography
                variant="body2"
                sx={{
                  color:
                    viewMode === "weekly"
                      ? theme.palette.text.primary
                      : theme.palette.text.secondary,
                  fontWeight: viewMode === "weekly" ? 700 : 500,
                  transition: "all 0.3s ease",
                  fontSize: "0.9rem",
                }}
              >
                Weekly
              </Typography>
            </Box>
          </Box>
        </Paper>

        {/* Tabs */}
        <Paper
          elevation={0}
          sx={{
            borderRadius: 2,
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            border: `1px solid ${theme.palette.divider}`,
            backdropFilter: "blur(10px)",
            mb: 2,
            overflow: "hidden",
          }}
        >
          <Tabs
            value={tabValue}
            onChange={handleTabChange}
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontWeight: 600,
                fontSize: "0.95rem",
                minHeight: 48,
                color: theme.palette.text.secondary,
                border: "none",
                "&.Mui-selected": {
                  color: theme.palette.primary.main,
                  background: `linear-gradient(135deg, ${theme.palette.primary.main}08, ${theme.palette.primary.main}12)`,
                  borderBottom: `3px solid ${theme.palette.primary.main}`,
                },
                "&:hover": {
                  backgroundColor: theme.palette.action.hover,
                },
              },
              "& .MuiTabs-indicator": {
                display: "none",
              },
            }}
          >
            <Tab label="Dashboard" />
            <Tab label="WoW Analysis" />
          </Tabs>
        </Paper>

        {/* Tab Panels */}
        <TabPanel value={tabValue} index={0}>
          {/* Risk Categories */}
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              gap: 2,
              overflow: "auto",
              maxHeight: "calc(100vh - 300px)",
            }}
          >
            {riskData.map((category, index) => (
              <Fade in={true} timeout={800 + index * 200} key={category.id}>
                <Box>
                  <RiskCategory category={category} onNotify={handleNotify} />
                </Box>
              </Fade>
            ))}
          </Box>
        </TabPanel>

        <TabPanel value={tabValue} index={1}>
          <WoWGraph />
        </TabPanel>
      </Box>
    </Fade>
  );
};

export default CentralOEDashboard;
