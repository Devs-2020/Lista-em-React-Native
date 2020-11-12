import React from 'react';
import { View } from 'react-native';
import PeopleListFabricio from '../component/PeopleListFabricio'
import apiFabricio from './apiFabricio';


export default class PeoplePageFabricio extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      beers: [],
      pesquisa: 'https://api.punkapi.com/v2/beers'   
    }
  }
 
 async componentDidMount() {
  const response = await apiFabricio.get(this.state.pesquisa);
  this.setState({ beers: response.data });  
}
 
render(){
  return (      
      <View>                
          <PeopleListFabricio beers={this.state.beers}
         onPressItem={ (beers) => {
          this.props.navigation.navigate('Detalhes da Cerveja',
          {"beers": beers})
      }} /> 
      </View>
  );
}
}
 
