import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import {scale} from 'react-native-size-matters';
import {
  dateBorder,
  gradientColor1,
  gradientColor2,
  modalAccountColor,
  placeHolderColor,
} from '../Utils/Colors';
import LinearGradient from 'react-native-linear-gradient';
import Svg, {Path} from 'react-native-svg';

interface Props {
  selected: boolean;
  onChange: () => void;
}

const CustomCheckBox: React.FC<Props> = ({selected, onChange}) => {
  return (
    <TouchableOpacity
      style={{
        ...styles.buttonView,
        borderColor: selected ? gradientColor1 : dateBorder,
      }}
      onPress={onChange}>
      <LinearGradient
        useAngle={true}
        angle={100}
        colors={
          selected
            ? [`${gradientColor1}`, `${gradientColor2}`]
            : [`${modalAccountColor}`, `${modalAccountColor}`]
        }
        style={styles.fillMyView}>
        {selected ? (
          <Svg
            xmlns="http://www.w3.org/2000/svg"
            height={18}
            width={18}
            viewBox="0 0 448 512"
            fill="#fff">
            <Path d="M438.6 105.4c12.5 12.5 12.5 32.8 0 45.3l-256 256c-12.5 12.5-32.8 12.5-45.3 0l-128-128c-12.5-12.5-12.5-32.8 0-45.3s32.8-12.5 45.3 0L160 338.7l233.4-233.3c12.5-12.5 32.8-12.5 45.3 0z" />
          </Svg>
        ) : null}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export default CustomCheckBox;

const styles = StyleSheet.create({
  buttonView: {
    width: scale(25),
    height: scale(25),
    borderRadius: scale(6),
    overflow: 'hidden',
    borderWidth: scale(1),
    borderColor: dateBorder,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  fillMyView: {
    width: scale(25),
    height: scale(25),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
});
