import React, { ReactNode } from 'react';
import { StyleSheet, Text, View, ViewStyle, PanResponder, Animated } from 'react-native';

interface LayoutProps {
    children: JSX.Element,
    style : any

}

const DragableSheet = (props: LayoutProps) => {
    const { children, style } = props

    const [y, setY] = React.useState(new Animated.Value(0))

    React.useEffect(()=>{
        console.log({y})
    })

    const panResponder = React.useRef(
        PanResponder.create({
          // Ask to be the responder:
          onStartShouldSetPanResponder: (evt, gestureState) => true,
          onStartShouldSetPanResponderCapture: (evt, gestureState) =>
            true,
          onMoveShouldSetPanResponder: (evt, gestureState) => true,
          onMoveShouldSetPanResponderCapture: (evt, gestureState) =>
            true,
    
          onPanResponderGrant: (evt, gestureState) => {
            // The gesture has started. Show visual feedback so the user knows
            // what is happening!
            // gestureState.d{x,y} will be set to zero now
          },
          onPanResponderMove: (evt, gestureState) => {
              console.log({y:evt.nativeEvent.pageY})
              y.setValue(evt.nativeEvent.pageY)
            // The most recent move distance is gestureState.move{X,Y}
            // The accumulated gesture distance since becoming responder is
            // gestureState.d{x,y}
          },
          onPanResponderTerminationRequest: (evt, gestureState) =>
            true,
          onPanResponderRelease: (evt, gestureState) => {
            // The user has released all touches while this view is the
            // responder. This typically means a gesture has succeeded
          },
          onPanResponderTerminate: (evt, gestureState) => {
            // Another component has become the responder, so this gesture
            // should be cancelled
          },
          onShouldBlockNativeResponder: (evt, gestureState) => {
            // Returns whether this component should block native components from becoming the JS
            // responder. Returns true by default. Is currently only supported on android.
            return true;
          }
        })
      ).current;
      
    return (
        <Animated.View style={[style,{backgroundColor: 'white' }]} >
            <View style={{ width: 24, height: 4, backgroundColor: '#BBBBBB', marginTop: 16, alignSelf: 'center', borderRadius: 2 }}/>
            <View style={{}}>
            {children}
            </View>
        </Animated.View>
    )
}

export default DragableSheet