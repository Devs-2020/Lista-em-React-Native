import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItemJeferson from './PeopleListItemJeferson'

const PeopleListJeferson = props => {
    const {carros, onPressItem} = props
    const items = carros.map(carro => {
          return (
            <PeopleListItemJeferson           
                carro={carro}
                    onPressItemDetails={onPressItem}/>
            )}
      )
    return (
        <View style={style.container}>
            {items}
        </View>
    )
}
 
const style = StyleSheet.create({
    container: {
        backgroundColor: '#f0f0f0'
    },
}
)
 
export default PeopleListJeferson