import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Encode+Sans+Condensed:wght@300&display=swap');

body {
  margin: 0;
  font-family: "Encode Sans Semi Condensed", sans-serif;
  font-weight: 300;
  font-style: normal;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  padding: 20px 40px;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}

a {
  text-decoration: none;
  color: black;
}

.hidden {
  display: none;
}

* {
  box-sizing: border-box;
}

@media screen and (max-width: 900px) {
  body {
    padding: 5px 15px;
  }
}
`;
