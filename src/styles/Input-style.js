import { StyleSheet } from 'react-native';


const input_style = StyleSheet.create({
    
    input_global_container: {
      flex: 1,
      justifyContent: 'flex-end',
      marginBottom: -100,
    },

    input_container: {
        justifyContent:'center',
        width:'80%',
        marginBottom: '5%',
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
    },

    password_container: {
        position: 'absolute',
        top: 27,
        right: 20,
    },

    password_icon: {
        width: 35,
        height: 35,
    }

});

export default input_style