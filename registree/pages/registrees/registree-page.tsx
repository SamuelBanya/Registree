import Link from "@mui/material/Link";
import Button from "@mui/material/Button";
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Switch from '@mui/material/Switch';
import { IconButton, Typography, useMediaQuery } from '@mui/material';
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
            <Typography variant="h1">🌲Registrees🌲</Typography>
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
              <Grid item xs={2} alignItems="center" display="flex" pl="5px">
                <IconButton size='small' aria-label="Edit an existing Registree">
                  <IconContext.Provider
                    value={{ color: "black", size: "25" }}
                  >
                    <FaEdit />
                  </IconContext.Provider>
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6"><b>Mom's Christmas List</b></Typography>
                <Typography variant="h6"><Link href="#" color="black" underline="hover">Registree.xyz/mom101</Link></Typography>
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
              <Grid item xs={2} alignItems="center" display="flex" pl="5px">
                <IconButton size="small" aria-label="Edit an existing Registree">
                  <IconContext.Provider
                    value={{ color: "black", size: "25" }}
                  >
                    <FaEdit />
                  </IconContext.Provider>
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6"><b>Sam's Birthday List</b></Typography>
                <Typography variant="h6"><Link href="#" color="black" underline="hover">Registree.xyz/sam123</Link></Typography>
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
              <Grid item xs={2} alignItems="center" display="flex" pl="5px">
                <IconButton size='small' aria-label="Edit an existing Registree">
                  <IconContext.Provider
                    value={{ color: "black", size: "25" }}
                  >
                    <FaEdit />
                  </IconContext.Provider>
                </IconButton>
              </Grid>
              <Grid item xs={8}>
                <Typography variant="h6"><b>Tina's Wedding Registry List</b></Typography>
                <Typography variant="h6"><Link href="#" color="black" underline="hover">Registree.xyz/tina456</Link></Typography>
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
        {!smSizeMatch ? <NavBar /> : null
        }
      </Box >
    </>
  )
}
