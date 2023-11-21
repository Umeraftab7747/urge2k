import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  CreatePasswordBg,
  profileColorBg2,
  gradientColor1,
  gradientColor2,
  gradientColorBg1,
  gradientColorBg2,
  gradientColorBg3,
  lightBlackBg,
  normalTxtColor,
} from '../../../Utils/Colors';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {scale} from 'react-native-size-matters';
import CustomArrowAuthBtn from '../../../Components/CustomArrowAuthBtn';
import CustomGridBorderInput from '../../../Components/CustomGridBorderInput';
import CustomDropDown from '../../../Components/CustomDropDown';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';

interface Props {
  navigation: any;
}
const CompleteRegistration: React.FC<Props> = ({navigation}) => {
  const [genderValue, setgenderValue] = useState<string>('');
  return (
    <LinearGradient
      colors={[
        `${gradientColorBg1}`,
        `${gradientColorBg2}`,
        `${gradientColorBg3}`,
        `${gradientColorBg3}`,
        `${gradientColorBg2}`,
        `${gradientColorBg1}`,
      ]}
      style={styles.flexBg}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <BackArrow width={scale(35)} fill={`${normalTxtColor}`} />
        </TouchableOpacity>
      </AnimatedTopHeader>
      <AnimatedView style={styles.BorderedBgContainer}>
        <Text style={styles.mainHeading}>{textString.completeReg}</Text>
        <Text style={styles.subHeading}>{textString.completRegSub}</Text>
        <CustomDropDown
          placeHolderText={textString.selectGender}
          dataList={[
            {
              id: '0',
              label: textString.male,
              value: 'male',
            },
            {
              id: '1',
              label: textString.female,
              value: 'female',
            },
          ]}
          value={genderValue}
          onChangeValue={text => setgenderValue(text)}
        />
        <TouchableOpacity style={styles.createPasswordBtn}>
          <Text style={styles.cretBtnTxt}>{textString.createPassword}</Text>
        </TouchableOpacity>
        <CustomGridBorderInput
          isPassword={true}
          placehoderTxt={textString.enterYourPswd}
        />
        <CustomGridBorderInput
          isPassword={true}
          placehoderTxt={textString.confirmPwd}
        />

        <View style={{marginTop: scale(37)}} />
        <CustomArrowAuthBtn
          title={textString.continue}
          onClickFunction={() => navigation.navigate('GenderSpecific')}
        />
      </AnimatedView>
    </LinearGradient>
  );
};

export default CompleteRegistration;

const styles = StyleSheet.create({
  flexBg: {
    width: '100%',
    height: '100%',
  },
  mainHeading: {
    fontWeight: '500',
    fontSize: scale(23),
    lineHeight: scale(35),
    color: normalTxtColor,
    textAlign: 'center',
  },
  subHeading: {
    fontWeight: '400',
    fontSize: scale(11),
    lineHeight: scale(15),
    color: normalTxtColor,
    textAlign: 'center',
    marginTop: scale(5),
    marginBottom: scale(0),
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
    width: scale(45),
    height: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: scale(45),
    overflow: 'hidden',
  },
  BorderedBgContainer: {
    width: '100%',
    flex: 1,
    paddingVertical: scale(51),
    backgroundColor: profileColorBg2,
    borderTopLeftRadius: scale(38),
    borderTopRightRadius: scale(38),
    shadowColor: lightBlackBg,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  createPasswordBtn: {
    width: scale(129),
    height: scale(37),
    borderRadius: scale(42),
    marginTop: scale(45),
    marginBottom: scale(7),
    backgroundColor: CreatePasswordBg,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  cretBtnTxt: {
    color: normalTxtColor,
    fontSize: scale(10),
    fontWeight: '500',
  },
});
