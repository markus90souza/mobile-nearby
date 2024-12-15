import { FlatList } from 'react-native'

import { Category } from './category'
import type { FC } from 'react'

export type CategoriesProps = {
  id: string
  name: string
}[]

type Props = {
  data: CategoriesProps
  selected: string
  onSelect: (id: string) => void
}

export const Categories: FC<Props> = ({ data, selected, onSelect }) => {
  return (
    <FlatList
      className="absolute max-h-9 z-[1] top-16"
      data={data}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Category
          name={item.name}
          iconId={item.id}
          onPress={() => onSelect(item.id)}
          isSelected={item.id === selected}
        />
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={{ paddingHorizontal: 24, gap: 8 }}
    />
  )
}
