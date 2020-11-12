import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Avatar from '@material-ui/core/Avatar';

const PeopleListItemFabricio = props => {
    const {beers, onPressItemDetails} = props    
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(beers)
        }}>
        <View style={style.line}>        
            <Avatar img src={beers.image_url}/>         
            <Text style={style.linetext}>            
            {beers.name}           
            </Text>             
        </View>
        </TouchableOpacity>      
    )
}


const style = StyleSheet.create({
    line: {
        height: 50,
        borderBottomWidth: 1,
        borderBottomColor: '#324EEC',
        alignItems: 'center',
        flexDirection: 'row',
        paddingLeft: 40,
    },
    linedetalhes: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#324EEC',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext:{       
        fontFamily: "Arial",
        flexDirection: 'row',     
        fontSize: '30px',
        paddingLeft: 20,
        flex: 7
    },   
}
)
 
export default PeopleListItemFabricio