import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./styles";

type Props = {
  TaskName: string;
  TaskRemove: () => void;
}

export function Tasks({TaskName, TaskRemove} : Props) {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>
         {TaskName}
         </Text>
      <TouchableOpacity style={styles.button} onPress={TaskRemove}>
        <Text style={styles.buttonText}>
          -
        </Text>
      </TouchableOpacity>
    </View>
  )
};