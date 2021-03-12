import { createMuiTheme, responsiveFontSizes } from '@material-ui/core/styles';

const themeLight = responsiveFontSizes(
    createMuiTheme({
        palette: {
            type: 'light'
            // primary: {
            //     light: '#757ce8',
            //     main: '#3f50b5',
            //     dark: '#002884',
            //     contrastText: '#fff'
            // },
            // secondary: {
            //     light: '#ff7961',
            //     main: '#f44336',
            //     dark: '#ba000d',
            //     contrastText: '#000'
            // }
        }
    })
);

export default themeLight;
