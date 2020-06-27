import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import SaldoSlider from '../../components/SaldoSlider';

const SaldoWidget = () => {
    return (
        <View style={{backgroundColor:'#00AED6', padding:16, borderRadius:16, marginTop:16, flexDirection:'row', alignItems:'center', justifyContent:'space-between'}}>
            <SaldoSlider/>

            <View style={{flexDirection:'row'}}>
                <ItemMenu type={'Pay'}/>
                <ItemMenu type={'Top Up'}/>
                <ItemMenu type={'More'}/>
            </View>
        </View>
    )
}

const ItemMenu = (props : any) => {
    const {type} = props
    return (
    <View style={{justifyContent:'center', alignItems:'center', marginHorizontal:10}}>
        <View style={{height:24, width:24, borderRadius:8, backgroundColor:'#FFFFFF'}}/>
        <Text style={{color:'white', marginTop:8, fontSize:16}}>{type}</Text>
    </View>
)
}

export default SaldoWidget