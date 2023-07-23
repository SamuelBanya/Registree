import React from 'react';
import './App.css';
// Adding Material UI components:
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { IconButton } from '@mui/material';
import { MdDragIndicator } from "react-icons/md";
import { FaAmazon, FaEbay, FaClipboard } from "react-icons/fa";
import { FaShareNodes, FaUser } from "react-icons/fa6";
import { SiTarget } from "react-icons/si";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  textAlign: 'center',
  color: theme.palette.text.secondary,
}));

function App() {
  return (
    <div className="App">
      <h1>Registrees</h1>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Item>
              <Button variant="contained">Add New Registrees</Button>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Grid item xs={2}>
                <Item>
                  <IconButton aria-label="Drag a Registree to a different position on screen">
                    <MdDragIndicator />
                  </IconButton>
                </Item>
              </Grid>
              <Grid item xs={8}>
                  <h2>Mom's Christmas List</h2>
                  <h3>Registree.xyz/mom101</h3>
                  <FaAmazon />
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Switch />
                </Item>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Grid item xs={2}>
                <Item>
                  <IconButton aria-label="Drag a Registree to a different position on screen">
                    <MdDragIndicator />
                  </IconButton>
                </Item>
              </Grid>
              <Grid item xs={8}>
                  <h2>Sam's Birthday List</h2>
                  <h3>Registree.xyz/sam123</h3>
                  <FaEbay />
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Switch />
                </Item>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
              <Grid item xs={2}>
                <Item>
                  <IconButton aria-label="Drag a Registree to a different position on screen">
                    <MdDragIndicator />
                  </IconButton>
                </Item>
              </Grid>
              <Grid item xs={8}>
                  <h2>Tina's Wedding Registry List</h2>
                  <h3>Registree.xyz/tina456</h3>
                  <SiTarget />
              </Grid>
              <Grid item xs={2}>
                <Item>
                  <Switch />
                </Item>
              </Grid>
            </Item>
          </Grid>
          <Grid item xs={12}>
            <Item>
                <Grid item xs={4}>
                  <Item>
                    <IconButton aria-label="View current user's Registrees">
                      <FaClipboard />
                    </IconButton>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <IconButton aria-label="View current user's Registrees">
                      <FaShareNodes />
                    </IconButton>
                  </Item>
                </Grid>
                <Grid item xs={4}>
                  <Item>
                    <IconButton aria-label="View current user's Registrees">
                      <FaUser />
                    </IconButton>
                  </Item>
                </Grid>
            </Item>
          </Grid>
        </Grid>
      </Box>
    </div>
  );
}

export default App;
