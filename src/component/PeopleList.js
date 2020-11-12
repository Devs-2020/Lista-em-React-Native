import React from 'react';
import {View, StyleSheet} from 'react-native'
import PeopleListItem from './PeopleListItem'

const PeopleList = props => {
    const {filmes, onPressItem} = props
    const items = filmes.map(filme => {
          return (
            <PeopleListItem           
                filme={filme}
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
        backgroundColor: '#fff'
    },
}
)
 
export default PeopleList