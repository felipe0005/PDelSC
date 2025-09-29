import { useState } from 'react';
import { Button, Image, Modal, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function News(){
    const [modalVisible, setModalVisible] = useState(false);

    return(
        <ScrollView>
        <View>
        <Text style={{ color: 'white'}}>
            este es el componente text
        </Text>
        <TextInput placeholder='escribir aqui' style={{ color: 'white'}}></TextInput>
        <Image        source={{
            uri: 'https://reactnative.dev/docs/assets/p_cat2.png',
          }} style={{width: 200, height: 200}}/>
          </View>
          <Button title="Press me" onPress={() => setModalVisible(true)} />
          <Modal visible={modalVisible} transparent={true} animationType='slide'>
            <View style={styles.modal}>
            <Button title='Cerrar' onPress={() => setModalVisible(false)} />
          <Text> Modal abierto </Text>
            </View>
          </Modal>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
     modal: {
    flex: 1, justifyContent: "center", alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)"

     }
});