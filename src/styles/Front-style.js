import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const front_style = StyleSheet.create({
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

    button_container: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 100,
    },

    button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 200,
        height: 65,
        borderRadius: 25,
    },  

    button_image: {
        width: 30,
        height: 30,
    },

    button_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
        lineHeight: 30,
        marginRight: 30,
        letterSpacing: 1.2,
    },

    login_container: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        height: 50,
    },

    login_text: {
        fontSize: 16,
        letterSpacing: 1.2,
    },

    login_button: {
        marginLeft: 10,
    },

    login_button_text: {
        fontSize: 17,
        fontWeight: '700',
        color: '#C91E5E',
        letterSpacing: 1.2,
    }
});

export default front_style