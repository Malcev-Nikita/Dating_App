import { StyleSheet } from 'react-native';


const front_style = StyleSheet.create({

    login_container: {
        position: 'absolute',
        bottom: -10,
        left: '21%',
        flexDirection: 'row',
        height: 50,
    },

    login_text: {
        fontSize: 16,
        letterSpacing: 1.2,
        height: 30,
    },

    login_button: {
        marginLeft: 10,
        height: 30,
    },

    login_button_text: {
        fontSize: 17,
        fontWeight: '700',
        color: '#C91E5E',
        letterSpacing: 1.2,
    }
    
});

export default front_style