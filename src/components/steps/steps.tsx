import { View, Text } from 'react-native'
import { IconMapPin, IconQrcode, IconTicket } from '@tabler/icons-react-native'
import { Step } from './step'

const Steps: React.FC = () => {
  return (
    <View className="flex-1 gap-6">
      <Text className="font-rubik-r text-[16px] text-gray-600">
        Veja como funciona:
      </Text>

      <Step
        icon={IconMapPin}
        title="Encontre estabelecimentos"
        description="Veja locais perto de você que são parceiros Nearby"
      />

      <Step
        icon={IconQrcode}
        title="Ative o cupom com QR Code"
        description="Escaneie o código no estabelecimento para usar o benefício"
      />

      <Step
        icon={IconTicket}
        title="Garanta vantagens perto de você"
        description="Ative cupons onde estiver, em diferentes tipos de estabelecimento"
      />
    </View>
  )
}

export { Steps }
