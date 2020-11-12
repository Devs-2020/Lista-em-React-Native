import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import Avatar from '@material-ui/core/Avatar';

const PeopleListItemJeferson = props => {
    const {carro, onPressItemDetails} = props    
    return (
        <TouchableOpacity onPress={() => {
            onPressItemDetails(carro)
        }}>
        <View style={style.line}>        
            <Avatar img src={carro.show.image.original}/>         
            <Text style={style.linetext}>            
            {carro.show.name}          
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
    },
    linedetalhes: {
        height: 60,
        borderBottomWidth: 1,
        borderBottomColor: '#bbb',
        alignItems: 'center',
        flexDirection: 'row'
    },
    linetext:{       
        fontFamily: "Time News Romam",
        flexDirection: 'row',     
        fontSize: '30px',
        paddingLeft: 20,
        flex: 7
    },   
}
)
 
export default PeopleListItemJeferson