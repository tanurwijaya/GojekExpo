import React from 'react';
import { Text, View, FlatList, TouchableOpacity } from 'react-native';

const TopPickWidget = () => {
  const [selected, setSelected] = React.useState('All')
  const category = ['All', ' COVID-19', 'Donation', 'Entertaiment', 'Food']
  return (
    <View>
      <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 21 }}>Top picks for you</Text>
      <FlatList
        data={category}
        style={{ marginTop: 16 }}
        ItemSeparatorComponent={() => <View style={{ width: 4 }} />}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <CategoryItem type={item} isSelected={item === selected} onPress={setSelected} />}
      />
    </View>
  )
}

const CategoryItem = (props: any) => {
  const { type, isSelected, onPress } = props
  return (
    <TouchableOpacity onPress={() => onPress(type)} style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 8, paddingHorizontal: 16, borderRadius: 24, borderWidth: isSelected ? 0 : 1, borderColor: '#CACCCF', backgroundColor: isSelected ? '#31B057' : 'transparent' }}>
      <Text style={{ color: isSelected ? 'white' : '#494A4A' }}>{type}</Text>
    </TouchableOpacity>
  )
}

export default TopPickWidget