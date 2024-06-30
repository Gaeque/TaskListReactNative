import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
  },
  eventName: {
    color: '#FFF',
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 48,
    textAlign: "center",
    marginBottom: 20
  },
  eventDate: {
    color: '#6B6B6B',
    fontSize: 16,
    textAlign: "center",
    marginBottom: 20

  },
  input: {
    flex: 1,
    height: 56,
    backgroundColor: '#1F1E25',
    borderRadius: 5,
    color: '#FFFF',
    padding: 16,
    fontSize: 16,
    marginRight: 12
  },
  buttonText: {
    color: '#000',
    fontSize: 24
  },
  button: {
    width: 54,
    height: 54,
    borderRadius: 6,
    backgroundColor: '#00ffff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    width: '100%',
    flexDirection: 'row',
    marginBottom: 42
  }
})