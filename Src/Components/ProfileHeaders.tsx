import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import {getWidthWithPercent} from '../Utils/Functions/GetStyles';
import {scale} from 'react-native-size-matters';
import LinearGradient from 'react-native-linear-gradient';
import {
  gradientColor1,
  gradientColor2,
  normalTxtColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  profileSideButtonBg,
} from '../Utils/Colors';
import CrossIcon from '../Utils/Assets/icons/CrossIcon';
import AnimatedTopHeader from '../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../AnimatedComponents/AnimatedView';

interface Props {
  title: string;
  subTitle: string;
  otherTitle?: string;
  buttonTitle?: string;
  buttonIcon?: React.ReactNode;
  children?: React.ReactNode;
}

const ProfileHeaders: React.FC<Props> = ({
  title,
  subTitle,
  buttonTitle,
  buttonIcon,
  children,
  otherTitle,
}) => {
  const [openModal, setopenModal] = useState<boolean>(false);
  return (
    <>
      <View style={styles.MainContainerView}>
        <View
          style={{
            ...styles.textContainer,
            width: otherTitle && otherTitle?.length > 0 ? '64%' : '70%',
          }}>
          <Text style={styles.mainTitle}>{title}</Text>
          <Text style={styles.mainSubTitle}>{subTitle}</Text>
        </View>

        {buttonIcon && buttonTitle ? (
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={styles.buttonView}
              onPress={() => setopenModal(!openModal)}>
              {buttonIcon && buttonIcon}
              <Text style={styles.buttonTxt}>{buttonTitle}</Text>
            </TouchableOpacity>
          </View>
        ) : otherTitle ? (
          <View
            style={{
              ...styles.buttonContainer,
              width: '40%',
            }}>
            <Text style={styles.reviewTxt}>{otherTitle}</Text>
          </View>
        ) : (
          <View style={styles.buttonContainer} />
        )}
      </View>
      <Modal
        animationType="slide"
        visible={openModal}
        onRequestClose={() => setopenModal(!openModal)}>
        <StatusBar />
        <LinearGradient
          colors={[
            `${profileColorBg1}`,
            `${profileColorBg2}`,
            `${profileColorBg2}`,
          ]}
          style={styles.flexBg}>
          <AnimatedTopHeader style={styles.backButtonContainer}>
            <View style={styles.backButtonCircle}></View>
            <TouchableOpacity
              onPress={() => setopenModal(!openModal)}
              style={styles.backButtonCircle}>
              <CrossIcon
                width={scale(20)}
                height={scale(25)}
                fill={`${normalTxtColor}`}
              />
            </TouchableOpacity>
          </AnimatedTopHeader>
          <AnimatedView style={styles.childContainer}>{children}</AnimatedView>
        </LinearGradient>
      </Modal>
    </>
  );
};

export default ProfileHeaders;

const styles = StyleSheet.create({
  reviewTxt: {
    textAlign: 'center',
    fontSize: scale(11),
    lineHeight: scale(18),
    fontWeight: '400',
    color: normalTxtColor,
  },
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
  },
  flexBg: {
    width: '100%',
    height: '100%',
  },
  buttonTxt: {
    fontSize: scale(10),
    lineHeight: scale(18),
    fontWeight: '400',
    color: normalTxtColor,
    marginLeft: scale(5),
  },
  mainTitle: {
    fontSize: scale(15),
    lineHeight: scale(27),
    fontWeight: '700',
    color: normalTxtColor,
  },
  mainSubTitle: {
    fontSize: scale(10),
    lineHeight: scale(18),
    fontWeight: '400',
    color: profileHeaderSubtitle,
  },
  MainContainerView: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    height: scale(40),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    marginVertical: scale(15),
  },
  textContainer: {
    width: '70%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  buttonContainer: {
    width: '26%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  buttonView: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: profileSideButtonBg,
    paddingVertical: scale(14),
    borderRadius: scale(35),
    overflow: 'hidden',
  },
  backButtonContainer: {
    margin: scale(17),
    marginBottom: scale(7),
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
});
