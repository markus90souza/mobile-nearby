import { type FC } from 'react'
import { ActivityIndicator } from 'react-native'

const Loading: FC = () => {
  return (
    <ActivityIndicator className="flex-1 bg-gray-100 text-green-base justify-center items-center" />
  )
}

export { Loading }
