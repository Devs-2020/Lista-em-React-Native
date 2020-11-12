import * as React from 'react'
import { View, StyleSheet } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import PeoplePage from './pages/PeoplePage'
import PeopleDetailsPage from './pages/PeopleDetailsPage'
import PeoplePageJeferson from './pages/PeoplePageJeferson'
import PeopleDetailsPageJeferson from './pages/PeopleDetailsPageJeferson'
import { createStackNavigator } from '@react-navigation/stack'
import PeoplePageFabricio from './pages/PeoplePageFabricio'
import PeopleDetailsPageFabricio from './pages/PeopleDetailsPageFabricio'


const TelaDeSelecao = (props) => {
  const Stack = createStackNavigator();
   switch (props.type) {
    case 1:
  return (        
      <View style={styles.container}>            
      <NavigationContainer >
          <Stack.Navigator initialRouteName="PeoplePage">
            <Stack.Screen name="Lista de Filmes da Disney" component={PeoplePage} />
            <Stack.Screen name="Detalhes do Filme" component={PeopleDetailsPage} />
          </Stack.Navigator>
        </NavigationContainer>
      </View>   
  )
  case 2:
  return (
  <>
     <NavigationContainer >
          <Stack.Navigator initialRouteName="PeoplePageJeferson">
          <Stack.Screen name="Lista de Carros Chevrolet" component={PeoplePageJeferson} />
            <Stack.Screen name="Detalhes do Carro" component={PeopleDetailsPageJeferson} />
          </Stack.Navigator>
      </NavigationContainer>
  </>
  )
  case 3:
  return (
  <>
    <NavigationContainer >
          <Stack.Navigator initialRouteName="PeoplePageFabricio">
          <Stack.Screen name="Lista de Cervejas" component={PeoplePageFabricio} />
            <Stack.Screen name="Detalhes da Cerveja" component={PeopleDetailsPageFabricio} />
             </Stack.Navigator>
      </NavigationContainer>
  </>
  )
  
 }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',   
    
  },
  linetext:{       
    fontFamily: "Time News Romam",
    flexDirection: 'row',     
    fontSize: '30px',
    paddingLeft: 20,
    flex: 7,    
},   
});
export default TelaDeSelecao