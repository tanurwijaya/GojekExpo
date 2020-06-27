import {
    View,
    Text,
    TouchableOpacity,
    Image,
    ImageBackground
  } from "react-native";
  import DragableSheet from './DragableSheet'
  import * as Animatable from "react-native-animatable";
  export const AnimatedDragableSheet = Animatable.createAnimatableComponent(DragableSheet);
  
