import '../styles/globals.css';
import Head from 'next/head';
import { createTheme, ThemeProvider, useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import NavBar from '../components/navbar/NavBar';

const theme = createTheme();

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
