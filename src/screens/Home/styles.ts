import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#131016',
    padding: 24,
    // alignItems: 'center',
    // justifyContent: "center",
    gap: 10,
  },
  eventName: {
    color: 'white',
    fontWeight: 'bold',
    marginTop: 70,
    fontSize: 24,
  },
  eventDate: {
    color: '#6b6b6b',
  },
  input: {
    flex: 1,
    height: 56,
    width: 200,
    backgroundColor: '#1f1e25',
    borderRadius: 6,
    color: '#fff',
    padding: 16,
    fontSize: 16,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 24,
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: '#31cf67',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    marginTop: 36,
    marginBottom: 42,
    width: '100%',
    flexDirection: 'row',
    gap: 10,
  },
  listEmptyText: {
    color: '#FFF',
  },
  textError: {
    color: 'red',
  },
})
