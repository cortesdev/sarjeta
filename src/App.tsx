import { FC, useEffect, useState } from 'react';
import { Router } from './pages/Router';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';
import './styles/mui-overrides.css';
import { Loader } from './design-system/_common/Loader';

interface AppProps {
  name?: any
  children?: Element
  ebconfig?: any
  options?: any
}



const App: FC<AppProps> = () => {

  const [data, setData] = useState(false);


  const setDataTimeout = () => {
    setTimeout(() => {
      setData(true);

    }, 3500);
  }


  useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));

    setDataTimeout()
    console.log(data);
  }, []);


  return (
    <div className="App container">
      <ThemeProvider theme={theme}>
        <Router />
        {!data ? <Loader /> : ''}

      </ThemeProvider>
    </div>
  );
}

export default App;
