import React from 'react';
import { View,
         Text,
         StyleSheet,
         TouchableOpacity,
         ScrollView
} from 'react-native';

import { AntDesign } from '@expo/vector-icons'

export default function Actions() {
 return (
    <ScrollView style={style.container} horizontal={true} showsHorizontalScrollIndicator={false}>
     <TouchableOpacity style={style.actionButton}>
        <View style={style.areaButton}>
       <AntDesign name="addfolder" size={26} color="#000"/>
        </View>
        <Text style={style.labelButton}>Entradas</Text>
     </TouchableOpacity>

     <TouchableOpacity style={style.actionButton}>
        <View style={style.areaButton}>
       <AntDesign name="tagso" size={26} color="#000"/>
        </View>
        <Text style={style.labelButton}>Compras</Text>
     </TouchableOpacity>

     <TouchableOpacity style={style.actionButton}>
        <View style={style.areaButton}>
       <AntDesign name="creditcard" size={26} color="#000"/>
        </View>
        <Text style={style.labelButton}>Carteira</Text>
     </TouchableOpacity>

     <TouchableOpacity style={style.actionButton}>
        <View style={style.areaButton}>
       <AntDesign name="barcode" size={26} color="#000"/>
        </View>
        <Text style={style.labelButton}>Boletos</Text>
     </TouchableOpacity>

     <TouchableOpacity style={style.actionButton}>
        <View style={style.areaButton}>
       <AntDesign name="setting" size={26} color="#000"/>
        </View>
        <Text style={style.labelButton}>Conta</Text>
     </TouchableOpacity>

    </ScrollView>
   
  );
}

const style = StyleSheet.create({
    container:{
        maxHeight: 84,
        marginBottom: 14,
        marginTop:18,
        paddingEnd: 14,
        paddingStart: 14,
    },

    actionButton:{
        alignItems: 'center',
        marginRight: 32,
    },

    areaButton:{
        backgroundColor: '#ecf0f1',
        height: 60,
        width: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
    },
    labelButton:{
        marginTop: 4,
        textAlign: 'center',
        fontWeight: 'bold',
    }
})