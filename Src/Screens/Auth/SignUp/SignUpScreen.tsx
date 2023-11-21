import {
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {scale} from 'react-native-size-matters';
import CustomAuthBtn from '../../../Components/CustomAuthBtn';
import {
  dullTxtColor,
  lightBlackBg,
  normalTxtColor,
  policyBoxBg,
} from '../../../Utils/Colors';
import CustomInput from '../../../Components/CustomInput';
import {getWidthWithPercent} from '../../../Utils/Functions/GetStyles';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';
interface Props {
  navigation: any;
}
const SignUpScreen: React.FC<Props> = ({navigation}) => {
  const [acceptPolicy, setacceptPolicy] = useState<boolean>(false);
  return (
    <ImageBackground
      style={styles.flexBg}
      source={require('../../../Utils/Assets/Register.png')}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <BackArrow width={scale(35)} fill={`${normalTxtColor}`} />
        </TouchableOpacity>
      </AnimatedTopHeader>
      <AnimatedView style={styles.lowerBg}>
        <Text style={styles.HeaderTxt}>{textString.register}</Text>
        <Text style={styles.sloganTxt}>{textString.slogan}</Text>
        <CustomInput isPassword={false} placehoderTxt={textString.username} />
        <CustomInput
          isPassword={false}
          placehoderTxt={textString.eailAddress}
        />
        <TouchableOpacity
          onPress={() => setacceptPolicy(!acceptPolicy)}
          style={styles.policyBtnView}>
          <View
            style={{
              ...styles.smallBox,
              backgroundColor: acceptPolicy ? normalTxtColor : policyBoxBg,
            }}
          />
          <Text style={styles.policyTxt}>{textString.acceptTerms}</Text>
        </TouchableOpacity>
        <CustomAuthBtn
          title={textString.continue}
          onClickFunction={() => navigation.navigate('CompleteRegistration')}
        />
        <View style={styles.innerLowerContainer}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.smallerButtons}>
            <Text style={styles.smallerBtnTxt}>
              {textString.alreadyAccount}
            </Text>
          </TouchableOpacity>
        </View>
      </AnimatedView>
    </ImageBackground>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  flexBg: {
    width: '100%',
    flex: 1,
    position: 'relative',
  },
  lowerBg: {
    width: '100%',
    height: '54%',
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
  policyBtnView: {
    width: getWidthWithPercent(80),
    marginTop: scale(10),
    marginBottom: scale(5),
    height: scale(20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  policyTxt: {
    fontSize: scale(13),
    lineHeight: scale(20),
    color: dullTxtColor,
    fontWeight: '400',
  },
  smallBox: {
    width: scale(16),
    height: scale(16),
    borderRadius: scale(2),
    overflow: 'hidden',
    borderWidth: scale(1),
    borderColor: dullTxtColor,
    marginRight: scale(10),
  },
});
