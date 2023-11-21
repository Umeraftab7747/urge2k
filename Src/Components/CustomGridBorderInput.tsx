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
  value?: string;
  onChangeValue?: (text: string) => void;
  isPassword?: boolean;
  borderRadius?: number;
  width?: number;
}
const CustomGridBorderInput: React.FC<Props> = ({
  placehoderTxt,
  value,
  onChangeValue,
  isPassword,
  borderRadius,
  width,
}) => {
  const [showPassword, setShowPassword] = useState<boolean>(
    isPassword ? true : false,
  );
  const styles = StyleSheet.create({
    customInputLayout: {
      width: width ? width : getWidthWithPercent(80),
      height: scale(45),
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: borderRadius ? borderRadius : scale(15),
      overflow: 'hidden',
      marginTop: scale(17),
    },
    customInputLayout2: {
      width: width ? width - 2 : getWidthWithPercent(80) - 4,
      height: scale(45) - 4,
      alignSelf: 'center',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flexDirection: 'row',
      borderRadius: borderRadius ? borderRadius : scale(15),
      overflow: 'hidden',
      backgroundColor: inputBackgroundColor,
      paddingHorizontal: scale(10),
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
      color: normalTxtColor,
    },
  });
  return (
    <LinearGradient
      colors={[`${gradientColor1}`, `${gradientColor2}`]}
      useAngle={true}
      angle={100}
      style={styles.customInputLayout}>
      <View style={styles.customInputLayout2}>
        <TextInput
          secureTextEntry={showPassword}
          style={styles.textInputStyle}
          placeholderTextColor={newPlaceHolderColor}
          placeholder={`${placehoderTxt}`}
          value={value}
          onChangeText={onChangeValue}
        />
        {isPassword ? (
          <TouchableOpacity
            onPress={() => setShowPassword(!showPassword)}
            style={styles.switchButton}>
            {showPassword ? (
              <HidePassword fill={newPlaceHolderColor} width={scale(25)} />
            ) : (
              <ShowPassword fill={newPlaceHolderColor} width={scale(25)} />
            )}
          </TouchableOpacity>
        ) : null}
      </View>
    </LinearGradient>
  );
};

export default CustomGridBorderInput;
