import { StyleSheet, Dimensions } from 'react-native';


const button_style = StyleSheet.create({

    double_button_container: { 
        flexDirection: 'row',
        position: 'absolute',
        width: (Dimensions.get('screen').width),
        justifyContent: 'center',
        bottom: 70,
    },

    double_button: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 200,
        height: 65,
        borderRadius: 25,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24, 
        zIndex: 99
    },  

    double_button_small: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#232323',
        width: 65,
        height: 65,
        borderRadius: 25,
        margin: 5,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 12,
        },
        shadowOpacity: 0.58,
        shadowRadius: 16.00,
        elevation: 24, 
        zIndex: 99
    }, 

    double_button_image: {
        width: 35,
        height: 35,
    },

    double_button_text: {
        color: '#fff',
        fontSize: 20,
        fontWeight: '500',
        lineHeight: 30,
        marginRight: 10,
        letterSpacing: 1.2,
        fontFamily: 'nunito-semibold',
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