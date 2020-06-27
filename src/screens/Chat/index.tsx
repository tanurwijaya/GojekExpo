import React from 'react'
import { View, Text, FlatList, TouchableOpacity } from 'react-native'
import DragableSheet from '../../components/DragableSheet'

const ChatScreen = () => {
  return (
    <DragableSheet key={1} style={{ borderTopLeftRadius: 16, borderTopRightRadius: 16 }}>
      <View>
        <FlatList
          style={{ padding: 16 }}
          ListHeaderComponent={<HeaderChat />}
          data={['Adib Ralali', 'Imelda', 'Devina', 'Peter Ralali', 'Test', 'a']}
          keyExtractor={(item) => item.toString()}
          renderItem={({ item }) => <ChatItem item={item} />}
          ItemSeparatorComponent={() => <View style={{ marginLeft: 56, height: 1, flex: 1, backgroundColor: '#F0F2F5', marginVertical: 16 }} />}
        />

        <View style={{
          width: 56, height: 56, borderRadius: 28, backgroundColor: '#00880D', position: 'absolute', display: 'none', right: 32, bottom: 64,
          justifyContent: 'center',
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 4
          },
          shadowOpacity: 0.75,
          shadowRadius: 4,
          elevation: 6,
        }}>
          <View style={{ width: 20, height: 20, borderRadius: 4, backgroundColor: 'white' }} />
        </View>
      </View>
    </DragableSheet>

  )
}

const HeaderChat = () => (
  <View>
    <View style={{ marginBottom: 40 }}>
      <Text style={{ fontWeight: 'bold', marginBottom: 24 }}>Quick actions</Text>
      <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
        <ActionItem onPress={() => { }} color={'#F06400'} text={'Inbox'} />
        <ActionItem onPress={() => { }} color={'#00AA13'} text={'New Group'} />
        <ActionItem onPress={() => { }} color={'#00AED6'} text={'Split Bill'} />
        <ActionItem onPress={() => { }} color={'#00AED6'} text={'Pay'} />
      </View>
    </View>
    <Text style={{ fontWeight: 'bold', marginBottom: 24 }}>Your chats</Text>
  </View>
)

interface ActionItemProps {
  onPress(): any,
  text: string,
  color: string
}

const ActionItem = (props: ActionItemProps) => {
  const { onPress, text, color } = props
  return (
    <View style={{ justifyContent: 'center', alignItems: 'center' }}>
      <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: color, marginBottom: 4, justifyContent: 'center', alignItems: 'center' }}>
        <View style={{ width: 16, height: 16, borderRadius: 4, backgroundColor: 'white' }} />
      </View>
      <Text style={{ fontSize: 10 }}>{text}</Text>
    </View>
  )
}

interface ChatItemProps {
  item: string
}

const ChatItem = (props: ChatItemProps) => {
  const { item } = props

  var matches = item.match(/\b(\w)/g); // ['J','S','O','N']
  var acronym = matches?.join(''); // JSON

  return (
    <TouchableOpacity style={{ flexDirection: 'row', justifyContent: 'space-between' }}>

      <View style={{ flexDirection: 'row' }}>
        <View style={{ width: 48, height: 48, borderRadius: 24, backgroundColor: '#216BC4', justifyContent: 'center', alignItems: 'center' }}>
          <Text style={{ color: 'white', fontWeight: 'bold' }}>{acronym}</Text>
        </View>

        <View style={{ marginLeft: 8 }}>
          <Text style={{ fontWeight: 'bold' }}>{item}</Text>
          <Text>You have a message</Text>
        </View>
      </View>

      <Text style={{ color: '#BBBBBB', marginRight: 8 }}>16/06/20</Text>

    </TouchableOpacity>
  )
}

export default ChatScreen