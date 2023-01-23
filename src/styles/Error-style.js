import { StyleSheet, Dimensions } from 'react-native';


const error_style = StyleSheet.create({
    error_container: {
        width: Dimensions.get('screen').width,
        height: Dimensions.get('screen').height,
        backgroundColor: 'yellow',
        zIndex: 10,
    }
 
});

export default error_style