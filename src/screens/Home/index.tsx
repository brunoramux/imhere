import { FlatList, Text, TextInput, TouchableOpacity, View } from 'react-native'
import { styles } from './styles'
import { z } from 'zod'
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { useContext } from 'react'
import { ParticipantsContext } from '../../contexts/ParticipantsContext'
import { Participant } from '../../components/Participant'

const newParticipantFormSchema = z.object({
  name: z.string().min(3, { message: 'Nome Invalido' }).toUpperCase(),
})

type newParticipantFormInputs = z.infer<typeof newParticipantFormSchema>

export function Home() {
  const { createParticipant, participants } = useContext(ParticipantsContext)

  const {
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<newParticipantFormInputs>({
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
      {errors.name && (
        <Text style={styles.textError}>{errors.name.message}</Text>
      )}

      <FlatList
        data={participants}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <Participant key={item.id} id={item.id} name={item.name} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={() => {
          return (
            <Text style={styles.listEmptyText}>
              Ninguem chegou no evento ainda
            </Text>
          )
        }}
      />

      {/* <ScrollView>
        {participants.map((data) => {
          return <Participant key={data.id} id={data.id} name={data.name} />
        })}
      </ScrollView> */}
    </View>
  )
}
