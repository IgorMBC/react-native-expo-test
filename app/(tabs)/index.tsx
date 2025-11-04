import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firebaseConfig";

import { useEffect, useState } from "react";
import { StyleSheet } from 'react-native';

import ProjectsCards from "@/components/ProjectsCards";
import { View } from '@/components/Themed';

export interface Projeto {
  id: string;
  name: string;
  description: string;
  professor: string;
  status: string;
  students: string[];
};

//Funçaõ para carregar documentos de uma coleção
export default function TelaProjetos() {
  const [projects, setProjects] = useState<Projeto[]>([]);

  useEffect(() => {
    const loadProjects = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "projects"));
        const list: any[] = [];


        querySnapshot.forEach( function(doc) {
          list.push({ id: doc.id, ...doc.data() });
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
    alignItems: 'center',
    justifyContent: 'center',
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