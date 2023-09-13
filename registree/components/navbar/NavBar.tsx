import Grid from '@mui/material/Grid';
import Stack from '@mui/material/Stack';
import { IconButton } from '@mui/material';
import { FaAmazon, FaEbay, FaClipboard } from "react-icons/fa";
import { FaShareNodes, FaUser } from "react-icons/fa6";
import { IconContext } from "react-icons/lib";

export default function NavBar() {
  return (
    <Grid item xs={12} className="Desktop-menu-grid">
      <Stack
        direction="row"
        alignItems="center"
        spacing={{ xs: 5, sm: 5, md: 5, lg: 5, xl: 5 }}
        justifyContent="center"
        padding={2.5}
      >
        <Grid item xs={4}>
          <IconButton
            sx={{
              width:
              {
                xs: 100,
                sm: 150,
                md: 175,
                lg: 200,
                xl: 225
              },
              height: "85px",
              backgroundColor: "#FFF",
              borderRadius: "15px",
              border: "4px solid #000",
            }}
            aria-label="View current user's Registrees"
          >
            <IconContext.Provider
              value={{ color: "black", size: "50" }}
            >
              <FaClipboard />
            </IconContext.Provider>
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            sx={{
              width:
              {
                xs: 100,
                sm: 150,
                md: 175,
                lg: 200,
                xl: 225
              },
              height: "85px",
              backgroundColor: "#FFF",
              borderRadius: "15px",
              border: "4px solid #000",
            }}
            aria-label="Share current user's Registrees"
          >
            <IconContext.Provider
              value={{ color: "black", size: "50" }}
            >
              <FaShareNodes />
            </IconContext.Provider>
          </IconButton>
        </Grid>
        <Grid item xs={4}>
          <IconButton
            sx={{
              width:
              {
                xs: 100,
                sm: 150,
                md: 175,
                lg: 200,
                xl: 225
              },
              height: "85px",
              backgroundColor: "#FFF",
              borderRadius: "15px",
              border: "4px solid #000",
            }}
            aria-label="View current user's profile"
          >
            <IconContext.Provider
              value={{ color: "black", size: "50" }}
            >
              <FaUser />
            </IconContext.Provider>
          </IconButton>
        </Grid>
      </Stack>
    </Grid>
  )
}
