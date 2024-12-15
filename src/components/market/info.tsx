import { Text, View } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'

import { colors } from '@/styles/theme'
import type { FC } from 'react'

type Props = {
  description: string
  icon: React.ComponentType<IconProps>
}

export const Info: FC<Props> = ({ icon: Icon, description }) => {
  return (
    <View className="flex-row items-center gap-2">
      <Icon size={16} color={colors.gray[400]} />
      <Text className="font-rubik-r leading-5 text-sm flex-1 text-gray-400">
        {description}
      </Text>
    </View>
  )
}
