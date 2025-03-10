import { AuthContextProvider } from './context/AuthContext';
import { createContext, useState } from 'react';
import { Light, Dark } from './styles/themes';
import styled, { ThemeProvider } from 'styled-components';
import MyRoutes from './routes/routes';

export const ThemeContext = createContext(null);

function App() {
  const[themeuse, setTheme] = useState("dark");
  const theme = themeuse === "light" ? "light" : "dark";
  const themeStyle = theme === "light" ? Light : Dark;

  return (
    <>
      <ThemeContext.Provider value={{theme, setTheme}}>
        <ThemeProvider theme={ themeStyle }>
          <AuthContextProvider>
            <Container>
              <MyRoutes/>
            </Container>
          </AuthContextProvider>
        </ThemeProvider>
      </ThemeContext.Provider>
    </>
  )
}

const Container = styled.div`
  display: flex;
  grid-template-columns: 1fr;
  background-color: ${({theme}) => theme.bgtotal};
`;


export default App
