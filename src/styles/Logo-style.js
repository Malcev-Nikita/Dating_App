import { StyleSheet } from 'react-native';


const logo_style = StyleSheet.create({

    logo_container: {
        marginTop: 40,
        flexDirection: 'row',
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
        fontFamily: 'nunito-semibold',
        fontSize: 28,
        lineHeight: 45,
        marginLeft: 10,
        letterSpacing: 5,
        color: '#fff',
    },  

});

export default logo_style