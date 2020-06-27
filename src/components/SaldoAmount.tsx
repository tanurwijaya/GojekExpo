import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const SaldoAmount = () => {
    return (
        <View style={{backgroundColor:'white', paddingVertical:16, paddingLeft:16, paddingRight:48, borderRadius:16, marginVertical:4}}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:4}}>
                <View style={{height:8, width:8, backgroundColor:'#00AED6', marginRight:4}}/>
                <Text style={{fontWeight:'bold'}}>gopay</Text>
            </View>

            <Text style={{fontSize:18, fontWeight:'bold'}}>{'Rp21.302'}</Text>

            <Text style={{marginTop:4, color:'#008915'}}>{'Tap to top up'}</Text>
        </View>
    )
}

export default SaldoAmount