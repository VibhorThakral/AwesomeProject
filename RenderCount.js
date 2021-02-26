import React, {Component} from 'react';
import {View, Text} from 'react-native';

class RenderCount extends Component {
  constructor(props) {
    console.log('Child Constructor Initialised');
    super(props);
  }

  componentDidMount() {
    console.log('Child Component Mounted');
  }

  componentDidUpdate(prevProps) {
    if(this.props.count !== prevProps.count) {
      console.log('Parent passed new props to child component');
    }
  }

  render() {
    console.log('Child Rendered');
    return (
      <View>
        <Text>Counter: {this.props.count}</Text>
      </View>
    )
  }
}

export default RenderCount;