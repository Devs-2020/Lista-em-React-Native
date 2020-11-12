import React from 'react';
import { View, Text } from 'react-native';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MovieIcon from '@material-ui/icons/Movie';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import RestaurantIcon from '@material-ui/icons/Restaurant';


export default class MenuNavegacao extends React.Component{
   
  render(){
    return (
        <View>
             <Tabs
          
          >
            <Tab label="Fabricio Almeida" icon={<RestaurantIcon />}/>
            <Tab label="Yuri Brito" icon={<MovieIcon />}/>
            <Tab label="Jerferson Bomfim"  icon={<FlightTakeoffIcon />} />
            
        
          </Tabs> 
        </View>
    )
  }
}