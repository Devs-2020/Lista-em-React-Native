import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
export default class PeopleDetailsPageJeferson extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "carro": props.route.params.carro
        }
    }

    render(){
        return(
            <View style={style.line}>         
           
            <h1> </h1>           
            <Text style={style.linetext}>           
            <h1></h1>    
            Porte: {this.state.carro.show.porte}            
            <h1></h1>
            Geração: {this.state.carro.show.geracao}           
           <h1></h1>
            Ano: {this.state.carro.show.ano}
            <h1></h1>
            Lugares: {this.state.carro.show.lugares}                     
            <h1></h1>
            Combustível: {this.state.carro.show.combustivel}
            <h1></h1>
            Url Ficha Carro: {this.state.carro.show.url}
            <h1></h1>    
            <img src={this.state.carro.show.image.original} width="350" height="350" /> 
        
            </Text>  
            </View>
        )
    }
    
}
const style = StyleSheet.create({
  line: {
      height: 750,     
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 20,
      borderBottomWidth: 4,
    borderBottomColor: '#bbb',
    backgroundColor: '#f0f0f0',
    textAlign: "center" 
  },
  linedetalhes: {
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#bbb',
      alignItems: 'center',
      flexDirection: 'row'
  }, 
  linetext:{
      fontSize: '25px',      
      fontFamily: "Verdana",
      paddingLeft: 20,
  },   
}
)

