import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import SaldoAmount from './SaldoAmount';
import PaylaterAmount from './PaylaterAmount';

const SaldoSlider = () => {

    const [activeState, setActiveState] = React.useState('gopay')
    const handleScroll = (event: any) => {
        if (event.nativeEvent.contentOffset.y !== 0) setActiveState('paylater')
        else setActiveState('gopay')
    }

    return (
        <View style={{ height: 108, overflow: 'hidden', flexDirection: 'row', alignItems: 'center' }}>
            <View style={{ marginRight: 10 }}>
                <View style={{ height: 16, width: 3, backgroundColor: activeState === 'paylater' ? '#BBBBBB' : 'white', borderRadius: 8, marginVertical: 2 }} />
                <View style={{ height: 16, width: 3, backgroundColor: activeState === 'gopay' ? '#BBBBBB' : 'white', borderRadius: 8, marginVertical: 2 }} />

            </View>
            <ScrollView
                onScroll={handleScroll}
                decelerationRate={0}
                showsVerticalScrollIndicator={false}
                snapToInterval={116}>
                <PaylaterAmount />
                <SaldoAmount />
            </ScrollView>
        </View>
    )
}

export default SaldoSlider