import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import CustomAuthBtn from '../../../Components/CustomAuthBtn';
import {lightBlackBg, normalTxtColor} from '../../../Utils/Colors';
import CustomInput from '../../../Components/CustomInput';
import {getWidthWithPercent} from '../../../Utils/Functions/GetStyles';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {textString} from '../../../Utils/Translation/Translation';
import * as Animatable from 'react-native-animatable';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';

interface Props {
  navigation: any;
}

const LoginScreen: React.FC<Props> = ({navigation}) => {
  return (
    <ImageBackground
      style={styles.flexBg}
      source={require('../../../Utils/Assets/login.png')}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <BackArrow width={scale(35)} fill={`${normalTxtColor}`} />
        </TouchableOpacity>
      </AnimatedTopHeader>
      <AnimatedView style={styles.lowerBg}>
        <Text style={styles.HeaderTxt}>{textString.signIn}</Text>
        <Text style={styles.sloganTxt}>{textString.slogan}</Text>
        <CustomInput
          isPassword={false}
          placehoderTxt={textString.eailAddress}
        />
        <CustomInput isPassword={true} placehoderTxt={textString.password} />

        <CustomAuthBtn
          title={textString.continue}
          onClickFunction={() => navigation.navigate('HomeScreen')}
        />
        <View style={styles.innerLowerContainer}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ForgotPassword')}
            style={styles.smallerButtons}>
            <Text style={styles.smallerBtnTxt}>{textString.forgotPaswd}</Text>
          </TouchableOpacity>
          <Text style={{...styles.smallerBtnTxt, marginHorizontal: scale(10)}}>
            |
          </Text>
          <TouchableOpacity
            onPress={() => navigation.navigate('SignUp')}
            style={styles.smallerButtons}>
            <Text style={styles.smallerBtnTxt}>{textString.createAccount}</Text>
          </TouchableOpacity>
        </View>
      </AnimatedView>
    </ImageBackground>
  );
};

export default LoginScreen;

const styles = StyleSheet.create({
  flexBg: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  lowerBg: {
    width: '100%',
    height: '47%',
    position: 'absolute',
    bottom: scale(10),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  HeaderTxt: {
    fontSize: scale(37),
    fontWeight: '600',
    lineHeight: scale(60),
    textAlign: 'center',
    color: normalTxtColor,
  },
  sloganTxt: {
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(20),
    textAlign: 'center',
    color: normalTxtColor,
  },
  innerLowerContainer: {
    width: getWidthWithPercent(80),
    marginTop: scale(20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  smallerButtons: {
    height: scale(25),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  smallerBtnTxt: {
    color: normalTxtColor,
    fontSize: scale(14),
    fontWeight: '400',
  },
  backButtonContainer: {
    margin: scale(17),
    height: scale(45),
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  backButtonCircle: {
    width: scale(40),
    height: scale(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: scale(45),
    overflow: 'hidden',
    backgroundColor: lightBlackBg,
  },
});
