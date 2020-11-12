import { StyleSheet, view } from 'react-native'
import React, {useState} from "react"
import TelaDeSelecao from './src/TelaDeSelecao'
import MovieIcon from '@material-ui/icons/Movie';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import DriveEtaIcon from '@material-ui/icons/DriveEta';
import LocalBarIcon from '@material-ui/icons/LocalBar';

const App = () => {
  const [type, setType] = useState(1)
 return (
  <>  
   <Tabs  centered>
            <Tab label="Yuri Brito" onClick={() => setType(1)} icon={<MovieIcon />}/>
            <Tab label="Jeferson Almeida" onClick={() => setType(2)} icon={<DriveEtaIcon/>}   />            
            <Tab label="Fabricio Bomfim" onClick={() => setType(3)} icon={<LocalBarIcon/>} />
      </Tabs>  
  <TelaDeSelecao type={type}/>
 </>
 )
}
export default App;