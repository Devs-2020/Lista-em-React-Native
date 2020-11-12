import React from 'react'
import { StyleSheet, Text, View} from 'react-native';
export default class PeopleDetailsPage extends React.Component{
    

    constructor(props){
        super(props)
        this.state = {
            "filme": props.route.params.filme
        }
    }

    render(){
        return(                     
            <View style={style.line}>    
            <img src={this.state.filme.show.image.medium} />
            <h1> </h1>           
            <Text style={style.linetext}>
            <h1></h1>   
            Nome: {this.state.filme.show.name}                
            <h1></h1>
            Tipo: {this.state.filme.show.type}      
            <h1></h1>
            Idioma: {this.state.filme.show.language}           
           <h1></h1>
            Url filme: {this.state.filme.show.url}
            <h1></h1>
            Genero filme: {this.state.filme.show.genres}                     
            <h1></h1>
            ID: {this.state.filme.show.id}
            <h1></h1>
            Tempo de Execução: Aproximadamente {this.state.filme.show.runtime} minutos
            <h1></h1>            
            </Text>                 
            </View>
        )
    }
    
}
const style = StyleSheet.create({
  line: {
      height: 500,     
      alignItems: 'center',
      flexDirection: 'row',
      paddingLeft: 30,
      borderBottomWidth: 2,
    borderBottomColor: '#bbb',
    backgroundColor: '#fff',
      
  }, 
  linetext:{
      fontSize: '25px',      
      fontFamily: "Time News Romam",
      paddingLeft: 20,
      backgroundColor: '#fff',
      paddingLeft: 30,  
}, 
})

