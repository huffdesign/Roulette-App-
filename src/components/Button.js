import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = () => {
    const { buttonStyle, textStyle } = styles;

    return( 
        <TouchableOpacity style={buttonStyle}>
    <Text style={textStyle}>
        Click Me!!
        </Text>
    </TouchableOpacity>
    );
};


const styles = {
    textStyle: {
        alignSelf: 'center',
        color: 'white',
        fontWeight:'600',
        fontSize: 16,
        paddingTop: 10,
        paddingBottom: 10
    },
    buttonStyle: {
        //flex: 1, 
        alignSelf: 'stretch',
        backgroundColor: 'black',
        borderWidth: 1,
        borderRadius: 5,
        borderColor: '#007aff',
        marginLeft: 5,
        marginRight: 5
        
    }
}

export default Button; 