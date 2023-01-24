import { StyleSheet, Dimensions } from 'react-native';


const error_style = StyleSheet.create({
    error_opacity: {
        position: 'absolute',
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#00000080',
        zIndex: 10,
    },

    error_container: {
        // flex: 1,
        width: Dimensions.get('screen').width / 100 * 90,
        height: 150,
        backgroundColor: '#fdfeee',
        borderWidth: 3,
        borderColor: 'red',
        borderRadius: 8,
    },

    error_close: {
        position: 'absolute',
        top: 10,
        right: 10,
    },

    error_text: {

    },
 
});

export default error_style