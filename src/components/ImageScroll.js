import React, {Component} from 'react';
import { ScrollView, Image, Text, View, TouchableHighlight, Button } from 'react-native';
 

class ImageScroll extends Component { 
    render () {
        return (
            <View>
                <Text>Pick a Type of Food</Text>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} >
    <Image source={require('./../img/strawberry_line.png')}></Image>
     <Image source={require('./../img/cheese_lunch_line.png')}></Image>
      <Image source={require('./../img/orange_jam_line.png')}></Image>
       <Image source={require('./../img/pancakes_line.png')}></Image>
        <Image source={require('./../img/pewter_mug_line.png')}></Image>
         <Image source={require('./../img/pancakes_line.png')}></Image>
        
     

    </ScrollView>
   </View>
        )
    }
};


export default ImageScroll; 
