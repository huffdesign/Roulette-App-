import React from 'react'; 
import { View, Slider, } from 'react-native'; 
import { Provider } from 'react-redux';
import { createStore } from 'redux'; 
import reducers from './reducers';
import { Header } from './components/common';
import  SliderComponent  from './components/SliderComponent';
import  ImageScroll  from './components/ImageScroll';
import  Button  from './components/Button';
const App = () => {
    const {viewStyle} = styles;
    return (
        
        <Provider store={createStore(reducers)}>
            
        <View style={viewStyle}>
                <Header headerText="Lunch Roulette" />
        <ImageScroll/>
           
        <SliderComponent />

        <SliderComponent/>

        <SliderComponent/>
        
       
        <Button /> 
       

            </View>
        </Provider>
    );
}; 

const styles = {
    viewStyle: {
        backgroundColor: 'black',
        height: '100%',
    }
};

export default App; 
