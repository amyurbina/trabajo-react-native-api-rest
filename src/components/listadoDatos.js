import React from 'react';
import {
    FlatList,
    View,
    Text,
    StyleSheet,

} from 'react-native';


const listadoDatos =(props) => {

    const {datos} = props;

   

    return(

        <View>

            <Text style={{fontSize:30,textAlign:'center'}}> Listado de Datos </Text>
            <FlatList
                data={datos}
                renderItem= {
                    ({item}) => {
                        return(
                            <View style={{padding:10,backgroundColor:'green'}}>
                                <Text style={{fontSize:20,backgroundColor:'white',fontWeight: "bold"}}> Titulo:  {item.title} </Text>
                                <Text style={{fontSize:15,backgroundColor:'white'}}>  Descripcion:  {item.body}</Text>
                            </View>
                        )
                    }
                }
            />

        </View>
    )
}




export default listadoDatos;