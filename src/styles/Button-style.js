import { StyleSheet, Dimensions } from 'react-native';


const button_style = StyleSheet.create({

    total_black_button_container: { 
        flexDirection: 'row',
        position: 'absolute',
        width: (Dimensions.get('screen').width),
        justifyContent: 'center',
        bottom: 70,
    },

    total_black_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 200,
        height: 65,
        borderRadius: 25,
        margin: 5,
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

    total_grey_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#eff0f2',
        width: 65,
        height: 65,
        borderRadius: 25,
        margin: 5,
    },  
});

export default button_style