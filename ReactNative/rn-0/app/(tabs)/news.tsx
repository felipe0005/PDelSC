import { useState } from "react";
import {
    Button,
    Image,
    Modal,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
} from "react-native";

export default function News() {
  const [modalVisible, setModalVisible] = useState(false);

  return (
    <ScrollView style={styles.container}>
      <View style={styles.content}>
        {/* Texto */}
        <Text style={styles.title}>Este es el componente Text</Text>

        {/* Input */}
        <TextInput
          placeholder="Escribir aquí..."
          placeholderTextColor="#aaa"
          style={styles.input}
        />

        {/* Imagen */}
        <Image
          source={{ uri: "https://reactnative.dev/docs/assets/p_cat2.png" }}
          style={styles.image}
        />

        {/* Botón */}
        <View style={styles.buttonWrapper}>
          <Button title="Abrir Modal" onPress={() => setModalVisible(true)} />
        </View>
      </View>

      {/* Modal */}
      <Modal visible={modalVisible} transparent animationType="slide">
        <View style={styles.modalBackground}>
          <View style={styles.modalBox}>
            <Text style={styles.modalText}>📌 Modal abierto</Text>
            <Button title="Cerrar" onPress={() => setModalVisible(false)} />
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#1a1a1a",
    padding: 20,
  },
  content: {
    alignItems: "center",
    justifyContent: "center",
    gap: 15,
  },
  title: {
    color: "#fff",
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  input: {
    width: "100%",
    backgroundColor: "#2a2a2a",
    color: "#fff",
    padding: 10,
    borderRadius: 8,
    borderWidth: 1,
    borderColor: "#444",
  },
  image: {
    width: 200,
    height: 200,
    borderRadius: 12,
    marginVertical: 15,
    shadowColor: "#000",
    shadowOpacity: 0.3,
    shadowRadius: 5,
    shadowOffset: { width: 0, height: 2 },
  },
  buttonWrapper: {
    marginTop: 10,
    width: "100%",
  },
  modalBackground: {
    flex: 1,
    backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },
  modalBox: {
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 12,
    width: "80%",
    alignItems: "center",
    gap: 15,
  },
  modalText: {
    fontSize: 16,
    marginBottom: 10,
    fontWeight: "600",
  },
});
