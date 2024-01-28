import { ReactNode, createContext, useState } from 'react'

interface ParticipantProviderProps {
  children: ReactNode
}

interface Participant {
  id: number
  name: string
}

interface ParticipantContextType {
  participants: Participant[]
  createParticipant: (data: Participant) => Promise<void>
  deleteParticipant: (id: number) => Promise<void>
}

export const ParticipantsContext = createContext({} as ParticipantContextType)

export function ParticipantsProvider({ children }: ParticipantProviderProps) {
  const [participants, setParticipants] = useState<Participant[]>([])
  console.log(participants)

  async function createParticipant(data: Participant) {
    const newParticipant = { id: data.id, name: data.name }
    setParticipants((state) => [newParticipant, ...state])
  }

  async function deleteParticipant(id: number) {
    const newParticipants = participants.filter((item) => item.id !== id)
    setParticipants(newParticipants)
  }

  return (
    <ParticipantsContext.Provider
      value={{ deleteParticipant, participants, createParticipant }}
    >
      {children}
    </ParticipantsContext.Provider>
  )
}
