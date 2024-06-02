"use client";

import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Button,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
} from "@mui/material";
import {
  useGetAllUsersQuery,
  useUpdateUsersMutation,
  useUpdateUsersStatusMutation,
} from "@/redux/api/userApi";

const UserPage = () => {
  // const [users, setUsers] = useState(initialUsers);
  const { data, isLoading } = useGetAllUsersQuery(undefined);
  const users = data?.data || [];
  const [updateUsers] = useUpdateUsersMutation();
  const [updateUsersStatus] = useUpdateUsersStatusMutation();

  // handle change user status
  const toggleActiveStatus = async (id: string, isActive: boolean) => {
    const updatedIsActive = !isActive;
    const payload = { id, isActive: updatedIsActive };
    try {
      const res = await updateUsersStatus(payload).unwrap();
      console.log(res)
      if (res.data.id) {
        alert("changed user status");
      }
    } catch (error) {
      console.log(error);
    }
    console.log(id, isActive);
  };

  // handle change role
  const handleRoleChange = async (id: string, newRole: string) => {
    const payload = { id, role: newRole };
    try {
      const res = await updateUsers(payload).unwrap();
      if (res?.data?.id) {
        alert("role updated successfully");
      }
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <TableContainer component={Paper} sx={{ width: "100%", marginTop: 2 }}>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell>Email</TableCell>
            <TableCell>Active</TableCell>
            <TableCell>Role</TableCell>
            <TableCell>Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((user: any) => (
            <TableRow key={user?.id}>
              <TableCell>{user?.name}</TableCell>
              <TableCell>{user?.email}</TableCell>
              <TableCell>{user?.isActive ? "Active" : "Inactive"}</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select
                    defaultValue={user?.role}
                    onChange={(e) => handleRoleChange(user?.id, e.target.value)}
                  >
                    <MenuItem value="USER">User</MenuItem>
                    <MenuItem value="ADMIN">Admin</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color={user?.isActive ? "secondary" : "primary"}
                  onClick={() => toggleActiveStatus(user?.id, user?.isActive)}
                >
                  {user?.isActive ? "Deactivate" : "Activate"}
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default UserPage;
