import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
//import * as Animatable from 'react-native-animatable';

interface Props {
  style?: {};
  children?: React.ReactNode;
}
{
  /* <Animatable.View style={style} animation={'fadeInDown'} duration={2000}>
  {children}
</Animatable.View>; */
}
const AnimatedTopHeader: React.FC<Props> = ({children, style}) => {
  return <View style={style}>{children}</View>;
};

export default AnimatedTopHeader;

const styles = StyleSheet.create({});
