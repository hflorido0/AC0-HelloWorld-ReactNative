import { Text, View } from 'react-native';
import { HelloWorld } from "./src/styles/HelloWorld";
import Commons from './src/styles/Commons';
import HelloWorldModel from './src/model/HelloWorldModel';
import { useEffect, useState } from 'react';

export default function App() {
  const [holamundo, setHolaMundo] = useState();
  
  const [json, setJson] = useState(
    {
      "hola": "Hola json",
      "mundo": "Mundo json",
      "nombre": "JSON"
    }
  )

  useEffect(() => {
    setHolaMundo(json); //valores desde json
    //setHolaMundo(new HelloWorldModel()); //Valores por defecto
    //setHolaMundo(new HelloWorldModel("Hello", "World", "Héctor"));
  }, []);
  

  return (
    <View style={HelloWorld.container}>
      <View style={[Commons.filex1, Commons.mainColor]}>
        <Text>{holamundo?.hola}</Text>
      </View>
      <View style={[Commons.filex1, Commons.secondaryColor]}>
        <Text>{holamundo?.mundo}</Text>
      </View>
      { "JSON" === holamundo?.nombre && (
        <View style={[Commons.filex1, Commons.thirdColor]}>
          <Text>{holamundo?.nombre}</Text>
        </View>
      )}
    </View>
  );
}
