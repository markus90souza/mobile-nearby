import { colors } from '@/styles/colors'
import { IconTicket } from '@tabler/icons-react-native'
import { type FC } from 'react'
import {
  TouchableOpacity,
  View,
  Image,
  Text,
  type TouchableOpacityProps,
} from 'react-native'

type PlaceProps = {
  id: string
  name: string
  description: string
  coupons: number
  cover: string
  address: string
}

type Props = TouchableOpacityProps & {
  data: PlaceProps
}
const Place: FC<Props> = ({ data, ...rest }) => {
  return (
    <TouchableOpacity
      className="w-full flex-row border border-gray-200 items-center gap-4 h-[120px] rounded-xl p-2"
      {...rest}
    >
      <Image
        alt={data.name}
        className="w-[116px] h-[104px] bg-gray-200 rounded-lg"
        source={{ uri: data.cover }}
      />

      <View className="flex-1 gap-1">
        <Text className="font-rubik-m text-sm text-gray-600">{data.name}</Text>
        <Text className="font-rubik-r text-xs text-gray-500" numberOfLines={2}>
          {data.description}
        </Text>

        <View className="gap-2 flex-row mt-[10px]">
          <IconTicket size={16} color={colors.red.base} />
          <Text className="font-rubik-r text-xs text-gray-400">
            {data.coupons} cupons disponíveis
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export { Place, type PlaceProps }
