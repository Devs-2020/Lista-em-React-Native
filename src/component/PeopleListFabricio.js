import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItemFabricio from './PeopleListItemFabricio'

const PeopleListFabricio = props => {
    const {beers, onPressItem} = props
    const items = beers.map(beers => {
          return (
            <PeopleListItemFabricio           
                beers={beers}
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
        backgroundColor: '#ADB9FE',
        borderColor: '#324EEC'
    },
}
)
 
export default PeopleListFabricio