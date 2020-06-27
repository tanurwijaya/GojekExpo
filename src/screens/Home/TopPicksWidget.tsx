import React from 'react';
import { StyleSheet, Text, View, FlatList } from 'react-native';
import SaldoSlider from '../../components/SaldoSlider';

const TopPickWidget = () => {
    const [selected, setSelected] = React.useState('All')
    const category = ['All', ' COVID-19', 'Donation', 'Entertaiment', 'Food']
    return (
        <View>
            <Text style={{ fontWeight: 'bold', color: 'black', fontSize: 21 }}>Top picks for you</Text>
            <FlatList
            data={category}
            style={{marginTop:16}}
            ItemSeparatorComponent={()=> <View style={{width:4}}/>}
            horizontal
            showsHorizontalScrollIndicator={false}
            keyExtractor={(item)=>item}
            renderItem={({item})=> <CategoryItem type={item} isSelected={item === selected}/>}
            />
        </View>
    )
}

const CategoryItem = (props: any) => {
    const { type, isSelected } = props
    return (
        <View style={{ justifyContent: 'center', alignItems: 'center', paddingVertical: 8, paddingHorizontal:16, borderRadius:24, borderWidth: isSelected ? 0 : 1, borderColor:'#CACCCF', backgroundColor:isSelected? '#31B057' : 'transparent' }}>
            <Text style={{color:isSelected? 'white': '#494A4A'}}>{type}</Text>
        </View>
    )
}

export default TopPickWidget