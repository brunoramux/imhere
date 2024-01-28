import { ParticipantsProvider } from './src/contexts/ParticipantsContext'
import { Home } from './src/screens/Home'

export default function App() {
  return (
    <ParticipantsProvider>
      <Home />
    </ParticipantsProvider>
  )
}
