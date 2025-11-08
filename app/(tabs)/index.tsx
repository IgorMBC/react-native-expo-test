import { collection, getDocs, Timestamp, query, orderBy } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

import { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';

import ProjectsCards from "@/components/ProjectsCards";
import { View } from '@/components/Themed';
import { StatusProjeto } from "../../src/types/status";

export interface Projeto {
  id: string;
  name: string;
  description: string;
  professor: string;
  status: StatusProjeto;
  students: string[];
  createdAt: Timestamp;
};

//Funçaõ para carregar documentos de uma coleção
export default function TelaProjetos() {
  const [projects, setProjects] = useState<Projeto[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const q = query(collection(db, "projects"), orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(collection(db, "projects"));
        const list: Projeto[] = [];


        querySnapshot.forEach( function(doc) {
          list.push({ id: doc.id, ...doc.data() } as Projeto);
          }
        );
        
        setProjects(list);

      } catch (error) {
        console.error("Erro ao buscar projetos", error);
      }
    };
    
    loadProjects(); 
  }, []);

  return (
    <View style={styles.container}>
      <ProjectsCards projects={projects} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});