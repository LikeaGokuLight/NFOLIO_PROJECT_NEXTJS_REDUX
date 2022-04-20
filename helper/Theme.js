import {createTheme} from "@mui/material/styles";

const mainPurple = `#ff2dbc`;
const mainBlack = `#15141d`;
const mainBlackLight = `#313438`;
const mainBlackDark = `#222328`;

const Theme = createTheme({

  palette: {
    common: {
      purple: `${mainPurple}`
    },
    primary: {
      main: `${mainPurple}`
    },
    secondary: {
      light: `${mainBlackLight}`,
      main: `${mainBlack}`,
      dark: `${mainBlackDark}`
    }
  },

  components: {

    MuiAppBar: {
      styleOverrides: {
        root: {

        },
      }
    },

    MuiPaginationItem: {
      styleOverrides: {
        root: {
          color:'white',
          borderColor:'#313438'
        },
      }
    },

    MuiTablePagination: {
      styleOverrides: {
        root: {
          color:'white',
          borderColor:'#313438'
        },

        input: {

          svg: {
            color:'white',
          }
        }
      }
    }

  }



});

export default Theme;