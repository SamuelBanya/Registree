import Link from "next/link";
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
import Stack from '@mui/material/Stack';
import MenuGrid from "../../components/menu/MenuGrid";
import { IconContext } from "react-icons/lib";
import NavBar from '../../components/navbar/NavBar';

export default function RegistreePage() {

  return (
    <>
      <div className="App">
        <NavBar />
        <Box
          sx={{
            flexGrow: "1",
            marginLeft: "50px",
            marginRight: "50px"
          }}
          alignItems="center"
        >
          <Grid item xs={12}>
            <h1>Registrees</h1>
          </Grid>
          <Grid container>
            <Grid
              item
              xs={12}
              sx={{
                marginBottom: "50px"
              }}
            >
              <Button fullWidth id="Add-Registree-Button" variant="contained">Add New Registree</Button>
            </Grid>
            <MenuGrid>
              <Grid item xs={2}>
                <IconButton aria-label="Drag a Registree to a different position on screen">
                  <MdDragIndicator />
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <h2>Mom's Christmas List</h2>
                <h3>Registree.xyz/mom101</h3>
                <FaAmazon />
              </Grid>
              <Grid item xs={2}>
                <Switch />
              </Grid>
            </MenuGrid>
            <MenuGrid>
              <Grid item xs={2}>
                <IconButton aria-label="Drag a Registree to a different position on screen">
                  <MdDragIndicator />
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <h2>Sam's Birthday List</h2>
                <h3>Registree.xyz/sam123</h3>
                <FaEbay />
              </Grid>
              <Grid item xs={2}>
                <Switch />
              </Grid>
            </MenuGrid>
            <MenuGrid>
              <Grid item xs={2}>
                <IconButton aria-label="Drag a Registree to a different position on screen">
                  <MdDragIndicator />
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <h2>Tina's Wedding Registry List</h2>
                <h3>Registree.xyz/tina456</h3>
                <SiTarget />
              </Grid>
              <Grid item xs={2}>
                <Switch />
              </Grid>
            </MenuGrid>
          </Grid>
        </Box>
      </div>
    </>
  )
}
