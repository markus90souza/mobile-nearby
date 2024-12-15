import { Text, View } from 'react-native'
import { IconProps } from '@tabler/icons-react-native'
import type { FC } from 'react'
import { colors } from '@/styles/colors'

type StepProps = {
  title: string
  description: string
  icon: React.ComponentType<IconProps>
}

const Step: FC<StepProps> = ({ description, title, icon: Icon }) => {
  return (
    <View className="w-full flex-row gap-4">
      {Icon && <Icon size={32} color={colors.red.base} />}

      <View className="flex-1">
        <Text className="font-rubik-sb text-[16px] text-gray-600">{title}</Text>
        <Text className="font-rubik-r text-[14px] text-gray-500">
          {description}
        </Text>
      </View>
    </View>
  )
}

export { Step }
