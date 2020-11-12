import React from 'react';
import { View, Text } from 'react-native';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import MovieIcon from '@material-ui/icons/Movie';
import FlightTakeoffIcon from '@material-ui/icons/FlightTakeoff';
import DriveEtaIcon from '@material-ui/icons/DriveEta';


export default class MenuNavegacao extends React.Component{
   
  render(){
    return (
        <View>
             <Tabs
          
          >
            <Tab label="Fabricio Bonfim" icon={<RestaurantIcon />}/>
            <Tab label="Yuri Brito" icon={<MovieIcon />}/>
            <Tab label="Jerferson Almeida"  icon={<DriveEtaIcon />} />
            
        
          </Tabs> 
        </View>
    )
  }
}