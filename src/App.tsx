import { FC, useEffect, useState } from 'react';
import { Router } from './pages/Router';
import { theme } from './styles/theme';
import { ThemeProvider } from '@mui/material';
import './styles/globals.css';
import './styles/mui-overrides.css';
import { Loader } from './design-system/_common/Loader';
import { Suspense } from 'react';
import { I18nextProvider, useTranslation } from 'react-i18next';

interface AppProps {
  name?: any
  children?: Element
  ebconfig?: any
  options?: any
  locale?: string
}

const locales = {
  en: { title: 'English' },
  de: { title: 'German' },
  pt: { title: 'Portuguese' },
};

const App: FC<AppProps> = () => {

  const [data, setData] = useState(false);
  const { t, i18n } = useTranslation();

  const [messages, setMessages] = useState(0);

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
  });



  return (
    <Suspense fallback="...loading">
      <I18nextProvider i18n={i18n}>

        <div className="App ">
          <ThemeProvider theme={theme}>
            <Router />
            {!data ? <Loader /> : ''}
          </ThemeProvider>
        </div>
      </I18nextProvider>
    </Suspense>
  );
}

export default App;
