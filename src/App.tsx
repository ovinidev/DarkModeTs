import { ThemeProvider, DefaultTheme } from 'styled-components';
import usePersistedState from './utils/usePersistedState';

import { dark } from './styles/themes/dark';
import { light } from './styles/themes/light';

import { Header } from './components/Header';
import { GlobalStyles } from './styles/global-styles';

function App() {
  const [theme, setTheme] = usePersistedState<DefaultTheme>('theme', light);

  const toggleTheme = () => {
    setTheme(theme.title === 'light' ? dark : light);
  };

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <GlobalStyles />
        <Header toggleTheme={toggleTheme} />
      </div>
    </ThemeProvider>

  );
}

export default App;
