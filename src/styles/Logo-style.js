import { StyleSheet } from 'react-native';

const logo_style = StyleSheet.create({
    logo_container: {
        marginTop: 50,
        flexDirection: 'row',
        alignItems: 'flex-start',
        marginLeft: 20
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