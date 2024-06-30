import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { styles } from "./style";
import { Tasks } from "../../components/Tasks";

export function Home() {

  let dataAtual = new Date();

  function handleTaskAdd() {
    
  }

  function handleTaskRemove(name: string) {
     
  }

  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>
        Tarefas para hoje
      </Text>

      <Text style={styles.eventDate}>
      {dataAtual.getDate()}/{dataAtual.getMonth() + 1}/{dataAtual.getFullYear()}
      </Text>

      <View  style={styles.form}>
      <TextInput 
        style={styles.input}
        placeholder="Adicionar uma nova tarefa"
        placeholderTextColor="#6B6B6B"
      />
      <TouchableOpacity style={styles.button} onPress={handleTaskAdd}>
        <Text style={styles.buttonText}>
          +
        </Text>
      </TouchableOpacity>
      </View>
 
      <Tasks TaskName=" " TaskRemove={() => handleTaskRemove("")} />
      

    </View>
    
  )
}