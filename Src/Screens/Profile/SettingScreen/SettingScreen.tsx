import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  Modal,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  alertBg,
  alertBorderColor,
  cancelTxt,
  dullTxtColor,
  getVipBg,
  getVipColor,
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  lettersLeftColor,
  lightBlackBg,
  newPlaceHolderColor,
  normalTxtColor,
  placeHolderColor,
  proceedTxt,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  rewrdTxtColor,
  selectImageColor,
  signOutColor,
} from '../../../Utils/Colors';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {scale} from 'react-native-size-matters';
import {getWidthWithPercent} from '../../../Utils/Functions/GetStyles';
import ExitIcon from '../../../Utils/Assets/icons/ExitIcon';
import LogoutIcon from '../../../Utils/Assets/icons/LogoutIcon';
import CustomArrowAuthBtn from '../../../Components/CustomArrowAuthBtn';
import CustomBtnSimple from '../../../Components/CustomBtnSimple';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';
import NewScreenTemplate from '../../../Components/NewScreenTemplate';

interface Props {
  navigation: any;
}
const SettingScreen: React.FC<Props> = ({navigation}) => {
  const [signOutModal, setsignOutModal] = useState<boolean>(false);
  return (
    <>
      <NewScreenTemplate
        inVisibleChildren={
          <>
            <AnimatedTopHeader style={styles.backButtonContainer}>
              <TouchableOpacity
                onPress={() => navigation.pop()}
                style={styles.backButtonCircle}>
                <BackArrow width={scale(35)} fill={`${normalTxtColor}`} />
              </TouchableOpacity>
              <View style={styles.backButtonCircle} />
            </AnimatedTopHeader>
            <Text style={styles.ModalTitle}>{textString.sttingsHd}</Text>
            <Text style={styles.ModalSubTitle}>
              {textString.sttingsAccount}
            </Text>
          </>
        }
        bgChildren={
          <>
            <FlatList
              data={[]}
              renderItem={() => null}
              ListHeaderComponent={
                <>
                  <View
                    style={{...styles.genderItemContainer, height: scale(430)}}>
                    <LinearGradient
                      useAngle={true}
                      angle={100}
                      colors={[`${gradientColor1}`, `${gradientColor2}`]}
                      style={styles.genderItemContainerGrid}>
                      <View
                        style={{
                          ...styles.genderItemContainerGridSmall,
                          height: scale(428),
                        }}>
                        <View style={styles.logoutSection}>
                          <Text style={styles.reportTitle}>
                            {textString.accntInfoTxt}
                          </Text>
                          <Text
                            style={{
                              ...styles.reportSubTitle,
                              marginBottom: scale(22),
                            }}>
                            {textString.accntInfoUser}
                          </Text>
                          <View style={styles.fillMyBg}>
                            <Text style={styles.myInfoHeading}>
                              {textString.profImageTxt}
                            </Text>
                            <Image
                              source={require('../../../Utils/Assets/profileAvate.png')}
                              style={styles.avtarImage}
                            />
                            <Text style={styles.myInfoHeading}>
                              {textString.username}
                            </Text>
                            <Text style={styles.myInfoTxt}>John Doe</Text>
                            <Text style={styles.myInfoHeading}>
                              {textString.eailAddress}
                            </Text>
                            <Text style={styles.myInfoTxt}>John@gmail.com</Text>
                            <Text style={styles.myInfoHeading}>
                              {textString.gndrHedTxt}
                            </Text>
                            <Text style={styles.myInfoTxt}>Male</Text>
                            <Text style={styles.myInfoHeading}>
                              {textString.intrstTxtHd}
                            </Text>
                            <Text style={styles.myInfoTxt}>Female</Text>
                          </View>
                          <CustomBtnSimple
                            marginVertical={scale(1)}
                            title={textString.profEditTxtHd}
                            onClickFunction={() =>
                              navigation.navigate('EditProfileScreen')
                            }
                          />
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                  <View
                    style={{...styles.genderItemContainer, height: scale(170)}}>
                    <LinearGradient
                      useAngle={true}
                      angle={100}
                      colors={[`${gradientColor1}`, `${gradientColor2}`]}
                      style={styles.genderItemContainerGrid}>
                      <View
                        style={{
                          ...styles.genderItemContainerGridSmall,
                          height: scale(168),
                        }}>
                        <View
                          style={{
                            ...styles.logoutSection,
                            justifyContent: 'space-between',
                          }}>
                          <Text style={styles.reportTitle}>
                            {textString.rportTxt1HD}
                          </Text>
                          <Text style={styles.reportSubTitle}>
                            {textString.rportTxt1SD}
                          </Text>
                          <CustomBtnSimple
                            title={textString.rprtbTNiSUUtXT}
                            onClickFunction={() =>
                              navigation.navigate('ReportScreen')
                            }
                          />
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                  <View
                    style={{...styles.genderItemContainer, height: scale(240)}}>
                    <LinearGradient
                      useAngle={true}
                      angle={100}
                      colors={[`${gradientColor1}`, `${gradientColor2}`]}
                      style={styles.genderItemContainerGrid}>
                      <View
                        style={{
                          ...styles.genderItemContainerGridSmall,
                          height: scale(238),
                          paddingTop: scale(19),
                        }}>
                        <View style={styles.logoutSection}>
                          <ExitIcon />
                          <Text style={styles.logoutHeading}>
                            {textString.signOutHd}
                          </Text>
                          <Text style={styles.logoutSubHeading}>
                            {textString.signOutSd}
                          </Text>
                          <TouchableOpacity
                            onPress={() => setsignOutModal(!signOutModal)}
                            style={styles.signOutBtn}>
                            <LogoutIcon width={scale(14)} height={scale(13)} />
                            <Text style={styles.signoutTxt}>
                              {textString.signOutHd}
                            </Text>
                          </TouchableOpacity>
                        </View>
                      </View>
                    </LinearGradient>
                  </View>
                </>
              }
            />
          </>
        }
      />
      <Modal
        animationType="slide"
        visible={signOutModal}
        transparent={true}
        onRequestClose={() => setsignOutModal(!signOutModal)}>
        <View style={styles.dialogueContainer}>
          <TouchableOpacity
            style={styles.fillDivBtn}
            onPress={() => setsignOutModal(!signOutModal)}
          />
          <AnimatedView style={styles.alertContainer}>
            <Text style={styles.AlertTitle}>{textString.signOutHd}</Text>
            <Text style={styles.AlertEmail}>katty@gmail.com</Text>
            <Text style={styles.AlertMsg}>{textString.signoutAlertTxt}</Text>
            <View style={styles.buttonContainersDiv}>
              <TouchableOpacity
                onPress={() => setsignOutModal(!signOutModal)}
                style={styles.alertButton}>
                <Text style={styles.cancelTxt}>{textString.cnclBtnTxt}</Text>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => setsignOutModal(!signOutModal)}
                style={styles.alertButton}>
                <Text style={styles.proceedTxt}>{textString.prcdBtnTxt}</Text>
              </TouchableOpacity>
            </View>
          </AnimatedView>
          <TouchableOpacity
            style={styles.fillDivBtn}
            onPress={() => setsignOutModal(!signOutModal)}
          />
        </View>
      </Modal>
    </>
  );
};

export default SettingScreen;

const styles = StyleSheet.create({
  fillDivBtn: {width: '100%', flex: 1},
  cancelTxt: {
    fontSize: scale(16),
    fontWeight: '500',
    lineHeight: scale(24),
    color: cancelTxt,
  },
  proceedTxt: {
    fontSize: scale(16),
    fontWeight: '500',
    lineHeight: scale(24),
    color: proceedTxt,
  },
  alertButton: {
    width: '49.85%',
    height: '99%',
    backgroundColor: alertBg,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  AlertMsg: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '400',
    color: normalTxtColor,
    textAlign: 'center',
    alignSelf: 'center',
    width: '80%',
  },
  AlertEmail: {
    fontSize: scale(14),
    lineHeight: scale(16),
    fontWeight: '400',
    color: placeHolderColor,
    textAlign: 'center',
    alignSelf: 'center',
    width: '90%',
    marginVertical: scale(2),
  },
  AlertTitle: {
    fontSize: scale(16),
    lineHeight: scale(27),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
    alignSelf: 'center',
    width: '90%',
    marginTop: scale(10),
  },
  alertContainer: {
    backgroundColor: alertBg,
    width: getWidthWithPercent(76),
    borderRadius: scale(13),
    borderWidth: scale(1),
    borderColor: alertBorderColor,
    overflow: 'hidden',
  },
  buttonContainersDiv: {
    width: '100%',
    backgroundColor: alertBorderColor,
    marginTop: scale(15),
    height: scale(45),
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  dialogueContainer: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    backgroundColor: lightBlackBg,
  },
  reportSubTitle: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '300',
    color: newPlaceHolderColor,
    width: '100%',
    textAlign: 'left',
    marginBottom: scale(21),
  },
  reportTitle: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '600',
    color: normalTxtColor,
    width: '100%',
    textAlign: 'left',
  },
  signoutTxt: {
    lineHeight: scale(23),
    fontWeight: '700',
    fontSize: scale(12),
    color: normalTxtColor,
    marginLeft: scale(5),
  },
  signOutBtn: {
    margin: scale(19),
    marginBottom: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: scale(45),
    backgroundColor: signOutColor,
    borderRadius: scale(11),
    width: '100%',
  },
  logoutSubHeading: {
    color: normalTxtColor,
    fontSize: scale(12),
    fontWeight: '400',
    lineHeight: scale(16),
    textAlign: 'center',
  },
  logoutHeading: {
    color: normalTxtColor,
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(30),
  },
  logoutSection: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  genderItemContainer: {
    width: getWidthWithPercent(87),
    height: scale(118),
    borderRadius: scale(11),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    marginTop: scale(20),
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
    borderRadius: scale(11),
    paddingHorizontal: scale(23),
    paddingVertical: scale(13),
    overflow: 'hidden',
  },
  mainContainerWidth: {
    width: getWidthWithPercent(87),
    flex: 1,
    alignSelf: 'center',
  },
  fillMyBg: {
    width: '100%',
    flex: 1,
  },
  myInfoHeading: {
    fontSize: scale(11),
    lineHeight: scale(14),
    fontWeight: '400',
    color: placeHolderColor,
  },
  avtarImage: {
    width: '100%',
    height: scale(88),
    overflow: 'hidden',
    marginBottom: scale(7),
    marginTop: scale(3),
    alignSelf: 'center',
  },
  myInfoTxt: {
    fontSize: scale(15),
    lineHeight: scale(24),
    fontWeight: '700',
    color: normalTxtColor,
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
  backButtonContainer: {
    margin: scale(17),
    height: scale(45),
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    alignSelf: 'center',
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
