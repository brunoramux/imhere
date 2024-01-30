import { ReactNode, createContext, useState } from 'react'
import { Alert } from 'react-native'

interface ParticipantProviderProps {
  children: ReactNode
}

interface Participant {
  id: number
  name: string
}

interface CreateParticipantProps {
  name: string
}

interface ParticipantContextType {
  participants: Participant[]
  createParticipant: (data: CreateParticipantProps) => Promise<void>
  deleteParticipant: (id: number) => Promise<void>
}

export const ParticipantsContext = createContext({} as ParticipantContextType)

export function ParticipantsProvider({ children }: ParticipantProviderProps) {
  const [participants, setParticipants] = useState<Participant[]>([])
  console.log(participants)

  async function createParticipant({ name }: CreateParticipantProps) {
    const newParticipant = { id: new Date().getTime(), name }
    setParticipants((state) => [newParticipant, ...state])
    Alert.alert('Sucesso', `Participante ${name} incluído com sucesso.`)
  }

  async function deleteParticipant(id: number) {
    const deleteParticipants = participants.filter((item) => item.id !== id)
    Alert.alert(
      'Remover',
      `Deseja realmente remover o participante ${deleteParticipant.name}?`,
      [
        {
          text: 'Sim',
          onPress: () => setParticipants(deleteParticipants),
        },
        {
          text: 'Náo',
          style: 'cancel',
        },
      ],
    )
  }

  return (
    <ParticipantsContext.Provider
      value={{ deleteParticipant, participants, createParticipant }}
    >
      {children}
    </ParticipantsContext.Provider>
  )
}
