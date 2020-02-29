import { createMuiTheme } from '@material-ui/core/styles';
//import Theme from '../Resources/Theme';

const defaultTheme = createMuiTheme();

const onTablet = defaultTheme.breakpoints.only('sm');
const onMobile = defaultTheme.breakpoints.only('xs');

const MuiTheme = createMuiTheme({
    palette: {
        primary: {
            main: "#ddd",
            //contrastText: "red"
        },
       secondary: {
            main: "#666"
       },
        error: {
            main: "#333"
        },
        text: {
            primary: "#654321",
            secondary: "#28da18"
        }
    },
    typography: {
        fontFamily: [
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
            '"Apple Color Emoji"',
            '"Segoe UI Emoji"',
            '"Segoe UI Symbol"',
        ].join(','),
        h1: {
            fontSize: 56,
            [onTablet]: { fontSize: 36 },
            //fontWeight: Theme.FontWeight.Bold
        },
        h2: {
            fontSize: 45,
            lineHeight: 1.2,
            [onTablet]: { fontSize: 36 },
            [onMobile]: { fontSize: 32 }
        },
        h3: {
            fontSize: 36
        },
        h4: {
            fontSize: 24,
            lineHeight: "12px",
            fontWeight: "bold",
            margin: "8px 0px",
            textAlign:"left",
            textTransform:"capitalize"
        },
        h5: {
            fontSize: 28,
            fontWeight: 400,
            textAlign:"left",
            padding: "8px",
            textTransform: "capitalize"
        },
        h6: {
            fontSize: 18,
            padding: "8px 0px",
            textTransform:"capitalize"
        },
        subtitle1: {
            fontSize: 16,
            textTransform: 'capitalize',
            marginTop:4,
            color:'#222'
        },
        subtitle2: {
            fontSize: 14,
            color:"#909090",
            lineHeight: '20px',
            padding: "0 4px",
            fontWeight: 'normal'
        },
        subtitle3:{
            fontSize: 12,
            textAlign:"left",
            fontWeight: 'bold',
            margin:"4px 0px"
        },
        body1: {
            fontSize: 16,
            [defaultTheme.breakpoints.down('xs')]: {
                fontSize: 14
            },
        },
        body2: {
            fontSize: 14,
        },
        caption: {
            fontSize: 14
        },
        overline: {
            fontSize: 12
        },
        textTransformCapitalize:{
            textTransform: "capitalize"
        }
    },
    overrides: {

        MuiTypography: {
        },

        MuiButton: {
            root: {
                background: "#654321"
            },
            outlined: {

            },
            contained: {

            },
            disabled: {

            },
            text: {

            },

        },
        MuiDivider: {
            root: {
                margin: '16px 0px'
            }
        },
        MuiIcon: {
            fontSizeSmall: { fontSize: 16 }
        },
        MuiInput: {

        },
        MuiInputBase: {
            input: {

            },
        },
        MuiInputLabel: {
            animated: {

            }
        },
        MuiDialog: {
            paperWidthSm: {
                maxWidth: 'unset'
            },
            container: {

            }
        },
        MuiAppBar: {
            root: {
            }
        },
        MuiChip: {
            root: {

            },
            label: {
            },
        },
        MuiFab: {
            sizeSmall: {
                height: 36,
                width: 36
            }
        },
        MuiPaper: {
            root: { padding: '5px 10px' }
        }
    }
});

export default MuiTheme;