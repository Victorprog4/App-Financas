import { StyleSheet, Text, View, FlatList } from 'react-native';

import Header from '../components/Header';
import Balance from '../components/Balance';
import Movements from '../components/Movements'
import Actions from '../components/Actions';
const list = [
  {
    id: 1,
    label: 'Boleto conta de luz',
    value: '300,50',
    date: '17/02/2022',
    type: 0 //gastos
  },
  {
    id: 2,
    label: 'Pix clinte X',
    value: '2.500,00',
    date: '18/01/2022',
    type: 1 //saldo
  },
  {
    id: 3,
    label: 'Sálario',
    value: '5.000,00',
    date: '25/10/2022',
    type: 1 //saldo
  },
]

export default function Home() {
  return (
    <View style={styles.container}>
        <Header id="Nome" name="Vitor Hugo"/>

        <Balance saldo="9.250,00" gastos="-527,00"/>

        <Actions/>

        <Text style={styles.title}>Últimas movimentações</Text>

        <FlatList 
        style={styles.list}
        data={list}
        keyExtractor={ (item) => String(item.id)}
        showsVerticalScrollIndicator={false}
        renderItem={  ({item}) => <Movements data={item}/>}
        />
      
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  },

  title:{
    fontSize: 18,
    fontWeight: 'bold',
    margin: 14
  },

  list:{
    marginStart: 14,
    marginEnd: 14,

  },

});


 