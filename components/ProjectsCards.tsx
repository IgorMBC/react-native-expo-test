import { useState } from "react";
import { FlatList, Modal, Pressable } from 'react-native';

import { Projeto } from "../app/(tabs)/index";

import { Text, View } from '@/components/Themed';

type ProjectsCardsProps = {
  projects: Projeto[];
}

export default function ProjectsCards({ projects }: ProjectsCardsProps) {
    const [selectedProject, setSelectedProject] = useState<Projeto | null>(null);
    const [modalVisible, setModalVisible] = useState(false);

    return(
      <View>
        <FlatList
          data={projects}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (
            <Pressable
              style={({ pressed }) => [
                {
                  backgroundColor: pressed ? "#ddd" : "#f2f2f2",
                  padding: 12,
                  borderRadius: 8,
                  marginBottom: 10,
                  shadowColor: "#000",
                  shadowOpacity: 0.1,
                  shadowOffset: { width: 0, height: 2 },
                  shadowRadius: 4,
                },
              ]}
              onPress={() => {
                setSelectedProject(item);
                setModalVisible(true);
              }}
            >
              <Text style={{ fontSize: 18, fontWeight: "bold" }}>{item.name}</Text>
              <Text>Orientador: {item.professor}</Text>
              <Text>Aluno: {item.students}</Text>
              <Text>Status: {item.status}</Text>
            </Pressable>
          )}
        />
        <Modal
          visible={modalVisible}
          transparent={true}
          animationType="slide"
          onRequestClose={() => setModalVisible(false)}
        >
          <View style={{
            flex: 1,
            justifyContent: "center",
            alignItems: "center",
            backgroundColor: "rgba(0,0,0,0.4)",
          }}>
            <View style={{
              backgroundColor: "white",
              borderRadius: 10,
              padding: 20,
              width: "85%",
            }}>
              {selectedProject && (
                <>
                  <Text style={{ fontSize: 20, fontWeight: "bold", marginBottom: 8 }}>
                    {selectedProject.name}
                  </Text>
                  <Text>Descrição: {selectedProject.description}</Text>
                  <Text>Professor: {selectedProject.professor}</Text>
                  <Text>Alunos: {selectedProject.students.join(", ")}</Text>
                  <Text>Status: {selectedProject.status}</Text>
                </>
              )}
              <Pressable
                style={{
                  marginTop: 20,
                  alignSelf: "center",
                  backgroundColor: "#2196F3",
                  paddingVertical: 8,
                  paddingHorizontal: 20,
                  borderRadius: 5,
                }}
                onPress={() => setModalVisible(false)}
              >
                <Text style={{ color: "white" }}>Fechar</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    )
};
