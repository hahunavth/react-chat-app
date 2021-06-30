import styled, { ThemeProvider } from "styled-components";
import { colorScheme } from "../constants/theme";

// Define our button, but with the use of props.theme this time
const Button = styled.button`
  font-size: 1em;
  margin: 1em;
  padding: 0.25em 1em;
  border-radius: 3px;

  /* Color the border and text with theme.main */
  color: ${(props) => props.theme.primary};
  border: 2px solid ${(props) => props.theme.primary};
`;

// We are passing a default theme for Buttons that arent wrapped in the ThemeProvider
// Button.defaultProps = {
//   theme: {
//     main: "palevioletred",
//   },
// };

// Define what props.theme will look like
const theme = {
  main: "mediumseagreen",
};
export default function StyledBtn() {
  return (
    <div>
      <Button>Normal</Button>

      <ThemeProvider theme={colorScheme.light}>
        <Button>Themed</Button>
      </ThemeProvider>
    </div>
  );
}
