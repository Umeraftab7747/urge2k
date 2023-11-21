import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Modal,
  FlatList,
} from 'react-native';
import React, {useState} from 'react';
import {
  dropDisbaleColor,
  dropDownBg,
  dropDownSeprator,
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  lightBlackBg,
  normalTxtColor,
} from '../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import {getWidthWithPercent} from '../Utils/Functions/GetStyles';
import {scale} from 'react-native-size-matters';
import AnimatedView from '../AnimatedComponents/AnimatedView';

interface Props {
  dataList: {
    id: string;
    label: string;
    value: string;
  }[];
  placeHolderText: string;
  width?: number;
  value: string;
  borderRadius?: number;
  onChangeValue: (text: string) => void;
}
const CustomDropDown: React.FC<Props> = ({
  dataList,
  placeHolderText,
  value,
  onChangeValue,
  width,
  borderRadius,
}) => {
  const [openModal, setopenModal] = useState<boolean>(false);
  const findRealLabel = (): string => {
    const result = dataList?.find(dat => dat?.value === value);
    const label: string = `${result?.label}`;
    return label;
  };
  return (
    <>
      <TouchableOpacity onPress={() => setopenModal(!openModal)}>
        <LinearGradient
          colors={[`${gradientColor1}`, `${gradientColor2}`]}
          useAngle={true}
          angle={100}
          style={{
            ...styles.customInputLayout,
            width: width ? width : getWidthWithPercent(80),
            borderRadius: borderRadius ? borderRadius : scale(15),
          }}>
          <View
            style={{
              ...styles.customInputLayout2,
              width: width ? width - 2 : getWidthWithPercent(80) - 2,
              borderRadius: borderRadius ? borderRadius : scale(15),
            }}>
            <Text style={styles.mainTxtPlaceHolder}>
              {value ? findRealLabel() : placeHolderText}
            </Text>
          </View>
        </LinearGradient>
      </TouchableOpacity>
      <Modal animationType="slide" visible={openModal} transparent={true}>
        <View style={styles.dropDownContainer}>
          <TouchableOpacity
            style={{width: '100%', flex: 1}}
            onPress={() => setopenModal(!setopenModal)}
          />
          <AnimatedView style={styles.dropDownView}>
            <FlatList
              ListHeaderComponent={
                <>
                  <View style={styles.dropItem}>
                    <Text style={styles.dropItemTxt}>{placeHolderText}</Text>
                    <View style={styles.emptyCircleView}>
                      {value ? null : <View style={styles.circleView} />}
                    </View>
                  </View>
                  <View
                    style={{
                      width: '100%',
                      height: scale(1),
                      backgroundColor: dropDownSeprator,
                    }}
                  />
                </>
              }
              data={dataList}
              ItemSeparatorComponent={() => (
                <View
                  style={{
                    width: '100%',
                    height: scale(1),
                    backgroundColor: dropDownSeprator,
                  }}
                />
              )}
              renderItem={({item}) => (
                <TouchableOpacity
                  onPress={() => {
                    onChangeValue(item?.value);
                    setopenModal(!openModal);
                  }}
                  style={styles.dropItem}>
                  <Text style={{...styles.dropItemTxt, color: normalTxtColor}}>
                    {item?.label}
                  </Text>
                  <View
                    style={{
                      ...styles.emptyCircleView,
                      borderColor: normalTxtColor,
                    }}>
                    {value === item?.value ? (
                      <View
                        style={{
                          ...styles.circleView,
                          backgroundColor: normalTxtColor,
                        }}
                      />
                    ) : null}
                  </View>
                </TouchableOpacity>
              )}
            />
          </AnimatedView>
          <TouchableOpacity
            style={{width: '100%', flex: 1}}
            onPress={() => setopenModal(!setopenModal)}
          />
        </View>
      </Modal>
    </>
  );
};

export default CustomDropDown;

const styles = StyleSheet.create({
  dropItem: {
    height: scale(48),
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  emptyCircleView: {
    width: scale(17),
    height: scale(17),
    borderRadius: scale(22),
    overflow: 'hidden',
    borderWidth: scale(2),
    borderColor: dropDisbaleColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  circleView: {
    width: scale(9),
    height: scale(9),
    borderRadius: scale(12),
    overflow: 'hidden',
    backgroundColor: dropDisbaleColor,
  },
  dropItemTxt: {
    fontSize: scale(20),
    fontWeight: '400',
    lineHeight: scale(36),
    color: dropDisbaleColor,
  },
  customInputLayout: {
    height: scale(45),
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    marginTop: scale(17),
  },
  customInputLayout2: {
    width: getWidthWithPercent(80) - 2,
    height: scale(45) - 4,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    overflow: 'hidden',
    backgroundColor: inputBackgroundColor,
    paddingHorizontal: scale(15),
  },
  mainTxtPlaceHolder: {
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(24),
    color: normalTxtColor,
  },
  dropDownContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: lightBlackBg,
  },
  dropDownView: {
    width: getWidthWithPercent(86),
    height: 'auto',
    paddingHorizontal: scale(15),
    paddingVertical: scale(10),
    backgroundColor: dropDownBg,
    borderRadius: scale(10),
    overflow: 'hidden',
  },
});
