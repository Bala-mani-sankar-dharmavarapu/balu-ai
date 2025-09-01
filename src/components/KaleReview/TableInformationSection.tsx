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
  Chip,
} from "@mui/material";
import type { Application, TableInfo } from "./types";

interface TableInformationSectionProps {
  selectedApplication: Application | null;
  tableInfo: TableInfo[];
  getStatusColor: (status: string) => string;
  getStatusBackground: (status: string) => string;
}

const TableInformationSection: React.FC<TableInformationSectionProps> = ({
  selectedApplication,
  tableInfo,
  getStatusColor,
  getStatusBackground,
}) => {
  return (
    <Paper
      elevation={0}
      sx={{
        flex: 1,
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
          {selectedApplication
            ? `${selectedApplication.name} - Table Information`
            : "Select an application to view table information"}
        </Typography>
        {selectedApplication && (
          <Typography variant="body2" sx={{ color: "text.secondary" }}>
            Viewing table usage status for the selected application
          </Typography>
        )}
      </Box>
      {selectedApplication && tableInfo.length > 0 ? (
        <TableContainer
          sx={{
            p: 1.5,
            flex: 1,
            overflow: "auto",
            maxHeight: "100%",
            "&::-webkit-scrollbar": {
              width: "8px",
            },
            "&::-webkit-scrollbar-track": {
              background: "rgba(0, 0, 0, 0.05)",
              borderRadius: "4px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "rgba(0, 0, 0, 0.2)",
              borderRadius: "4px",
              "&:hover": {
                background: "rgba(0, 0, 0, 0.3)",
              },
            },
            "&::-webkit-scrollbar-corner": {
              background: "transparent",
            },
          }}
        >
          <Table stickyHeader>
            <TableHead>
              <TableRow>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.85rem", py: 1.5 }}
                >
                  Table Name
                </TableCell>
                <TableCell
                  sx={{ fontWeight: 600, fontSize: "0.85rem", py: 1.5 }}
                >
                  Usage Status
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {tableInfo.map((table, index) => (
                <TableRow
                  key={index}
                  sx={{
                    "&:hover": {
                      backgroundColor: "action.hover",
                    },
                  }}
                >
                  <TableCell sx={{ py: 1.5, fontSize: "0.85rem" }}>
                    {table.tableName}
                  </TableCell>
                  <TableCell sx={{ py: 1.5 }}>
                    <Chip
                      label={table.usageStatus}
                      size="small"
                      sx={{
                        backgroundColor: getStatusBackground(table.usageStatus),
                        color: getStatusColor(table.usageStatus),
                        fontWeight: 600,
                        fontSize: "0.75rem",
                        borderRadius: 1,
                        px: 0.5,
                        border: `1px solid ${getStatusColor(
                          table.usageStatus
                        )}30`,
                        boxShadow: "0 1px 4px rgba(0,0,0,0.1)",
                      }}
                    />
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flex: 1,
            color: "text.secondary",
            p: 2,
            overflow: "auto",
            maxHeight: "100%",
          }}
        >
          <Box sx={{ textAlign: "center" }}>
            <Typography variant="h6" sx={{ mb: 1, color: "text.secondary" }}>
              {selectedApplication
                ? "No table information available"
                : "Select an Application"}
            </Typography>
            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              {selectedApplication
                ? "This application doesn't have any table information yet."
                : "Use the search box above to find and select an application to view its table details."}
            </Typography>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default TableInformationSection;
