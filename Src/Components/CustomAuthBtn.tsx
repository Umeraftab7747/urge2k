import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import React from 'react';
import {getWidthWithPercent} from '../Utils/Functions/GetStyles';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {gradientColor1, gradientColor2, normalTxtColor} from '../Utils/Colors';

interface Props {
  title: string;
  onClickFunction: () => void;
  children?: React.ReactNode;
}

const CustomAuthBtn: React.FC<Props> = ({title, onClickFunction, children}) => {
  return (
    <TouchableOpacity style={styles.customBtnOutlay} onPress={onClickFunction}>
      <LinearGradient
        colors={[`${gradientColor1}`, `${gradientColor2}`]}
        style={styles.linearGradient}>
        {title && <Text style={styles.btnTxt}>{title}</Text>}
        {children && children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomAuthBtn;

const styles = StyleSheet.create({
  customBtnOutlay: {
    width: getWidthWithPercent(53),
    height: scale(45),
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: scale(54),
    overflow: 'hidden',
    marginVertical: scale(18),
  },
  linearGradient: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    width: '100%',
    height: '100%',
  },
  btnTxt: {
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(24),
    textAlign: 'center',
    color: normalTxtColor,
  },
});
