import React from 'react';
import { StyleSheet, Text, View, PanResponder, Dimensions, Animated, TouchableOpacity } from 'react-native';
import DragableSheet from '../../components/DragableSheet';

const windowHeight = Dimensions.get('window').height;
const windowWidth = Dimensions.get('window').width;

const FeatureWidget = () => {

  const [scrollY, setScrollY] = React.useState(new Animated.Value(0))


  const animatedHeight = scrollY.interpolate({
    inputRange: [-2, -1, 0, 1, 2],
    outputRange: [64, 64, 64, 64, 64]
  })

  // const animatedBottom = scrollY.interpolate({
  //     inputRange: [-2, -1, 0, 1, 20, 21],
  //     outputRange: [16, 16, 16, 15, 23, 23]
  // })

  const animatedPaddingHorizontal = scrollY.interpolate({
    inputRange: [-2, -1, 0, 1, 20, 64, 65],
    outputRange: [0, 0, 0, 4, 5, 10, 10]
  })

  const animatedBorderRadius = scrollY.interpolate({
    inputRange: [-2, -1, 0, 1, 64, 65],
    outputRange: [100, 100, 100, 99, 30, 0]
  })

  const animatedTopRadius = scrollY.interpolate({
    inputRange: [-2, -1, 0, 1, 180, 181, 182],
    outputRange: [100, 100, 100, 99, 24, 24, 24]
  })

  const animatedBackgroundColor = scrollY.interpolate({
    inputRange: [-2, -1, 0, 100, 101],
    outputRange: ['transparent', 'transparent', 'transparent', 'rgba(0,0,0,0.5)', 'rgba(0,0,0,0.5)']
  })

  const animatedAlpha = scrollY.interpolate({
    inputRange: [-2, -1, 0, 30, 90, 120, 121],
    outputRange: [1, 1, 1, 0.3, 0.3, 1, 1]
  })

  const animatedElevation = scrollY.interpolate({
    inputRange: [-2, -1, 0, 30, 90, 120, 121],
    outputRange: [4, 4, 4, 0, 0, 4, 4]
  })

  const animatedOverlayHeight = scrollY.interpolate({
    inputRange: [-2, -1, 0, 1, 2],
    outputRange: [0, 0, 0, 0, windowHeight]
  })

  const panResponder = React.useMemo(() => PanResponder.create({
    onPanResponderGrant: (evt, gestureState) => {
    },
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      scrollY.setValue(windowHeight - evt.nativeEvent.pageY - 117) //height widget 
      console.log({ y: windowHeight - evt.nativeEvent.pageY - 117 })
    },
    onPanResponderRelease: (evt, gestureState) => {

    },
    onPanResponderTerminationRequest: (evt, gestureState) => false
  }), [])

  return (
    <View style={{ zIndex: 99, height: windowHeight, }}>
      <Animated.View style={{ width: windowWidth, backgroundColor: animatedBackgroundColor, alignItems: 'center', flex: 1 }} />
      <View style={{ position: 'absolute', bottom: 0, width: windowWidth, flex: 1, alignItems: 'center' }}>
        <Animated.View {...panResponder.panHandlers} style={{
          flex: 1,
          zIndex: 8,

          // opacity:animatedAlpha,
          bottom: 16,
        }}>
          <DragableSheet style={{
            borderTopLeftRadius: animatedTopRadius,
            borderTopRightRadius: animatedTopRadius,
            borderBottomLeftRadius: animatedBorderRadius,
            borderBottomRightRadius: animatedBorderRadius,
            shadowColor: '#000',
            shadowOffset: {
              width: 0,
              height: 4
            },
            shadowOpacity: 0.75,
            shadowRadius: 4,
            elevation: animatedElevation,
            paddingHorizontal: 24,
            paddingBottom: 16,
            marginTop: 16
          }}>
            <Animated.View style={{ flexDirection: 'row', height: animatedHeight, maxHeight: windowHeight - 124, paddingHorizontal: animatedPaddingHorizontal, alignContent: 'flex-end', marginTop: 8 }}>
              <FeatureItem />
              <FeatureItem />
              <FeatureItem />
              <FeatureItem />
            </Animated.View>
          </DragableSheet>
        </Animated.View>
      </View>
    </View>
  )
}

const FeatureItem = () => {
  return (
    <TouchableOpacity onPress={() => { }}>
      <View style={{ marginHorizontal: 16, alignItems: 'center' }}>
        <View style={{ width: 40, height: 40, backgroundColor: '#00AA13', borderRadius: 20 }} />
        <Text style={{ marginTop: 4 }}>GoRide</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  wrapper: {

    borderTopLeftRadius: 1,
    borderTopRightRadius: 1,
    borderBottomLeftRadius: 1,
    borderBottomRightRadius: 1,
    display: 'none',
    position: 'absolute'
  },
  shadowEffect: {

  }
})

export default FeatureWidget