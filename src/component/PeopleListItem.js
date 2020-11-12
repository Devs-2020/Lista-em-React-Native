import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Avatar from '@material-ui/core/Avatar';


const PeopleListItem = props => {
    const {filme, onPressItemDetails} = props    
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(filme)
        }}>
        <View style={style.line}>           
            <Avatar img src={filme.show.image.medium}/>                  
            <Text style={style.linetext}>            
            {filme.show.name}           
            </Text>             
        </View>
        </TouchableOpacity>      
    )
}


const style = StyleSheet.create({
    line: {
        height: 70,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 40,
        backgroundColor: '#fff'
    },
    linedetalhes: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#fff',
    },
    linetext:{       
        fontFamily: "Time News Romam",
        flexDirection: 'row',     
        fontSize: '30px',
        paddingLeft: 20,
        flex: 7,
        backgroundColor: '#fff',
    },   
}
)
 
export default PeopleListItem