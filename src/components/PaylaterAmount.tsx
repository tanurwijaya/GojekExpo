import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const PaylaterAmount = () => {
    return (
        <View style={{backgroundColor:'white', paddingVertical:16, paddingLeft:16, paddingRight:48, borderRadius:16, marginVertical:4}}>
            <View style={{flexDirection:'row', alignItems:'center', marginBottom:4, alignContent:'center'}}>
                <View style={{height:8, width:8, backgroundColor:'#00AED6', marginRight:4}}/>
                <Text style={{fontWeight:'bold'}}>paylater</Text>
            </View>

            <Text style={{fontSize:18, fontWeight:'bold'}}>{'Rp402.302'}</Text>

            <Text style={{marginTop:4, color:'#008915'}}>{'Tap for details'}</Text>
        </View>
    )
}

export default PaylaterAmount