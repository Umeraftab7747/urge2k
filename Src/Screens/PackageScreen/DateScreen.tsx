import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Switch,
} from 'react-native';
import React, {useState} from 'react';
import CrossIcon from '../../Utils/Assets/icons/CrossIcon';
import {scale} from 'react-native-size-matters';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../Utils/Functions/GetStyles';
import {
  dateBorder,
  getVipColor,
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  normalTxtColor,
  placeHolderColor,
  toScreenBg,
} from '../../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import CustomDropDown from '../../Components/CustomDropDown';
import CustomCheckBox from '../../Components/CustomCheckBox';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../AnimatedComponents/AnimatedView';

interface Props {
  navigation: any;
}

const DateScreen: React.FC<Props> = ({navigation}) => {
  const [languageValue, setlanguageValue] = useState<string>('');
  const [everyOneValue, seteveryOneValue] = useState<boolean>(false);
  const [genderValue, setgenderValue] = useState<string>('');
  const [genderSelected, setgenderSelected] = useState<string>('');
  const [nonCollidingMultiSliderValue, setNonCollidingMultiSliderValue] =
    React.useState<number[]>([18, 100]);
  const nonCollidingMultiSliderValuesChange = (values: number[]) => {
    setNonCollidingMultiSliderValue(values);
  };
  console.log(nonCollidingMultiSliderValue);
  return (
    <View style={styles.fillBgMy}>
      <View style={styles.fillOtherBg}>
        <AnimatedTopHeader style={styles.TopHeader}>
          <TouchableOpacity
            onPress={() => navigation.pop()}
            style={styles.backButtonContainer}>
            <CrossIcon />
          </TouchableOpacity>
          <Text style={styles.TopHeaderTitle}>{textString.dateFilter}</Text>
          <View style={styles.backButtonContainer} />
        </AnimatedTopHeader>
        <AnimatedView style={{width: '100%', flex: 1}}>
          <FlatList
            data={[]}
            renderItem={() => null}
            ListHeaderComponent={
              <>
                <Text style={styles.headeingViewTxt}>{textString.whoDate}</Text>

                <View style={styles.genderItemContainer}>
                  <LinearGradient
                    useAngle={true}
                    angle={100}
                    colors={[`${gradientColor1}`, `${gradientColor2}`]}
                    style={styles.genderItemContainerGrid}>
                    <View style={styles.genderItemContainerGridSmall}>
                      <View
                        style={{
                          ...styles.rowView,
                          borderBottomWidth: scale(1),
                        }}>
                        <Text style={styles.rowTxt}>{textString.openDate}</Text>
                        <Switch
                          value={everyOneValue}
                          onChange={() => seteveryOneValue(!everyOneValue)}
                          trackColor={{
                            false: placeHolderColor,
                            true: getVipColor,
                          }}
                          thumbColor={
                            everyOneValue ? normalTxtColor : placeHolderColor
                          }
                        />
                      </View>
                      <View
                        style={{
                          ...styles.rowView,
                          borderBottomWidth: scale(1),
                        }}>
                        <Text style={styles.rowTxt}>{textString.men}</Text>
                        <CustomCheckBox
                          selected={genderSelected === 'men' ? true : false}
                          onChange={() => setgenderSelected('men')}
                        />
                      </View>
                      <View
                        style={{
                          ...styles.rowView,
                          borderBottomWidth: scale(1),
                        }}>
                        <Text style={styles.rowTxt}>{textString.women}</Text>
                        <CustomCheckBox
                          selected={genderSelected === 'women' ? true : false}
                          onChange={() => setgenderSelected('women')}
                        />
                      </View>
                      <View style={styles.rowView}>
                        <Text style={styles.rowTxt}>
                          {textString.nonbinary}
                        </Text>
                        <CustomCheckBox
                          selected={
                            genderSelected === 'Nonbinary people' ? true : false
                          }
                          onChange={() => setgenderSelected('Nonbinary people')}
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </View>
                <Text style={styles.headeingViewTxt}>{textString.ageTxt}</Text>
                <View
                  style={{
                    ...styles.genderItemContainer,
                    height: getHeightWithPercent(23),
                  }}>
                  <LinearGradient
                    useAngle={true}
                    angle={100}
                    colors={[`${gradientColor1}`, `${gradientColor2}`]}
                    style={styles.genderItemContainerGrid}>
                    <View
                      style={{
                        ...styles.genderItemContainerGridSmall,
                        height: getHeightWithPercent(23) - 4,
                      }}>
                      <Text style={styles.sliderTxt}>
                        {textString.between18Txt}
                      </Text>
                      <MultiSlider
                        values={[
                          nonCollidingMultiSliderValue[0],
                          nonCollidingMultiSliderValue[1],
                        ]}
                        sliderLength={280}
                        onValuesChange={nonCollidingMultiSliderValuesChange}
                        min={18}
                        max={100}
                        step={1}
                        allowOverlap={false}
                        snapped
                        minMarkerOverlapDistance={40}
                        customMarker={() => (
                          <View style={styles.customMarker} />
                        )}
                        trackStyle={{height: scale(3)}}
                        selectedStyle={{backgroundColor: gradientColor1}}
                      />
                      <View style={styles.rowViewMini}>
                        <Text style={styles.rowTxtMini}>
                          {textString.see2peopleTxt}
                        </Text>
                        <Switch
                          value={everyOneValue}
                          onChange={() => seteveryOneValue(!everyOneValue)}
                          trackColor={{
                            false: placeHolderColor,
                            true: getVipColor,
                          }}
                          thumbColor={
                            everyOneValue ? normalTxtColor : placeHolderColor
                          }
                        />
                      </View>
                    </View>
                  </LinearGradient>
                </View>
                <Text style={styles.headeingViewTxt}>
                  {textString.langDKnow}
                </Text>
                <CustomDropDown
                  width={getWidthWithPercent(90)}
                  borderRadius={scale(53)}
                  placeHolderText={textString.selectLang}
                  dataList={[
                    {
                      id: '0',
                      label: 'English',
                      value: 'eng',
                    },
                    {
                      id: '1',
                      label: 'Hindi',
                      value: 'hindi',
                    },
                    {
                      id: '2',
                      label: 'Arabic',
                      value: 'arabic',
                    },
                  ]}
                  onChangeValue={text => setlanguageValue(text)}
                  value={languageValue}
                />
                <Text style={styles.headeingViewTxt}>Advance Filters</Text>
                <CustomDropDown
                  width={getWidthWithPercent(90)}
                  borderRadius={scale(53)}
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
                  placeHolderText={textString.setAdFilter}
                  onChangeValue={text => setgenderValue(text)}
                  value={genderValue}
                />
                <View style={{height: scale(40)}} />
              </>
            }
          />
        </AnimatedView>
      </View>
    </View>
  );
};

export default DateScreen;

const styles = StyleSheet.create({
  customMarker: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(25),
    backgroundColor: normalTxtColor,
  },
  rowView: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: scale(15),
    borderBottomColor: dateBorder,
  },
  rowViewMini: {
    width: '90%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
    paddingVertical: scale(15),
  },
  rowTxt: {
    fontSize: scale(16),
    lineHeight: scale(22),
    fontWeight: '400',
    color: normalTxtColor,
  },
  sliderTxt: {
    fontSize: scale(18),
    lineHeight: scale(22),
    fontWeight: '400',
    color: normalTxtColor,
    width: '87%',
  },
  rowTxtMini: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '400',
    color: normalTxtColor,
  },
  headeingViewTxt: {
    fontSize: scale(15),
    lineHeight: scale(22),
    fontWeight: '500',
    color: normalTxtColor,
    width: '90%',
    alignSelf: 'center',
    marginVertical: scale(15),
  },
  genderItemContainer: {
    width: getWidthWithPercent(100) - 32,
    height: getHeightWithPercent(33),
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
    width: getWidthWithPercent(100) - 36,
    height: getHeightWithPercent(33) - 4,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(20),
    overflow: 'hidden',
  },
  TopHeaderTitle: {
    fontSize: scale(20),
    lineHeight: scale(30),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  fillBgMy: {
    width: getWidthWithPercent(100),
    height: '100%',
    backgroundColor: toScreenBg,
  },
  fillOtherBg: {
    width: getWidthWithPercent(100) - 32,
    alignSelf: 'center',
    height: '100%',
  },
  TopHeader: {
    width: '100%',
    height: scale(40),
    marginVertical: scale(15),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  backButtonContainer: {
    width: scale(40),
    height: scale(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
});
