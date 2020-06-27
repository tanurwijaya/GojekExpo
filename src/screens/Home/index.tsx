import React from 'react';
import { StyleSheet, Text, View, Dimensions, ScrollView } from 'react-native';
import DragableSheet from '../../components/DragableSheet';
import SaldoWidget from './SaldoWidget';
import TopPickWidget from './TopPicksWidget';
import FeatureWidget from './FeatrueWidget';

const windowWidth = Dimensions.get('window').width;

const HomeScreen = () => {
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex: 1 }}>
                <DragableSheet style={{ flex: 1, borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
                    <View>
                        {/* <ScrollView> */}
                        <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
                            <View style={{ flexDirection: 'row' }}>
                                <SearchBar />
                                <Profile />
                            </View>

                            <SaldoWidget />

                            <View style={{ marginTop: 16 }}>
                                <TopPickWidget />
                            </View>


                            <View style={{ marginTop: 24 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <View style={{ height: 16, width: 16, borderRadius: 4, backgroundColor: '#00AA13', marginRight: 4 }} />
                                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>gojek</Text>
                                </View>

                                <Text style={{ fontWeight: 'bold', fontSize: 20, marginVertical: 8 }}>Support a cause</Text>
                                <Text style={{ fontWeight: '300', fontSize: 14, lineHeight: 16 }}>Your support will make the most difference to those in need during these difficult times.</Text>

                                <View style={{ width: windowWidth - 48, height: 192, backgroundColor: 'black', marginTop: 16, borderRadius: 16 }} />

                            </View>
                        </View>


                        {/* </ScrollView> */}
                    </View>

                </DragableSheet>
                    
            </View>



        </View>
    )
}

const SearchBar = () => (
    <View style={{ flex: 1, height: 40, borderRadius: 20, borderColor: '#E8E8E8', borderWidth: 1, alignContent: 'center', alignItems: 'center', flexDirection: 'row', paddingHorizontal: 16 }}>
        <View style={{ height: 16, width: 16, backgroundColor: '#494A4A', borderRadius: 4, marginRight: 16 }} />
        <Text style={{ fontWeight: '100' }}>Hungry?</Text>
    </View>
)

const Profile = () => (
    <View style={{ height: 40, width: 40, borderRadius: 20, backgroundColor: '#00880D', marginLeft: 16 }}>

    </View>
)

export default HomeScreen
