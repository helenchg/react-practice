import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
body{
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};
    font-family: "Trebuchet MS", "Lucida Sans Unicode", "Lucida Grande",
    "Lucida Sans", Arial, sans-serif;
    transition: all 0.50s linear;
    box-sizing: border-box;
  margin: 20;
  padding: 20;

}`;
