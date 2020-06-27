import React from 'react'
import { View } from 'react-native'
import TabTitle from '../../components/TabTitle'
import ViewPager from '@react-native-community/viewpager'
import HomeScreen from '../Home';
import ChatScreen from '../Chat'
import PromosScreen from '../Promos'

const DashboardScreen = () => {

  const [currentOffset, setCurrentOffset] = React.useState(0)
  const [viewpagerScrollState, setViewpagerScrollState] = React.useState('idle')
  const [activeTab, setActiveTab] = React.useState('Home')
  const viewPagerRef: any = React.useRef(null)



  const onPageScroll = (e: any) => {
    // console.log({ offset: e.nativeEvent.offset })
    // console.log({e})
  }

  React.useEffect(() => {
    // console.log({viewpagerScrollState})
  })

  const onPageScrollStateChanged = (e: any) => {
    // setViewpagerScrollState(e.nativeEvent.pageScrollState)
    // console.log({e})
    // e.nativeEvent.pageScrollState === 'idle'
    //0.9990919828414917
    //0.9990918636322021
  }

  const onPageSelected = (e: any) => {
    const { position } = e.nativeEvent
    if (position === 0) setActiveTab('Promos')
    else if (position === 1) setActiveTab('Home')
    else setActiveTab('Chat')
  }

  const onTabTitlePressed = (index: number) => {
    viewPagerRef.current.setPage(index)
  }

  return (
    <View style={{ display: 'flex', flex: 1 }}>
      <View style={{ flex: 1, flexDirection: 'column', backgroundColor: '#02ACD3', zIndex: 2 }}>
        <View>
          <View style={{ flexDirection: 'row', flex: 1, justifyContent: 'space-around', paddingVertical: 32, marginTop: 24, alignItems: 'center', zIndex: 2 }}>
            <TabTitle onPress={() => onTabTitlePressed(0)} activeTab={activeTab} title={'Promos'}>Promos</TabTitle>
            <TabTitle onPress={() => onTabTitlePressed(1)} activeTab={activeTab} title={'Home'}>Home</TabTitle>
            <TabTitle onPress={() => onTabTitlePressed(2)} activeTab={activeTab} title={'Chat'}>Chat</TabTitle>
          </View>
        </View>

        <ViewPager ref={viewPagerRef} initialPage={1} style={{ flex: 1 }} pageMargin={8} orientation={'horizontal'} onPageSelected={onPageSelected} onPageScrollStateChanged={onPageScrollStateChanged} onPageScroll={onPageScroll}>
          <PromosScreen key={1} />
          <View key={2}>
            <HomeScreen />
          </View>
          <ChatScreen key={3} />
        </ViewPager>

      </View>
    </View>
  )
}

export default DashboardScreen