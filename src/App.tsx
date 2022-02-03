import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Project from "./components/Project";
import Record from "./components/Record";
import Slider from "./components/Slider";
import { lightTheme, darkTheme, flexCenter } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";

const AppContainer = styled.div`
  color: ${({ theme }) => theme.color.white};
  background-color: ${({ theme }) => theme.color.black};
  .wrapper {
    ${flexCenter};
    flex-direction: column;
  }
`;
const ThemeToggle = styled.div<{ isDark: boolean }>`
  cursor: pointer;
  font-size: 1.5rem;
  position: fixed;
  z-index: 100;
  top: 2rem;
  right: 2rem;
  color: ${({ theme }) => theme.color.white};
  transition: 0.3s;
  &:hover {
    transition: 0.3s;
    color: ${({ theme }) => theme.color.blue};
  }
`;

function App() {
  const [slider, setSlider] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setSlider(false);
    }, 2500);
  }, []);

  const [theme, setTheme] = useState("dark");
  const handleTheme = () => {
    if (theme === "dark") setTheme("light");
    else setTheme("dark");
  };

  return (
    <ThemeProvider theme={theme === "dark" ? darkTheme : lightTheme}>
      <ThemeToggle onClick={handleTheme} isDark={theme === "dark"}>
        {theme === "dark" ? "LIGHT MODE" : "DARK MODE"}
      </ThemeToggle>
      <AppContainer>
        <div className="App">
          {slider ? (
            <Slider />
          ) : (
            <div className="wrapper">
              <Main />
              <Intro />
              <Record />
              <Project />
            </div>
          )}
        </div>
        <div className="none">
          <div>{`Please
 access
  from a
   wider
    screen.`}</div>
        </div>
      </AppContainer>
    </ThemeProvider>
  );
}

export default App;