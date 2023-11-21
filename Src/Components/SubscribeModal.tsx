import {
  StyleSheet,
  Text,
  View,
  Modal,
  TouchableOpacity,
  StatusBar,
  Dimensions,
} from 'react-native';
import React from 'react';
import CrossIcon from '../Utils/Assets/icons/CrossIcon';
import {scale} from 'react-native-size-matters';
import {
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  lightBlackBg,
  normalTxtColor,
  profileHeaderSubtitle,
} from '../Utils/Colors';
import AnimatedTopHeader from '../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../AnimatedComponents/AnimatedView';
import LinearGradient from 'react-native-linear-gradient';
import KingIcon from '../Utils/Assets/icons/KingIcon';
import {textString} from '../Utils/Translation/Translation';
import CustomBtnSimple from './CustomBtnSimple';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../Utils/Functions/GetStyles';

interface Props {
  modalValue?: boolean;
  closingFunction?: () => void;
  buttonOnPress?: () => void;
}
const SubscribeModal: React.FC<Props> = ({
  modalValue,
  closingFunction,
  buttonOnPress,
}) => {
  return (
    <Modal
      animationType="slide"
      visible={modalValue}
      onRequestClose={closingFunction}
      transparent>
      <StatusBar />
      <View style={styles.flexBgModal}>
        <AnimatedTopHeader style={styles.backButtonContainer}>
          <View style={styles.backButtonCircle}></View>
          <TouchableOpacity
            onPress={closingFunction}
            style={styles.backButtonCircle}>
            <CrossIcon
              width={scale(20)}
              height={scale(25)}
              fill={`${normalTxtColor}`}
            />
          </TouchableOpacity>
        </AnimatedTopHeader>
        <AnimatedView style={styles.childContainer}>
          <TouchableOpacity
            onPress={closingFunction}
            style={{...styles.flexBg, flex: 1 / 1.8}}
          />
          <View style={styles.premiumOuterContainer}>
            <LinearGradient
              colors={[`${gradientColor2}`, `${gradientColor1}`]}
              style={styles.premiumOuterContainer}>
              <View style={styles.premiumInnerContainer}>
                <View style={styles.iconContainerKing}>
                  <KingIcon />
                </View>
                <View>
                  <Text style={styles.premiumHeading}>
                    {textString.prmiumAccess}
                  </Text>
                  <Text style={styles.premiumSubHeading}>
                    {textString.subScribVip}
                  </Text>
                  <Text style={styles.premiumDescHeading}>
                    {textString.prmumAscSub}
                  </Text>
                </View>

                <View style={styles.ButtonPremiumContainer}>
                  <View style={styles.premiumBtnDiv}>
                    <CustomBtnSimple
                      borderRadius={scale(42)}
                      title={textString.subscribeTxtBtn}
                      onClickFunction={() =>
                        buttonOnPress ? buttonOnPress() : null
                      }
                    />
                  </View>
                  <View style={styles.premiumBtnDiv}>
                    <CustomBtnSimple
                      colorsArray={[
                        `${profileHeaderSubtitle}`,
                        `${profileHeaderSubtitle}`,
                      ]}
                      borderRadius={scale(42)}
                      title={textString.skipTxtBtn}
                      onClickFunction={() =>
                        closingFunction ? closingFunction() : null
                      }
                    />
                  </View>
                </View>
              </View>
            </LinearGradient>
          </View>
          <TouchableOpacity
            onPress={closingFunction}
            style={{...styles.flexBg, flex: 1}}
          />
        </AnimatedView>
      </View>
    </Modal>
  );
};

export default SubscribeModal;

const styles = StyleSheet.create({
  backButtonContainer: {
    margin: scale(17),
    height: scale(45),
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    position: 'relative',
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
  premiumOuterContainer: {
    width: getWidthWithPercent(90),
    height: getHeightWithPercent(52),
    borderRadius: scale(23),
    marginVertical: scale(19),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  premiumInnerContainer: {
    width: getWidthWithPercent(90) - 4,
    height: getHeightWithPercent(52) - 4,
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    paddingHorizontal: scale(12),
  },
  ButtonPremiumContainer: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    width: '95%',
  },
  iconContainerKing: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    height: getHeightWithPercent(24),
    paddingBottom: getHeightWithPercent(2),
  },
  premiumHeading: {
    fontSize: scale(30),
    lineHeight: scale(35),
    fontWeight: '700',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumSubHeading: {
    fontSize: scale(16),
    lineHeight: scale(22),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumDescHeading: {
    fontSize: scale(16),
    lineHeight: scale(20),
    fontWeight: '300',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumBtnDiv: {
    width: '49%',
  },
  flexBgModal: {
    width: '100%',
    height: '100%',
    backgroundColor: lightBlackBg,
  },
  flexBg: {
    width: '100%',
    height: '100%',
  },
});
