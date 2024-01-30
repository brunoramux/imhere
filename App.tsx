import { StatusBar } from 'react-native'
import { ParticipantsProvider } from './src/contexts/ParticipantsContext'
import { Home } from './src/screens/Home'
import { Fragment } from 'react'

export default function App() {
  return (
    <ParticipantsProvider>
      <Fragment>
        <StatusBar barStyle="light-content" />
        <Home />
      </Fragment>
    </ParticipantsProvider>
  )
}
