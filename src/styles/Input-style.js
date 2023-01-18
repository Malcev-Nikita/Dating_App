import { StyleSheet } from 'react-native';

const input_style = StyleSheet.create({
    input_global_container: {
      flex: 1,
      justifyContent: 'center',
    },

    input_container: {
        justifyContent:'center',
        width:'80%',
        marginBottom: '3%',
        marginLeft: '10%',
        marginRight: '10%',
    },

    input: {
        height: 50,
        borderWidth: 2,
        borderColor: '#232323',
        borderRadius: 8,
        color: '#232323',
        paddingLeft: 13,

    },
    
    input_text: {
        justifyContent: 'flex-start',
    }

});

export default input_style