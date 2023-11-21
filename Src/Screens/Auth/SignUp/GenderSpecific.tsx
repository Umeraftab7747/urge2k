import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  CreatePasswordBg,
  profileColorBg2,
  genderTextColor,
  gradientColor1,
  gradientColor2,
  gradientColorBg1,
  gradientColorBg2,
  gradientColorBg3,
  inputBackgroundColor,
  lightBlackBg,
  normalTxtColor,
} from '../../../Utils/Colors';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {scale} from 'react-native-size-matters';
import CustomArrowAuthBtn from '../../../Components/CustomArrowAuthBtn';
import CustomGridBorderInput from '../../../Components/CustomGridBorderInput';
import CustomDropDown from '../../../Components/CustomDropDown';
import {getWidthWithPercent} from '../../../Utils/Functions/GetStyles';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';

interface Props {
  navigation: any;
}
const GenderSpecific: React.FC<Props> = ({navigation}) => {
  const [intrestedGender, setintrestedGender] = useState<string>('');
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
        <Text style={styles.mainHeading}>{textString.genderSpacHead}</Text>
        <Text style={styles.subHeading}>{textString.gednerSpacSub}</Text>

        <FlatList
          data={[
            {id: '0', label: textString.male, value: 'male'},
            {id: '1', label: textString.female, value: 'female'},
            {id: '2', label: textString.both, value: 'both'},
          ]}
          ItemSeparatorComponent={() => <View style={{height: scale(20)}} />}
          renderItem={({item}) => (
            <TouchableOpacity
              onPress={() => setintrestedGender(item?.value)}
              style={styles.genderItemContainer}>
              <LinearGradient
                useAngle={true}
                angle={100}
                colors={
                  intrestedGender === item?.value
                    ? [`${gradientColor1}`, `${gradientColor2}`]
                    : [genderTextColor, genderTextColor]
                }
                style={styles.genderItemContainerGrid}>
                <View style={styles.genderItemContainerGridSmall}>
                  <Image
                    style={styles.smallAvtar}
                    source={
                      item?.value === 'male'
                        ? require('../../../Utils/Assets/male.png')
                        : item?.value === 'female'
                        ? require('../../../Utils/Assets/female.png')
                        : require('../../../Utils/Assets/both.png')
                    }
                  />
                  <Text style={styles.genderTxt}>{item?.label}</Text>
                </View>
              </LinearGradient>
            </TouchableOpacity>
          )}
          ListFooterComponent={
            <>
              <View style={{height: scale(30)}} />
              <CustomArrowAuthBtn
                title={textString.continue}
                onClickFunction={() =>
                  navigation.navigate('SignUpAccountCategory')
                }
              />
            </>
          }
        />
      </AnimatedView>
    </LinearGradient>
  );
};

export default GenderSpecific;

const styles = StyleSheet.create({
  flexBg: {
    width: '100%',
    height: '100%',
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

  genderItemContainer: {
    width: getWidthWithPercent(80),
    height: scale(120),
    borderRadius: scale(20),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  genderItemContainerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  genderItemContainerGridSmall: {
    width: getWidthWithPercent(79),
    height: scale(116),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(20),
    overflow: 'hidden',
  },
  genderTxt: {
    color: genderTextColor,
    fontSize: scale(14),
    fontWeight: '800',
  },
  smallAvtar: {
    height: scale(40),
    objectFit: 'contain',
    marginBottom: scale(10),
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
    marginBottom: scale(25),
  },

  BorderedBgContainer: {
    width: '100%',
    flex: 1,
    paddingVertical: scale(51),
    paddingBottom: scale(0),
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
});
