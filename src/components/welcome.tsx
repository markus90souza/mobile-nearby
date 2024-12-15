import { type FC } from 'react'
import { View, Image, Text } from 'react-native'

export const Welcome: FC = () => {
  return (
    <View>
      <Image
        alt="Logo"
        className="h-12 w-12 mt-6 mb-7"
        source={require('@/assets/logo.png')}
      />

      <Text className="font-rubik-b text-[24px] text-gray-600">
        Boas vindas ao Nearby!
      </Text>

      <Text className="mt-3 text-[16px] font-rubik-r text-gray-500">
        Tenha cupons de vantagem para usar em {'\n'}
        seus estabelecimentos favoritos.
      </Text>
    </View>
  )
}
