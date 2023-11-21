import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import {getWidthWithPercent} from '../Utils/Functions/GetStyles';
import {scale} from 'react-native-size-matters';
import {
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  newPlaceHolderColor,
  normalTxtColor,
  placeHolderColor,
} from '../Utils/Colors';
import ShowPassword from '../Utils/Assets/icons/ShowPassword';
import HidePassword from '../Utils/Assets/icons/HidePassword';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  placehoderTxt?: string;
  width?: number;
  height?: number;
  textSize?: number;
  borderRadius?: number;
  onClickFunction?: () => void;
  textColor?: string;
  textAlignLeft?: boolean;
  marginTop?: number;
}
const CustomGridBorderBtn: React.FC<Props> = ({
  placehoderTxt,
  width,
  height,
  textSize,
  borderRadius,
  onClickFunction,
  textColor,
  textAlignLeft,
  marginTop,
}) => {
  const styles = StyleSheet.create({
    customInputLayout: {
      width: width ? width : getWidthWithPercent(80),
      height: height ? height : scale(45),
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: borderRadius ? borderRadius : scale(15),
      overflow: 'hidden',
      marginTop: marginTop ? marginTop : scale(0),
    },
    customInputLayout2: {
      width: width ? width - 2 : getWidthWithPercent(80) - 2,
      height: height ? height - 2 : scale(45) - 2,
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      overflow: 'hidden',
      borderRadius: borderRadius ? borderRadius : scale(15),
      paddingHorizontal: scale(15),
      backgroundColor: inputBackgroundColor,
    },
    textStyle: {
      fontSize: textSize ? textSize : scale(12),
      fontWeight: '500',
      lineHeight: scale(22),
      width: '100%',
      textAlign: textAlignLeft ? 'left' : 'center',
      color: textColor ? textColor : normalTxtColor,
    },
  });
  return (
    <TouchableOpacity style={{alignSelf: 'center'}} onPress={onClickFunction}>
      <LinearGradient
        colors={[`${gradientColor1}`, `${gradientColor2}`]}
        useAngle={true}
        angle={100}
        style={styles.customInputLayout}>
        <View style={styles.customInputLayout2}>
          <Text style={styles.textStyle}>{placehoderTxt}</Text>
        </View>
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomGridBorderBtn;
