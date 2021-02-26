import React, {Component} from 'react';
import {View, Button} from 'react-native';
import RenderCount from './RenderCount'

class Counter extends Component {
  constructor(props) {
    console.log('Parent Constructor Initalized');
    super(props);
  }

  state = {
    counter: 0
  }

  componentDidMount() {
    console.log('Parent Component Mounted');
  }

  componentDidUpdate(prevState) {
    if(this.state.counter !== prevState.counter) {
      console.log('Parent State Updated');
    }
  }

  increment = () => {
    this.setState({
      counter: this.state.counter + 1,
    })
  }

  render() {
    console.log('Parent Rendered');
    return (
      <View>
        <Button 
          onPress = {this.increment}
          title = "Increase Count"
        />
        <RenderCount count={this.state.counter} />
      </View>
    );
  }
}

export default Counter;
