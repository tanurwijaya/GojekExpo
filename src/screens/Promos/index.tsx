import React from 'react'
import { View, Text, Dimensions, ScrollView } from 'react-native'
import DragableSheet from '../../components/DragableSheet'

const windowWidth = Dimensions.get('window').width

const PromosScreen = () => {
  return (
    <DragableSheet style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
      <ScrollView>
        <View style={{ padding: 16 }}>

          <View style={{ flexDirection: 'row', justifyContent: 'space-around', marginBottom: 24 }}>
            <View style={{ flex: 1, width: 40, aspectRatio: 4 / 3, height: 40, borderRadius: 8, backgroundColor: '#FC9F4E', marginRight: 8 }}>

            </View>


            <View style={{ flex: 1, width: 40, aspectRatio: 4 / 3, height: 40, borderRadius: 8, backgroundColor: '#18B7DA', marginRight: 8 }}>

            </View>


            <View style={{ flex: 1, width: 40, aspectRatio: 4 / 3, height: 40, borderRadius: 8, backgroundColor: '#A14A9A' }}>

            </View>
          </View>



          <View style={{ borderRadius: 32, borderWidth: 1, borderColor: '#E8E8E8', paddingVertical: 16, paddingHorizontal: 16, flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24 }}>
            <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
              <View style={{ width: 24, height: 24, borderRadius: 12, backgroundColor: '#FBAF18', marginRight: 8 }} />
              <Text style={{ fontWeight: 'bold', color: '#494A4A' }}>Got a promo code? Enter here</Text>
            </View>
            <Text>{'>'}</Text>
          </View>


          <View style={{ flex: 1 }}>
            <Text style={{ fontWeight: 'bold', marginBottom: 24 }}>Promos you can't resist</Text>
            <View style={{ width: windowWidth - 32, aspectRatio: 4 / 2.5, backgroundColor: '#00C2DE', borderRadius: 16, marginBottom: 32 }} />
            <View style={{ width: windowWidth - 32, aspectRatio: 4 / 2.5, backgroundColor: '#F778C6', borderRadius: 16, marginBottom: 32 }} />
          </View>


        </View>
      </ScrollView>

    </DragableSheet>

  )
}

export default PromosScreen