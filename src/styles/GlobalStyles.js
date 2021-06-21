// for addin global styles: createGlobalStyle
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
/* @import url("https://fonts.googleapis.com/css?family=Oswald:300;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Merriweather:wght@300;400;700&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Raleway:wght@100;200;300;400;500;600;700;800;900&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Fugaz+One&display=swap"); */

body {
  font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
    Ubuntu, "Helvetica Neue", sans-serif;
}
 

.footer {
  margin-top: 100px;
  height: 70vh;
  background-color: #285ede;

  display: flex;
  align-items: flex-end;
  padding: 100px;

  color: white;
  font-size: 3rem;
  font-weight: 600;
}

`;

export default GlobalStyle;
