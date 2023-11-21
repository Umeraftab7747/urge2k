import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
} from 'react-native';
import React, {useState} from 'react';
import {
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  normalTxtColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
} from '../../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {getWidthWithPercent} from '../../../Utils/Functions/GetStyles';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import CustomBtnSimple from '../../../Components/CustomBtnSimple';
import CustomDropDown from '../../../Components/CustomDropDown';
import CustomInput from '../../../Components/CustomInput';
import CustomGridInput from '../../../Components/CustomGridInput';
import CrossIcon from '../../../Utils/Assets/icons/CrossIcon';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';

interface Props {
  navigation: any;
}
const WithDrawMoney: React.FC<Props> = ({navigation}) => {
  const [bankType, setbankType] = useState<string>('');
  const [accountType, setaccountType] = useState<string>('');

  return (
    <LinearGradient
      colors={[
        `${profileColorBg1}`,
        `${profileColorBg2}`,
        `${profileColorBg2}`,
      ]}
      style={styles.flexBg}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <View style={styles.backButtonCircle} />
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <CrossIcon
            width={scale(20)}
            height={scale(25)}
            fill={`${normalTxtColor}`}
          />
        </TouchableOpacity>
      </AnimatedTopHeader>
      <AnimatedView style={styles.childContainer}>
        <Text style={styles.ModalTitle}>{textString.wthdrlTxtHd}</Text>
        <Text style={styles.ModalSubTitle}>
          {textString.wthdrlTxtSd} N1,000
        </Text>
        <View style={styles.otherContentDiv}>
          <FlatList
            data={[]}
            renderItem={({}) => null}
            ListHeaderComponent={
              <>
                <CustomGridInput placehoderTxt={textString.entrAmntInp} />

                <CustomDropDown
                  borderRadius={scale(11)}
                  width={getWidthWithPercent(87)}
                  placeHolderText={textString.bankSlctTxt}
                  dataList={[
                    {
                      id: '0',
                      label: 'Bank 1',
                      value: 'bank1',
                    },
                    {
                      id: '1',
                      label: 'Bank 2',
                      value: 'bank2',
                    },
                    {
                      id: '2',
                      label: 'Bank 3',
                      value: 'bank3',
                    },
                  ]}
                  value={bankType}
                  onChangeValue={text => setbankType(text)}
                />
                <CustomGridInput placehoderTxt={textString.acntNumTxtInp} />
                <CustomDropDown
                  borderRadius={scale(11)}
                  width={getWidthWithPercent(87)}
                  placeHolderText={textString.acntTpeTxtInp}
                  dataList={[
                    {
                      id: '0',
                      label: 'Current',
                      value: 'current',
                    },
                    {
                      id: '1',
                      label: 'Saving',
                      value: 'saving',
                    },
                  ]}
                  value={accountType}
                  onChangeValue={text => setaccountType(text)}
                />

                <View style={{height: scale(70)}} />
              </>
            }
            ListFooterComponent={
              <CustomBtnSimple
                title={textString.submtTxt}
                onClickFunction={() => console.log('hy')}
              />
            }
          />
        </View>
      </AnimatedView>
    </LinearGradient>
  );
};

export default WithDrawMoney;

const styles = StyleSheet.create({
  reportTxt: {
    color: normalTxtColor,
    fontWeight: '500',
    fontSize: scale(13),
    lineHeight: scale(20),
  },
  ReportBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  AboutMeInputContainer: {
    height: scale(185),
    borderRadius: scale(11),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(10),
  },
  AboutMeInput: {
    width: '100%',
    height: '100%',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: profileHeaderSubtitle,
    textAlignVertical: 'top',
  },
  otherContentDiv: {
    width: '100%',
    flex: 1,
    marginTop: scale(15),
  },
  ModalTitle: {
    fontWeight: '600',
    fontSize: scale(22),
    lineHeight: scale(42),
    textAlign: 'left',
    color: normalTxtColor,
  },
  ModalSubTitle: {
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(18),
    textAlign: 'left',
    color: normalTxtColor,
  },
  flexBg: {
    width: '100%',
    height: '100%',
  },
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
  },
  backButtonContainer: {
    margin: scale(17),
    height: scale(45),
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
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
    width: getWidthWithPercent(87),
    height: scale(118),
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
    width: getWidthWithPercent(86.5),
    height: scale(115),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(20),
    paddingHorizontal: scale(23),
    paddingVertical: scale(13),
    overflow: 'hidden',
  },
});
