import React from 'react';
import {
    FlatList,
    View,
    Text,
    Image,

} from 'react-native';


const Album =(props) => {

    const {datos} = props;

    console.log("Album: ", datos)

    return(

        <View>

            <Text> Album de Fotos</Text>
            <FlatList
                data={datos}
                renderItem= {
                    ({item}) => {
                        return(
                            <View>
                                <Text>
                                    {item.title}
                                </Text>
                                <Image
                                    source={
                                        {uri:item.url}
                                    }
                                    style={
                                        {width: 50, height: 50, resizeMode: 'cover',}
                                    }
                                />
                            </View>
                        )
                    }
                }
            />

        </View>
    )
}

export default Album;