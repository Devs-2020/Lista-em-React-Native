import React from 'react';
import { View } from 'react-native';
import PeopleListJeferson from '../component/PeopleListJeferson'
import apiJeferson from './apiJeferson';


export default class PeoplePageJeferson extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      carros: [],
      pesquisa: 'http://demo0625421.mockable.io/jeferson'   
    }
  }
 
 async componentDidMount() {
  const response = await apiJeferson.get(this.state.pesquisa);
  this.setState({ carros: response.data });  
}
 
render(){
  return (      
      <View>                
          <PeopleListJeferson carros={this.state.carros}
         onPressItem={ (carro) => {
          this.props.navigation.navigate('Detalhes do Carro',
          {"carro": carro})
      }} /> 
      </View>
  );
}
}
 
