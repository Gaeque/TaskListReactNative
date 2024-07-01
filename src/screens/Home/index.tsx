import React, { useState } from "react";
import { Text, TextInput, TouchableOpacity, View, FlatList } from "react-native";
import { styles } from "./style";
import { Tasks } from "../../components/Tasks";

interface Task {
  id: number;
  name: string;
}

export function Home() {

  const [tasks, setTasks] = useState<Task[]>([]);
  const [newTaskName, setNewTaskName] = useState("");

  let dataAtual = new Date();

  function formatDate(date: Date) {
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0'); 
    const year = date.getFullYear();
    return `${day}/${month}/${year}`;
  }

  function handleTaskAdd() {
    if (newTaskName.trim() === "") return;
    const existingTask = tasks.find(task => task.name === newTaskName.trim());
    if (existingTask) {
      alert("Já existe uma tarefa com este nome.");
      return;
    }
    const newTask: Task = {
      id: tasks.length + 1,
      name: newTaskName,
    };

    setTasks([...tasks, newTask]);
    setNewTaskName("");
  }

  function handleTaskRemove(id: number) {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Tarefas para hoje
      </Text>

      <Text style={styles.eventDate}>
      {formatDate(dataAtual)}

      </Text> 

      <View style={styles.form}>
        <TextInput 
          style={styles.input}
          placeholder="Adicionar uma nova tarefa"
          placeholderTextColor="#6B6B6B"
          value={newTaskName}
          onChangeText={text => setNewTaskName(text)}
        />
        <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
          <Text style={styles.buttonText}>
            +
          </Text>
        </TouchableOpacity>
      </View>

      {tasks.length === 0 ? (
        <Text style={styles.noTasksText}>Nenhuma tarefa cadastrada</Text>
      ) : (
        <FlatList
          data={tasks}
          keyExtractor={item => item.id.toString()}
          renderItem={({ item }) => (
            <Tasks
              TaskName={item.name}
              TaskRemove={() => handleTaskRemove(item.id)}
            />
          )}
          showsVerticalScrollIndicator={false}
        />
      )}
    </View>
  );
}
