"use client"

import React, { useState } from 'react';
import {
  Table, TableBody, TableCell, TableContainer, TableHead, TableRow,
  Paper, Button, Select, MenuItem, FormControl, InputLabel
} from '@mui/material';

const initialUsers = [
  { id: 1, name: 'Alice', email: 'alice@example.com', active: true, role: 'User' },
  { id: 2, name: 'Bob', email: 'bob@example.com', active: false, role: 'Admin' },
  { id: 3, name: 'Charlie', email: 'charlie@example.com', active: true, role: 'User' },
];

const UserPage = () => {
  const [users, setUsers] = useState(initialUsers);

  const toggleActiveStatus = (id: number) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, active: !user.active } : user
    ));
  };

  const handleRoleChange = (id: number, newRole: string) => {
    setUsers(users.map(user =>
      user.id === id ? { ...user, role: newRole } : user
    ));
  };

  return (
    <TableContainer component={Paper} sx={{ width: '100%', marginTop: 2 }}>
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
          {users.map(user => (
            <TableRow key={user.id}>
              <TableCell>{user.name}</TableCell>
              <TableCell>{user.email}</TableCell>
              <TableCell>{user.active ? 'Active' : 'Inactive'}</TableCell>
              <TableCell>
                <FormControl fullWidth>
                  <InputLabel>Role</InputLabel>
                  <Select
                    value={user.role}
                    onChange={(e) => handleRoleChange(user.id, e.target.value)}
                  >
                    <MenuItem value="User">User</MenuItem>
                    <MenuItem value="Admin">Admin</MenuItem>
                    <MenuItem value="Moderator">Moderator</MenuItem>
                  </Select>
                </FormControl>
              </TableCell>
              <TableCell>
                <Button
                  variant="contained"
                  color={user.active ? "secondary" : "primary"}
                  onClick={() => toggleActiveStatus(user.id)}
                >
                  {user.active ? 'Deactivate' : 'Activate'}
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
