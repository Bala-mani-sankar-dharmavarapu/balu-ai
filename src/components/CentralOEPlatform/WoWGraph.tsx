import React from "react";
import {
  Box,
  Typography,
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  useTheme,
} from "@mui/material";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

// Data based on the WoW analysis image
const wowData = [
  {
    week: "Week 5",
    shepherdRisk: 88,
    pe: 65,
    sas: 45,
    overall: 74.55,
  },
  {
    week: "Week 4",
    shepherdRisk: 65,
    pe: 73,
    sas: 92,
    overall: 67.3,
  },
  {
    week: "Week 3",
    shepherdRisk: 52,
    pe: 85,
    sas: 67,
    overall: 68.75,
  },
  {
    week: "Week 2",
    shepherdRisk: 82,
    pe: 62,
    sas: 57,
    overall: 70.45,
  },
  {
    week: "Week 1",
    shepherdRisk: 72,
    pe: 84,
    sas: 49,
    overall: 69.2,
  },
];

const WoWGraph: React.FC = () => {
  const theme = useTheme();

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      return (
        <Paper
          elevation={3}
          sx={{
            p: 1.5,
            background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
            border: `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            backdropFilter: "blur(10px)",
          }}
        >
          <Typography variant="body2" sx={{ fontWeight: 600, mb: 0.5 }}>
            {label}
          </Typography>
          {payload.map((entry: any, index: number) => (
            <Typography
              key={index}
              variant="caption"
              sx={{
                color: entry.color,
                display: "block",
                fontWeight: 600,
              }}
            >
              {entry.name}: {entry.value}
            </Typography>
          ))}
        </Paper>
      );
    }
    return null;
  };

  return (
    <Box sx={{ height: "100%", overflow: "auto" }}>
      {/* Chart Section */}
      <Paper
        elevation={0}
        sx={{
          p: 2,
          mb: 2,
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          border: `1px solid ${theme.palette.divider}`,
          backdropFilter: "blur(10px)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            mb: 2,
          }}
        >
          <Box>
            <Typography
              variant="h6"
              sx={{
                fontWeight: 700,
                background: `linear-gradient(135deg, ${theme.palette.primary.main}, ${theme.palette.secondary.main})`,
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                mb: 1,
              }}
            >
              WoW Analysis
            </Typography>
            <Box sx={{ display: "flex", gap: 2, flexWrap: "wrap" }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 2,
                    backgroundColor: theme.palette.primary.main,
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  Shepherd Risk
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 2,
                    backgroundColor: theme.palette.warning.main,
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  PE
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 2,
                    backgroundColor: theme.palette.success.main,
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  SAS
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 0.5 }}>
                <Box
                  sx={{
                    width: 12,
                    height: 12,
                    borderRadius: 2,
                    backgroundColor: theme.palette.secondary.main,
                  }}
                />
                <Typography variant="caption" sx={{ fontWeight: 600 }}>
                  OverAll
                </Typography>
              </Box>
            </Box>
          </Box>

          <Box sx={{ display: "flex", gap: 1 }}>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.text.secondary,
                fontWeight: 500,
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                backgroundColor: theme.palette.primary.main + "10",
                border: `1px solid ${theme.palette.primary.main}20`,
              }}
            >
              Last 3 Weeks Trend
            </Typography>
            <Typography
              variant="caption"
              sx={{
                color: theme.palette.success.main,
                fontWeight: 600,
                px: 1.5,
                py: 0.5,
                borderRadius: 1,
                backgroundColor: theme.palette.success.main + "10",
                border: `1px solid ${theme.palette.success.main}20`,
              }}
            >
              +7.55% Overall
            </Typography>
          </Box>
        </Box>

        <ResponsiveContainer width="100%" height={300}>
          <BarChart
            data={wowData.slice(0, 3)} // Show only last 3 weeks in chart
            margin={{
              top: 20,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme.palette.divider}
              opacity={0.3}
            />
            <XAxis
              dataKey="week"
              tick={{ fill: theme.palette.text.secondary }}
              axisLine={{ stroke: theme.palette.divider }}
              tickLine={{ stroke: theme.palette.divider }}
            />
            <YAxis
              domain={[0, 100]}
              tick={{ fill: theme.palette.text.secondary }}
              axisLine={{ stroke: theme.palette.divider }}
              tickLine={{ stroke: theme.palette.divider }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              wrapperStyle={{
                paddingTop: 20,
              }}
              formatter={(value, entry) => (
                <span style={{ color: entry.color, fontWeight: 600 }}>
                  {value}
                </span>
              )}
            />
            <Bar
              dataKey="shepherdRisk"
              name="🔵 Shepherd Risk"
              fill={theme.palette.primary.main}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="pe"
              name="🟠 PE"
              fill={theme.palette.warning.main}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="sas"
              name="🟢 SAS"
              fill={theme.palette.success.main}
              radius={[4, 4, 0, 0]}
            />
            <Bar
              dataKey="overall"
              name="🟣 OverAll"
              fill={theme.palette.secondary.main}
              radius={[4, 4, 0, 0]}
            />
          </BarChart>
        </ResponsiveContainer>
      </Paper>

      {/* Data Table Section */}
      <Paper
        elevation={0}
        sx={{
          borderRadius: 2,
          background: `linear-gradient(135deg, ${theme.palette.background.paper}, ${theme.palette.background.default})`,
          border: `1px solid ${theme.palette.divider}`,
          backdropFilter: "blur(10px)",
          overflow: "hidden",
        }}
      >
        <Box sx={{ p: 2, borderBottom: `1px solid ${theme.palette.divider}` }}>
          <Typography
            variant="subtitle2"
            sx={{
              fontWeight: 600,
              color: theme.palette.text.primary,
              mb: 0.5,
            }}
          >
            Detailed Metrics (5 Weeks)
          </Typography>
          <Typography
            variant="caption"
            sx={{
              color: theme.palette.text.secondary,
            }}
          >
            Complete data breakdown with trend analysis
          </Typography>
        </Box>
        <TableContainer>
          <Table sx={{ minWidth: 650, "& td": { py: 1 } }}>
            <TableHead>
              <TableRow
                sx={{
                  backgroundColor: theme.palette.background.default,
                  "& th": {
                    borderBottom: `2px solid ${theme.palette.divider}`,
                    fontWeight: 700,
                    fontSize: "0.75rem",
                    color: theme.palette.text.secondary,
                    textTransform: "uppercase",
                    letterSpacing: "0.5px",
                    py: 1,
                  },
                }}
              >
                <TableCell>Week</TableCell>
                <TableCell align="center">Shepherd Risk</TableCell>
                <TableCell align="center">PE</TableCell>
                <TableCell align="center">SAS</TableCell>
                <TableCell align="center">OverAll</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {wowData.map((row) => (
                <TableRow
                  key={row.week}
                  sx={{
                    "&:hover": {
                      backgroundColor: theme.palette.action.hover,
                    },
                    "&:last-child td": {
                      borderBottom: 0,
                    },
                    transition: "all 0.2s ease-in-out",
                  }}
                >
                  <TableCell
                    sx={{
                      fontWeight: 600,
                      color: theme.palette.text.primary,
                      fontSize: "0.8rem",
                    }}
                  >
                    {row.week}
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.primary.main,
                        fontSize: "0.8rem",
                      }}
                    >
                      {row.shepherdRisk}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.warning.main,
                        fontSize: "0.8rem",
                      }}
                    >
                      {row.pe}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.success.main,
                        fontSize: "0.8rem",
                      }}
                    >
                      {row.sas}
                    </Typography>
                  </TableCell>
                  <TableCell align="center">
                    <Typography
                      sx={{
                        fontWeight: 600,
                        color: theme.palette.secondary.main,
                        fontSize: "0.8rem",
                      }}
                    >
                      {row.overall}
                    </Typography>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </Box>
  );
};

export default WoWGraph;
