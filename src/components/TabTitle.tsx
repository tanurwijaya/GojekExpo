import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

interface LayoutProps {
    children: React.ReactNode,
    activeTab: string,
    title: string,
    onPress(): any
}

const TabTitle = (props: LayoutProps) => {
    const { children, activeTab, title, onPress } = props
    return (
        <TouchableOpacity onPress={onPress} style={{ display: 'flex', flex: 1 }}>
            <View style={{ alignSelf: 'center', alignItems: 'center', flexDirection: 'row', justifyContent: 'center', backgroundColor: activeTab === title ? 'rgba(0,0,0,0.3)' : 'transparent', height: 40, paddingHorizontal: 16, borderRadius: 32 }}>
                <View style={{ height: 16, width: 16, backgroundColor: 'white', marginRight: 8, borderRadius: 4 }} />
                <Text style={{ textAlign: 'center', color: 'white', fontWeight: 'bold' }}>{children}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default TabTitle