import { createTheme } from '@mui/material/styles';
  
const theme = createTheme({
    palette: {
        primary: {
            main: "#8d703b",
            light: "#f6f2ea",
            dark: "#7b6233",
        },
        secondary: {
            main: "rgb(128, 128, 128)",
            light: "#dfdfdf",
            dark: "#4d4d4d",
        },
    }
});

export default theme;