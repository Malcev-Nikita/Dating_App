import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const button_style = StyleSheet.create({

    total_black_button_container: { 
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end',
        marginBottom: 100,
    },

    total_black_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 200,
        height: 65,
        borderRadius: 25,
    },  

    total_black_button_image: {
        width: 30,
        height: 30,
    },

    total_black_button_text: {
        color: '#fff',
        fontSize: 22,
        fontWeight: '500',
        lineHeight: 30,
        marginRight: 30,
        letterSpacing: 1.2,
    },
});

export default button_style