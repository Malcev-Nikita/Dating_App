import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const front_style = StyleSheet.create({

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