import { Text, View } from 'react-native'
import { IconTicket } from '@tabler/icons-react-native'

import { colors } from '@/styles/theme'
import type { FC } from 'react'

type Props = {
  code: string
}

export const Coupon: FC<Props> = ({ code }) => {
  return (
    <View className="px-8">
      <Text className="text-gray-500 text-sm font-rubik-m mb-3">
        Utilize esse cupom
      </Text>

      <View className="rouded-lg gap-[10px] items-center flex-row bg-green-soft px-2 py-[10px]">
        <IconTicket size={24} color={colors.green.light} />
        <Text className="font-rubik-sb text-gray-600 text-base uppercase">
          {code}
        </Text>
      </View>
    </View>
  )
}
