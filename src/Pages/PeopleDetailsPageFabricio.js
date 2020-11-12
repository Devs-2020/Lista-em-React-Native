import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
import { blue } from '@material-ui/core/colors';
export default class PeopleDetailsPage extends React.Component{

    constructor(props){
        super(props)
        this.state = {
            "beers": props.route.params.beers
        }
    }

    render(){
        return(
            <View style={style.line}>         
            
            <h1> </h1>           
            <Text style={style.linetext}>           
            <h1> </h1>
            Nome: {this.state.beers.name}  
            <h1></h1>    
            Slogan: {this.state.beers.tagline}            
            <h1></h1>
            Fermentada pela primeira vez em: {this.state.beers.first_brewed}           
           <h1></h1>
            Descrição: {this.state.beers.description}
            <h1></h1>
            Beber acompanhado por: {this.state.beers.food_pairing}                     
            <h1></h1>
            Contribuição de: {this.state.beers.contributed_by}
            <h1></h1>
            
            <h1></h1>       
            </Text>  
            <img src={this.state.beers.image_url } width="150" height="450" />
            </View>
        )
    }
    
}
const style = StyleSheet.create({
  line: {
      height: 600,     
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 20,
      paddingRight: 10,
      borderColor: '#8194FB',
      borderWidth: 5,
      backgroundColor: '#324EEC',
      textAlign: "justify"
  },
  linedetalhes: {
      height: 60,
      borderBottomWidth: 1,
      borderBottomColor: '#bbb',
      alignItems: 'center',
      flexDirection: 'row'
  }, 
  linetext:{
      fontSize: '22px',      
      fontFamily: "Arial",
      paddingLeft: 20,
      color: '#fff',
      paddingRight: 20      
  },   
}
)

