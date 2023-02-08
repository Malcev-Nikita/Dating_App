import { StyleSheet } from 'react-native';


const logo_style = StyleSheet.create({

    logo_container: {
        marginTop: 40,
        flexDirection: 'column',
        alignItems: 'flex-start',
        marginLeft: 20
    },  

    logo_text_container: {
        flexDirection: 'row',
    },
    
    logo: {
        width: 50,
        height: 50,
    },

    logo_text: {
        fontSize: 26,
        fontWeight: '600',
        lineHeight: 45,
        marginLeft: 10,
        letterSpacing: 1.2,
    },  

});

export default logo_style