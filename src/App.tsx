import { useEffect, useState } from "react";
import Intro from "./components/Intro";
import Main from "./components/Main";
import Project from "./components/Project";
import Record from "./components/Record";
import Slider from "./components/Slider";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { lightTheme, darkTheme, flexCenter } from "./styles/theme";
import styled, { ThemeProvider } from "styled-components";
import favicon from "./image/favicon.png";

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
      <HelmetProvider>
        <Helmet>
          <meta charSet="utf-8" />
          <meta property="og:title" content="Mandu0505 | Youngmin" />
          <meta property="og:image" content="/og-main.png" />
          <meta
            property="og:description"
            content="Front-end Developer Youngmin's Protfolio Website"
          />
          <meta name="description" content="Mandu0505 | Youngmin" />
          <meta
            name="keywords"
            content="프로그래머, 개발자, 프론트엔드, mandu0505, Youngmin, 고영민"
          />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta name="theme-color" content="#000000" />
          <meta
            name="description"
            content="Website made by mandu0505 (Youngmin)"
          />
          <title>Mandu0505 | Youngmin</title>
          <link rel="icon" type="image/png" href={favicon} sizes="16x16" />
        </Helmet>
      </HelmetProvider>
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
