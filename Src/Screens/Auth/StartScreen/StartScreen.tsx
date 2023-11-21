import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import CustomAuthBtn from '../../../Components/CustomAuthBtn';
import {normalTxtColor} from '../../../Utils/Colors';
import {textString} from '../../../Utils/Translation/Translation';
import * as Animatable from 'react-native-animatable';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';

interface Props {
  navigation: any;
}

const StartScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.flexBg}
      source={require('../../../Utils/Assets/GetStart.jpg')}>
      <AnimatedView style={styles.lowerBg}>
        <Text style={styles.HeaderTxt}>{textString.appName}</Text>
        <Text style={styles.sloganTxt}>{textString.slogan}</Text>
        <CustomAuthBtn
          title={textString.getStarted}
          onClickFunction={() => navigation.navigate('Login')}
        />
      </AnimatedView>
    </ImageBackground>
  );
};

export default StartScreen;

const styles = StyleSheet.create({
  flexBg: {
    width: '100%',
    height: Dimensions.get('screen').height,
    position: 'relative',
  },
  lowerBg: {
    width: '100%',
    height: '37%',
    position: 'absolute',
    bottom: scale(0),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  HeaderTxt: {
    fontSize: scale(25),
    fontWeight: '700',
    lineHeight: scale(38),
    textAlign: 'center',
    color: normalTxtColor,
  },
  sloganTxt: {
    fontSize: scale(14),
    fontWeight: '500',
    lineHeight: scale(24),
    textAlign: 'center',
    color: normalTxtColor,
  },
});
