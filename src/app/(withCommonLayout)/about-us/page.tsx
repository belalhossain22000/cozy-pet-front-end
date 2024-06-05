import React from 'react';
import { Container, Typography, Box, Grid, Link, Card, CardContent, CardMedia, IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const About = () => {
  return (
    <Container maxWidth="md" sx={{ py: 4 }}>
      <Box sx={{ textAlign: 'center', mb: 4 }}>
        <Typography variant="h3" component="h1" gutterBottom>
          About Us
        </Typography>
      </Box>

      <Grid container spacing={4}>
        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Mission Statement
              </Typography>
              <Typography variant="body1">
                Our mission is to provide a platform where users can find insightful information and resources on various topics.
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3 }}>
            <CardMedia
              component="img"
              alt="Team"
              height="240"
              image="https://img.freepik.com/free-photo/group-people-working-team_23-2147656716.jpg?t=st=1717577223~exp=1717580823~hmac=f08b68af680cd84a8fa43e1d9d5bdc15c390e711524bad19c0e90582df8d9c5f&w=826"
              sx={{ objectFit: 'cover' }}
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
        </Grid>

        <Grid item xs={12}>
          <Card sx={{ boxShadow: 3 }}>
            <CardContent>
              <Typography variant="h5" component="h2" gutterBottom>
                Contact Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                You can reach us through the following channels:
              </Typography>
              <Grid container spacing={2}>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <IconButton href="mailto:info@example.com" sx={{ p: 0 }}>
                      <EmailIcon sx={{ mr: 1, color: 'primary.main' }} />
                    </IconButton>
                    Email: <Link href="mailto:info@example.com" color="inherit">info@example.com</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="body1">
                    <IconButton href="tel:+1234567890" sx={{ p: 0 }}>
                      <PhoneIcon sx={{ mr: 1, color: 'primary.main' }} />
                    </IconButton>
                    Phone: <Link href="tel:+1234567890" color="inherit">+1234567890</Link>
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography variant="body1">
                    Follow us on social media:
                  </Typography>
                  <Box sx={{ display: 'flex', gap: 2, mt: 1 }}>
                    <IconButton href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                      <FacebookIcon sx={{ color: '#3b5998' }} />
                    </IconButton>
                    <IconButton href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                      <TwitterIcon sx={{ color: '#1da1f2' }} />
                    </IconButton>
                    <IconButton href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                      <LinkedInIcon sx={{ color: '#0077b5' }} />
                    </IconButton>
                  </Box>
                </Grid>
              </Grid>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default About;
