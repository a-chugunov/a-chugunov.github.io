import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const themeDark = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'dark'
            // primary: {
            //     light: '#c31e60',
            //     main: '#ff0067',
            //     dark: '#d00808',
            //     contrastText: '#ecc781'
            // },
            // secondary: {
            //     light: '#121212',
            //     main: '#0a2458',
            //     dark: '#ba000d',
            //     contrastText: '#ecc781'
            // }
        }
    })
);

export default themeDark;
