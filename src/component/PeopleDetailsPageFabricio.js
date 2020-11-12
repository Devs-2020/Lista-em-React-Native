import React from 'react';
import { View, Text } from 'react-native';

export default class PeopleDetailsPage extends React.Component{
   
  constructor(props){
    super(props)
    this.state = {
        "beers": props.route.params.beers
    }
}

render(){
    return(
        <View>
            <Text>{this.state.people.name.last}</Text>
        </View>
    )
}
}