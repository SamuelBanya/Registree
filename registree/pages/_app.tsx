import '../styles/globals.css';
import Head from 'next/head';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from '../components/navbar/NavBar';

const theme = createTheme();

theme.typography.h1 = {
  fontSize: '50px',
  textAlign: 'center',
  paddingTop: '25px',
  '@media (min-width: 600px)': {
    fontSize: '60px',
  },
  [theme.breakpoints.up('md')]: {
    fontSize: '70px',
  },
  color: "#FFC700",
  fontFamily: `"Inter", "sans-serif"`,
  fontStyle: "normal",
  fontWeight: 400,
  lineHeight: "normal",
  marginTop: "50px"
};

function App({ Component, pageProps }) {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Head>
          <link rel="icon" href="/icons/favicon.ico" />
        </Head>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}


export default App;
