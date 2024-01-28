import { Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ParticipantsContext } from '../../contexts/ParticipantsContext'
import { Participant } from '../../components/Participant'

const newParticipantFormSchema = z.object({
  id: z.number(),
  name: z.string(),
})

type newParticipantFormInputs = z.infer<typeof newParticipantFormSchema>

export function Home() {
  const { createParticipant, participants } = useContext(ParticipantsContext)

  const { handleSubmit, setValue } = useForm<newParticipantFormInputs>({
    resolver: zodResolver(newParticipantFormSchema),
  })
  return (
    <View style={styles.container}>
      <Text style={styles.eventName}>MUDANÇA PARA A NOVA CASA</Text>

      <Text style={styles.eventDate}>Sexta, 26 de Janeiro de 2024</Text>
      <View style={styles.form}>
        <TextInput
          onChangeText={(text) => {
            setValue('name', text)
            setValue('id', new Date().getTime())
          }}
          style={styles.input}
          placeholder="Nome do participante"
          placeholderTextColor="#6b6b6b"
          // keyboardType="numeric"
        />
        <TouchableOpacity
          style={styles.button}
          onPress={handleSubmit(createParticipant)}
        >
          <Text style={styles.buttonText}>+</Text>
        </TouchableOpacity>
      </View>
      {participants.map((data) => {
        return <Participant key={data.id} id={data.id} name={data.name} />
      })}
    </View>
  )
}
