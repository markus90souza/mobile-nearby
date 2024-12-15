import {
  TouchableOpacity,
  TouchableOpacityProps,
  Text,
  TextProps,
  ActivityIndicator,
} from 'react-native'
import { IconProps as TablerIconProps } from '@tabler/icons-react-native'
import type { FC } from 'react'

type ButtonProps = TouchableOpacityProps & {
  isLoading?: boolean
}
const Button: FC<ButtonProps> = ({ style, isLoading, children, ...rest }) => {
  return (
    <TouchableOpacity
      className="h-14 max-h-14 w-full flex-row bg-green-base rounded-[10px] justify-center items-center gap-[14px]"
      style={style}
      activeOpacity={0.8}
      disabled={isLoading}
      {...rest}
    >
      {isLoading ? (
        <ActivityIndicator size="small" className="text-gray-100" />
      ) : (
        children
      )}
    </TouchableOpacity>
  )
}

const Title = ({ children }: TextProps) => {
  return (
    <Text className="font-rubik-sb text-base text-gray-100">{children}</Text>
  )
}

type IconProps = {
  icon: React.ComponentType<TablerIconProps>
}

const Icon = ({ icon: Icon }: IconProps) => {
  return <Icon size={24} className="text-gray-100" />
}

Button.Title = Title
Button.Icon = Icon

export { Button }
