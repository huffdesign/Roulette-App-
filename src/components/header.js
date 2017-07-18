import React from 'react';
import { Text, View, Image } from 'react-native'; 

// component creation 

const Header = (props) => {
    const { textStyle, viewStyle } = styles; 


    return ( 
    <View style={viewStyle}>
    <Image source={require('./../img/lunch-roulette.png')}></Image>
    </View>
    );
};

const styles = {
    viewStyle: {
        backgroundColor:'#000000',
        justifyContent: 'center',
        alignItems: 'center',
        height: 60, 
        paddingTop: 15,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.2,
        elevation: 2, 
        position: 'relative'
    }
    //textStyle: {
      //  fontSize: 30,
        //color: 'white'
    //}
};

export default Header; 