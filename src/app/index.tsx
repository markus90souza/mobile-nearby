import { Button } from '@/components/button'
import { Steps } from '@/components/steps'
import { Welcome } from '@/components/welcome'
import { router } from 'expo-router'
import { type FC } from 'react'
import { View } from 'react-native'

const WelcomeScreen: FC = () => {
  return (
    <View className="flex-1 gap-10 p-10">
      <Welcome />
      <Steps />

      <Button onPress={() => router.navigate('/home')}>
        <Button.Title>Começar</Button.Title>
      </Button>
    </View>
  )
}

export default WelcomeScreen
