import styled, { DefaultTheme, css } from "styled-components";

export const flexCenter = css`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Container = styled.div`
  width: 100%;
  padding: 0 4.2rem;
  box-sizing: border-box;
  max-width: 144rem;
`;

export const darkTheme: DefaultTheme = {
  color: {
    black: "#000000",
    blue: "#3EFFFF",
    red: "#FF5E5E",
    white: "#FFFFFF",
  },
};
export const lightTheme: DefaultTheme = {
  color: {
    black: "#FFFFFF",
    blue: "#6400ff",
    red: "#00ff50",
    white: "#000000",
  },
};

const customMediaQuery = (maxWidth: number): string =>
  `@media (max-width: ${maxWidth}px)`;
export const media = {
  custom: customMediaQuery,
  tablet: customMediaQuery(1234),
};
