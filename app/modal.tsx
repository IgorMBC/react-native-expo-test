import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Pressable, Text, View } from 'react-native';
import { useState } from "react";

export default function ModalScreen({ navigation }: any) {
    const [selectedFilter, setSelectedFilter] = useState<string | null>(null);

    const filters = [
      { id: "A_FAZER", label: "A Fazer" },
      { id: "EM_ANDAMENTO", label: "Em Andamento" },
      { id: "CONCLUIDO", label: "Concluído" },
    ];
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filtrar Projetos</Text>
      <View style={styles.separator} />

      {filters.map((f) => (
        <Pressable
          key={f.id}
          style={[
            styles.filterButton,
            selectedFilter === f.id && { backgroundColor: "#2196F3" },
          ]}
          onPress={() => setSelectedFilter(f.id)}
        >
          <Text
            style={{
              color: selectedFilter === f.id ? "#fff" : "#000",
              fontWeight: "500",
            }}
          >
            {f.label}
          </Text>
        </Pressable>
      ))}

      <Pressable
        style={styles.applyButton}
        onPress={() => {
          navigation.navigate("TelaProjetos", { filter: selectedFilter });
        }}
      >
        <Text style={{ color: "#fff" }}>Aplicar Filtro</Text>
      </Pressable>

      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 20,
  },
  separator: {
    marginVertical: 10,
    height: 1,
    width: "80%",
    backgroundColor: "#ccc",
  },
  filterButton: {
    padding: 10,
    marginVertical: 5,
    width: "70%",
    borderRadius: 8,
    backgroundColor: "#f2f2f2",
    alignItems: "center",
  },
  applyButton: {
    marginTop: 20,
    backgroundColor: "#2196F3",
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
});
