import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default class PeopleDetailsPage extends React.Component{
   
  constructor(props){
    super(props)
    this.state = {
        "filme": props.route.params.filme
    }
}

render(){
    return(
        <View style={style.container}>
            <Text>{this.state.people.name.last}</Text>
        </View>
    )
}
}
const style = StyleSheet.create({
container: {
backgroundColor: '#fff'
},
})