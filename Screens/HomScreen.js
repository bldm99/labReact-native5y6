import react from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native-web";
import { useNavigation } from "@react-navigation/native";

import Home from "../componentes/Home";


const HomScreen = (props) => {
    const navigation = useNavigation()

    return (
        <View>
            <View style={{ fontSize: 30, textAlign: 'center'}}>
                <Home></Home>
                <TouchableOpacity
                    onPress={() => navigation.navigate('Productos')}
                    style={{
                        backgroundColor: 'purple',
                        padding: 10,
                        marginTop: '2%',
                        width: '50%',
                        alignSelf: 'center',
                        borderRadius: 10,
                    }}
                >
                    <Text
                        style={{
                            fontSize: 15,
                            textAlign: 'center',
                            color: 'white'
                        }}
                    >
                        Ver mas peliculas
                    </Text>

                </TouchableOpacity>

            </View>

        </View>


    );
}
export default HomScreen