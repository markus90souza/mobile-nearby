import { Text, Pressable, PressableProps } from 'react-native'

import { categoriesIcons } from '@/utils/categories-icons'
import type { FC } from 'react'
import { cn } from '@/libs/utils'
import { colors } from '@/styles/colors'

type Props = PressableProps & {
  name: string
  iconId: string
  isSelected?: boolean
}

const Category: FC<Props> = ({ name, iconId, isSelected = false, ...rest }) => {
  const Icon = categoriesIcons[iconId]

  return (
    <Pressable
      className={cn(
        'h-9 flex-row items-center border justify-center gap-[10px] rounded-lg px-3',
        isSelected
          ? 'bg-green-base border-green-base'
          : 'bg-gray-100 border-gray-100',
      )}
      {...rest}
    >
      <Icon size={16} color={colors.gray[isSelected ? 100 : 400]} />
      <Text
        className={cn(
          'text-sm font-rubik-r',
          isSelected ? 'text-gray-100' : 'text-gray-500',
        )}
      >
        {name}
      </Text>
    </Pressable>
  )
}

export { Category }
