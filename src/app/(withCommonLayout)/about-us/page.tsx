// pages/about.js

import React from 'react';
import { Container, Typography, Box, Grid, Link, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom align="center">
          About Us
        </Typography>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Mission Statement
              </Typography>
              <Typography variant="body1">
                Our mission is to provide a platform where users can find insightful information and resources on various topics.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardMedia
              component="img"
              alt="Team"
              height="140"
              image="/images/team.jpg" // Ensure you have an image at this path or update the path accordingly
            />
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Team Information
              </Typography>
              <Typography variant="body1">
                We are a group of passionate individuals committed to delivering high-quality content and an excellent user experience. Our team comprises experts in various fields, ensuring that our content is accurate and up-to-date.
              </Typography>
            </CardContent>
          </Card>
        </Box>

        <Box sx={{ my: 4 }}>
          <Card>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1">
                You can reach us through the following channels:
              </Typography>
              <Grid container spacing={2} sx={{ mt: 2 }}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <IconButton href="mailto:info@example.com">
                      <EmailIcon />
                    </IconButton>
                    Email: <Link href="mailto:info@example.com">info@example.com</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <IconButton href="tel:+1234567890">
                      <PhoneIcon />
                    </IconButton>
                    Phone: <Link href="tel:+1234567890">+1234567890</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Follow us on social media:
                  </Typography>
                  <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                    <FacebookIcon />
                  </IconButton>
                  <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                    <TwitterIcon />
                  </IconButton>
                  <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                    <LinkedInIcon />
                  </IconButton>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Box>
      </Box>
    </Container>
  );
};

export default About;
