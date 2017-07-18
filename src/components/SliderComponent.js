import React, {Component} from 'react';
import {Text, View, Slider} from 'react-native';
import { StyleSheet } from 'react-native';

class SliderComponent extends React.Component{
      constructor(props) {
        super(props);
        this.state = {
          value: this.props.value,
          max: this.props.max,
          min: this.props.min,
          step: this.props.step
      }
  }

    static defaultProps = {
      value: 1,
      min: 0, 
      max: 5, 
      step:1
    }

    onValueChange(value) {
      this.setState({value:value});
    }

    onSlidingComplete(value) {
      console.log('Complete' +value);
    }

    render() {
      return (
        <View>
          <Text style={styles.Text} >{this.state.value} </Text>
          <Slider style={styles.red}
            maximumValue={this.state.max}
            minimumValue={this.state.min}
            step={this.state.step}
            value={this.state.value}
            onValueChange={(value) => this.onValueChange(value)} 
            onSlidingComplete={(value) => this.onSlidingComplete(value)}
          />
          </View>
      )
    }
  }

  const styles = {
    Text: {
      fontSize: 50,
      textAlign: 'center',
      color:'white'
    },
    red: {
      display: 'flex'
    }
  }




export default SliderComponent; 