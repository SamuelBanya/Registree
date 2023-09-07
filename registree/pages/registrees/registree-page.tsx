import Link from "next/link";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { IconButton, useMediaQuery } from '@mui/material';
import { MdDragIndicator } from "react-icons/md";
import { FaAmazon, FaEbay, FaClipboard, FaEdit } from "react-icons/fa";
import { FaShareNodes, FaUser } from "react-icons/fa6";
import { SiTarget } from "react-icons/si";
import Stack from '@mui/material/Stack';
import MenuGrid from "../../components/menu/MenuGrid";
import { IconContext } from "react-icons/lib";
import NavBar from '../../components/navbar/NavBar';
import { useTheme } from '@mui/material/styles';


export default function RegistreePage() {

  const theme = useTheme();
  const smSizeMatch = useMediaQuery(theme.breakpoints.up('sm'));

  return (
    <>
      <Box className="Overarching-Box">
        {smSizeMatch ? <NavBar /> : null}
        <Box
          sx={{
            flexGrow: "1",
            marginLeft: "50px",
            marginRight: "50px"
          }}
          alignItems="center"
        >
          <Grid item xs={12}>
            <h1 id="Registree-Header">🌲Registrees🌲</h1>
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
              <Grid item xs={1} alignItems="center" display="flex">
                <IconContext.Provider
                  value={{ color: "black", size: "50" }}
                >
                  <IconButton aria-label="Drag a Registree to a different position on screen">
                    <MdDragIndicator />
                  </IconButton>
                </IconContext.Provider>
              </Grid>
              <Grid item xs={1} alignItems="center" display="flex">
                <IconContext.Provider
                  value={{ color: "black", size: "25" }}
                >
                  <IconButton aria-label="Edit an existing Registree">
                    <FaEdit />
                  </IconButton>
                </IconContext.Provider>
              </Grid>
              <Grid item xs={6}>
                <h2>Mom's Christmas List</h2>
                <h3>Registree.xyz/mom101</h3>
                <IconContext.Provider
                  value={{ color: "black", size: "18" }}
                >
                  <FaAmazon />
                </IconContext.Provider>
              </Grid>
              <Grid item xs={2} alignItems="center" display="flex">
                <Switch />
              </Grid>
            </MenuGrid>
            <MenuGrid>
              <Grid item xs={1} alignItems="center" display="flex">
                <IconContext.Provider
                  value={{ color: "black", size: "50" }}
                >
                  <IconButton aria-label="Drag a Registree to a different position on screen">
                    <MdDragIndicator />
                  </IconButton>
                </IconContext.Provider>
              </Grid>
              <Grid item xs={1} alignItems="center" display="flex">
                <IconContext.Provider
                  value={{ color: "black", size: "25" }}
                >
                  <IconButton aria-label="Edit an existing Registree">
                    <FaEdit />
                  </IconButton>
                </IconContext.Provider>
              </Grid>
              <Grid item xs={6}>
                <h2>Sam's Birthday List</h2>
                <h3>Registree.xyz/sam123</h3>
                <IconContext.Provider
                  value={{ color: "black", size: "18" }}
                >
                  <FaEbay />
                </IconContext.Provider>
              </Grid>
              <Grid item xs={2} alignItems="center" display="flex">
                <Switch />
              </Grid>
            </MenuGrid>
            <MenuGrid>
              <Grid item xs={1} alignItems="center" display="flex">
                <IconContext.Provider
                  value={{ color: "black", size: "50" }}
                >
                  <IconButton aria-label="Drag a Registree to a different position on screen">
                    <MdDragIndicator />
                  </IconButton>
                </IconContext.Provider>
              </Grid>
              <Grid item xs={1} alignItems="center" display="flex">
                <IconContext.Provider
                  value={{ color: "black", size: "25" }}
                >
                  <IconButton aria-label="Edit an existing Registree">
                    <FaEdit />
                  </IconButton>
                </IconContext.Provider>
              </Grid>
              <Grid item xs={6}>
                <h2>Tina's Wedding Registry List</h2>
                <h3>Registree.xyz/tina456</h3>
                <IconContext.Provider
                  value={{ color: "black", size: "18" }}
                >
                  <SiTarget />
                </IconContext.Provider>
              </Grid>
              <Grid item xs={2} alignItems="center" display="flex">
                <Switch />
              </Grid>
            </MenuGrid>
          </Grid>
        </Box >
        {!smSizeMatch ? <NavBar /> : null}
      </Box>
    </>
  )
}
