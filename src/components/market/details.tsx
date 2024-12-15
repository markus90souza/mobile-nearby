import { View, Text } from 'react-native'
import { IconPhone, IconMapPin, IconTicket } from '@tabler/icons-react-native'

import { Info } from './info'

export type PropsDetails = {
  name: string
  description: string
  address: string
  phone: string
  coupons: number
  rules: {
    id: string
    description: string
  }[]
}

type Props = {
  data: PropsDetails
}

export function Details({ data }: Props) {
  return (
    <View className="bg-gray-100 p-8 pb-0 rounded-tl-[20px] rounded-tr-[20px]">
      <Text className="font-rubik-b text-[20px] text-gray-600">
        {data.name}
      </Text>
      <Text className="text-base leading-5 font-rubik-r text-gray-500 mt-3 mb-8">
        {data.description}
      </Text>

      <View className="w-full pb-4 mb-4 border border-gray-100">
        <Text className="font-rubik-r text-sm text-gray-500">Informações</Text>

        <Info
          icon={IconTicket}
          description={`${data.coupons} cupons disponíveis`}
        />
        <Info icon={IconMapPin} description={data.address} />
        <Info icon={IconPhone} description={data.phone} />
      </View>

      <View className="w-full pb-4 mb-4 border border-gray-100">
        <Text className="font-rubik-m mb-3 text-sm text-gray-500">
          Regulamento
        </Text>
        {data.rules.map((item) => (
          <Text key={item.id}>{`\u2022 ${item.description}`}</Text>
        ))}
      </View>
    </View>
  )
}
