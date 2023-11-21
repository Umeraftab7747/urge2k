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
  normalTxtColor,
  placeHolderColor,
} from '../Utils/Colors';
import ShowPassword from '../Utils/Assets/icons/ShowPassword';
import HidePassword from '../Utils/Assets/icons/HidePassword';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
  placehoderTxt?: string;
  value?: string;
  onChangeValue?: (text: string) => void;
  isPassword?: boolean;
}
const CustomGridInput: React.FC<Props> = ({
  placehoderTxt,
  value,
  onChangeValue,
  isPassword,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(
    isPassword ? true : false,
  );
  return (
    <LinearGradient
      colors={[`${gradientColor1}`, `${gradientColor2}`]}
      useAngle={true}
      angle={100}
      style={{
        ...styles.customInputLayout,
        width: getWidthWithPercent(87),
      }}>
      <View
        style={{
          ...styles.customInputLayout2,
          width: getWidthWithPercent(87) - 2,
        }}>
        <TextInput
          secureTextEntry={showPassword}
          style={styles.textInputStyle}
          placeholderTextColor={placeHolderColor}
          placeholder={`${placehoderTxt}`}
          value={value}
          onChangeText={onChangeValue}
        />
        {isPassword ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.switchButton}>
            {showPassword ? (
              <HidePassword fill={placeHolderColor} width={scale(25)} />
            ) : (
              <ShowPassword fill={placeHolderColor} width={scale(25)} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </LinearGradient>
  );
};

export default CustomGridInput;

const styles = StyleSheet.create({
  customInputLayout: {
    width: getWidthWithPercent(80),
    height: scale(45),
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: scale(11),
    overflow: 'hidden',
    marginTop: scale(17),
    backgroundColor: normalTxtColor,
    paddingHorizontal: scale(10),
  },
  customInputLayout2: {
    width: getWidthWithPercent(80) - 2,
    height: scale(45) - 3,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: scale(11),
    overflow: 'hidden',
    backgroundColor: inputBackgroundColor,
    paddingHorizontal: scale(15),
  },
  switchButton: {
    width: scale(35),
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textInputStyle: {
    height: '100%',
    flex: 1,
    fontSize: scale(12),
    fontWeight: '500',
    lineHeight: scale(22),
    color: placeHolderColor,
  },
});
