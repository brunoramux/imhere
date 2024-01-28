import { Text, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { useContext } from 'react'
import { ParticipantsContext } from '../../contexts/ParticipantsContext'

interface ParticipantProps {
  id: number
  name: string
}

export function Participant(props: ParticipantProps) {
  const { deleteParticipant } = useContext(ParticipantsContext)

  function handleDeleteParticipan() {
    deleteParticipant(props.id)
  }
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{props.name}</Text>
      <TouchableOpacity style={styles.button} onPress={handleDeleteParticipan}>
        <Text style={styles.buttonText}>-</Text>
      </TouchableOpacity>
    </View>
  )
}
