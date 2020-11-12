import React from 'react';
import { View } from 'react-native';
import PeopleList from '../component/PeopleList'
import api from './api';


export default class PeoplePage extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      filmes: [],
      pesquisa: 'Disney'   
    }
  }
 
 async componentDidMount() {
  const response = await api.get(this.state.pesquisa);
  this.setState({ filmes: response.data });  
}
 
render(){
  return (      
      <View>                
          <PeopleList filmes={this.state.filmes}
         onPressItem={ (filme) => {
          this.props.navigation.navigate('Detalhes do Filme',
          {"filme": filme})
      }} /> 
      </View>
  );
}
}
 
