import { StyleSheet } from 'react-native';
import LinearGradient from 'react-native-linear-gradient'

const front_style = StyleSheet.create({
    button_container: { 
        flexDirection: 'row',
    },
    
    button: {
        colors:['red', 'yellow', 'green' ],
        width: 120,
        margin: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 10,
    }
});

export default front_style