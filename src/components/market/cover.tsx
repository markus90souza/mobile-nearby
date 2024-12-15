import { ImageBackground, View } from 'react-native'
import { IconArrowLeft } from '@tabler/icons-react-native'
import { router } from 'expo-router'
import { Button } from '@/components/button'
import type { FC } from 'react'

type Props = {
  uri: string
}

export const Cover: FC<Props> = ({ uri }) => {
  return (
    <ImageBackground className="w-full h-80 -mb-8 bg-gray-200" source={{ uri }}>
      <View className="p-6 pt-14">
        <Button
          className="w-10 h-10 items-center justify-center bg-green-base text-white"
          onPress={() => router.back()}
        >
          <IconArrowLeft size={24} color={'#fff'} />
        </Button>
      </View>
    </ImageBackground>
  )
}
