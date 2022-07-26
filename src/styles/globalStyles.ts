import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyles = createGlobalStyle`
 ${reset}
 * {
   box-sizing:border-box;
   outline:none;
   border:none;
 }
 #root, html, body {
   height: 100%;
 }
 ul{
  list-style: none;
 }
 a {
  text-decoration: none;
 }
 button, svg, input, select {
  cursor: pointer;
 }
`;

export default GlobalStyles;
