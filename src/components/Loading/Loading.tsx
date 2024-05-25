import React from 'react'
import { CircularProgress, Container, Typography, Box } from '@mui/material';


const Loading = ({isLoading}) => {
  return (
    <div>
        if (isLoading) {
    return (
      <Container>
        <Box display="flex" justifyContent="center" alignItems="center" height="100vh">
          <CircularProgress />
        </Box>
      </Container>
    );
  }

    </div>
  )
}

export default Loading