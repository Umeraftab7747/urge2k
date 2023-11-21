import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  Image,
  TextInput,
  Modal,
  StatusBar,
} from 'react-native';
import React, {useState} from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {
  getVipBg,
  getVipColor,
  gradientColor1,
  gradientColor2,
  gradientColorBg0,
  gradientColorBg1,
  inputBackgroundColor,
  lettersLeftColor,
  lightBlackBg,
  modalAccountColor,
  normalTxtColor,
  placeHolderColor,
  playerMsgBg,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  rewrdTxtColor,
  selectImageColor,
  signOutColor,
  starsBg,
} from '../../../Utils/Colors';
import BackArrow from '../../../Utils/Assets/icons/BackArrow';
import {scale} from 'react-native-size-matters';
import SettingIcon from '../../../Utils/Assets/icons/SettingIcon';
import Svg, {G, Rect, Path, Defs} from 'react-native-svg';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../../Utils/Functions/GetStyles';
import GoldCoin from '../../../Utils/Assets/icons/GoldCoin';
import BadgeCrown from '../../../Utils/Assets/icons/BadgeCrown';
import CartIcon from '../../../Utils/Assets/icons/CartIcon';
import GoldCrown from '../../../Utils/Assets/icons/GoldCrown';
import ProfileHeaders from '../../../Components/ProfileHeaders';
import EditIcon from '../../../Utils/Assets/icons/EditIcon';
import UploadCloud from '../../../Utils/Assets/icons/UploadCloud';
import NextArrow from '../../../Utils/Assets/icons/NextArrow';
import CustomBtnSimple from '../../../Components/CustomBtnSimple';
import AppCurrency from '../../../Utils/Assets/icons/AppCurrency';
import WithDrawIcon from '../../../Utils/Assets/icons/WithDrawIcon';
import HeartIcon from '../../../Utils/Assets/icons/HeartIcon';
import StarIcon from '../../../Utils/Assets/icons/StarIcon';
import VoiceNotesShowIcon from '../../../Utils/Assets/icons/VoiceNoteShowIcon';
import UnlockIcon from '../../../Utils/Assets/icons/UnlockIcon';
import MicIcon from '../../../Utils/Assets/icons/MicIcon';
import CrossIcon from '../../../Utils/Assets/icons/CrossIcon';
import PlayIcon from '../../../Utils/Assets/icons/PlayIcon';
import CustomDropDown from '../../../Components/CustomDropDown';
import TrashIcon from '../../../Utils/Assets/icons/TrashIcon';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';
import NewScreenTemplate from '../../../Components/NewScreenTemplate';

interface Props {
  navigation: any;
}

const ModalProfileScreen: React.FC<Props> = ({navigation}) => {
  const [playingAudioModal, setPlayingAudioModal] = useState<boolean>(false);
  const [promoteModal, setPromoteModal] = useState<boolean>(false);
  const [promationPackageValue, setpromationPackageValue] =
    useState<string>('');
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
              <TouchableOpacity
                onPress={() => navigation.navigate('SettingScreen')}
                style={styles.backButtonCircle}>
                <SettingIcon
                  width={scale(32)}
                  height={scale(30)}
                  fill={`${normalTxtColor}`}
                />
              </TouchableOpacity>
            </AnimatedTopHeader>
            <Image
              source={require('../../../Utils/Assets/profileAvate.png')}
              style={styles.avtarImage}
            />
            <Text style={styles.usernameTxt}>kristy 12</Text>
            <Text style={styles.emailTxt}>loremipsum@123.com</Text>
          </>
        }
        bgChildren={
          <>
            <View style={styles.genderItemContainer}>
              <LinearGradient
                useAngle={true}
                angle={100}
                colors={[`${gradientColor1}`, `${gradientColor2}`]}
                style={styles.genderItemContainerGrid}>
                <View style={styles.genderItemContainerGridSmall}>
                  <View style={styles.firstContainerDiv}>
                    <Text style={styles.coinWalletTxt}>
                      {textString.walletBalanceTxt}
                    </Text>
                    <View style={styles.rowDiv}>
                      <AppCurrency />
                      <Text style={styles.goldCoinsTxt}>0</Text>
                    </View>
                    <View style={styles.rowDiv}>
                      <Text style={styles.badgeTxt}>
                        {textString.modalAccountTxtHd}
                      </Text>
                    </View>
                  </View>
                  <View style={styles.buttonContainerDiv}>
                    <TouchableOpacity
                      style={{
                        ...styles.customBtnOutlay,
                        borderRadius: scale(10),
                      }}
                      onPress={() => navigation.navigate('WithDrawMoney')}>
                      <LinearGradient
                        colors={[`${gradientColor1}`, `${gradientColor2}`]}
                        useAngle={true}
                        angle={100}
                        style={styles.linearGradient}>
                        <WithDrawIcon height={scale(12)} width={scale(12)} />
                        <Text style={styles.btnTxt}>
                          {textString.withdrwTxtHd}
                        </Text>
                      </LinearGradient>
                    </TouchableOpacity>
                  </View>
                </View>
              </LinearGradient>
            </View>
            <ProfileHeaders
              title={textString.rattingsHdMain}
              subTitle={textString.WyPPlServs}
            />
            <View style={{...styles.bottomContainer, height: scale(110)}}>
              <View style={styles.ratingMainDiv}>
                <View style={styles.heartsDiv}>
                  <HeartIcon />
                  <Text style={styles.heartsValue}>(0)</Text>
                </View>
                <View style={styles.starsDiv}>
                  <StarIcon />
                  <Text style={styles.starsValue}>(0)</Text>
                </View>
              </View>
            </View>
            <ProfileHeaders
              title={textString.aboutMe}
              subTitle={textString.aboutMeSub}
              buttonTitle={textString.edit}
              buttonIcon={<EditIcon height={scale(16)} width={scale(13)} />}
              children={
                <>
                  <Text style={styles.ModalTitle}>{textString.editBioMn}</Text>
                  <Text style={styles.ModalSubTitle}>
                    {textString.editBioSb}
                  </Text>
                  <View style={styles.otherContentDiv}>
                    <FlatList
                      data={[]}
                      renderItem={({}) => null}
                      ListHeaderComponent={
                        <>
                          <View
                            style={{
                              ...styles.genderItemContainer,
                              height: scale(187),
                              borderRadius: scale(11),
                            }}>
                            <LinearGradient
                              useAngle={true}
                              angle={100}
                              colors={[
                                `${gradientColor1}`,
                                `${gradientColor2}`,
                              ]}
                              style={styles.genderItemContainerGrid}>
                              <View
                                style={{
                                  ...styles.genderItemContainerGridSmall,
                                  ...styles.AboutMeInputContainer,
                                }}>
                                <TextInput
                                  style={styles.AboutMeInput}
                                  placeholderTextColor={profileHeaderSubtitle}
                                  numberOfLines={8}
                                  multiline={true}
                                  placeholder={textString.descbSelf200}
                                />
                              </View>
                            </LinearGradient>
                          </View>
                          <Text style={styles.remiainingTxt}>
                            200 {textString.moreChrctr}
                          </Text>
                        </>
                      }
                      ListFooterComponent={
                        <>
                          <CustomBtnSimple
                            title={textString.saveTxt}
                            onClickFunction={() => console.log('done')}
                          />
                        </>
                      }
                    />
                  </View>
                </>
              }
            />
            <View style={styles.bottomContainer}>
              <View style={styles.emptyTxt}>
                <Text style={styles.emptyText}>{textString.tellAbtU}</Text>
              </View>
            </View>
            <ProfileHeaders
              title={textString.voiceNt}
              subTitle={textString.urDose}
              buttonIcon={<MicIcon height={scale(16)} width={scale(13)} />}
              buttonTitle={textString.addTxt}
              children={
                <>
                  <Text style={styles.ModalTitle}>
                    {textString.craeteAudTxt}
                  </Text>
                  <Text style={styles.ModalSubTitle}>
                    {textString.craeteAudTxtSb}
                  </Text>
                  <View style={styles.otherContentDiv}>
                    <FlatList
                      data={[]}
                      renderItem={({}) => null}
                      ListHeaderComponent={
                        <>
                          <View style={styles.genderItemContainerRecording}>
                            <LinearGradient
                              useAngle={true}
                              angle={100}
                              colors={[
                                `${gradientColor1}`,
                                `${gradientColor2}`,
                              ]}
                              style={styles.genderItemContainerGrid}>
                              <MicIcon height={scale(28)} />
                              <Text style={styles.recordAudioBtnTxt}>
                                {textString.rcrdAud}
                              </Text>
                            </LinearGradient>
                          </View>
                          <FlatList
                            style={{
                              ...styles.bottomContainer,
                              height: scale(80),
                            }}
                            data={[0, 1]}
                            contentContainerStyle={{
                              paddingVertical: scale(2),
                              alignItems: 'center',
                              height: scale(80),
                            }}
                            renderItem={({item}) => (
                              <>
                                <TouchableOpacity
                                  style={{marginVertical: scale(2)}}>
                                  <VoiceNotesShowIcon />
                                </TouchableOpacity>
                              </>
                            )}
                            ItemSeparatorComponent={() => (
                              <View style={{marginHorizontal: scale(7)}} />
                            )}
                            horizontal
                            ListEmptyComponent={
                              <View style={styles.bottomContainer}>
                                <View style={styles.emptyTxt}>
                                  <Text style={styles.emptyText}>
                                    {textString.noVoices}
                                  </Text>
                                </View>
                              </View>
                            }
                          />
                          <View
                            style={{
                              ...styles.rowDivSwipeLeft,
                              marginBottom: scale(30),
                            }}>
                            <Text style={styles.swipeTxt}>
                              {textString.swipLeft}
                            </Text>
                            <NextArrow
                              fill={profileHeaderSubtitle}
                              height={scale(18)}
                            />
                          </View>
                        </>
                      }
                      ListFooterComponent={
                        <>
                          <CustomBtnSimple
                            title={textString.saveTxt}
                            onClickFunction={() => console.log('done')}
                          />
                        </>
                      }
                    />
                  </View>
                </>
              }
            />

            <FlatList
              style={{
                ...styles.bottomContainer,
                height: scale(80),
              }}
              data={[0, 1]}
              contentContainerStyle={{
                paddingVertical: scale(2),
                alignItems: 'center',
                height: scale(80),
              }}
              renderItem={({item}) => (
                <>
                  <TouchableOpacity
                    onPress={() => setPlayingAudioModal(!playingAudioModal)}>
                    <VoiceNotesShowIcon />
                  </TouchableOpacity>
                </>
              )}
              ItemSeparatorComponent={() => (
                <View style={{marginHorizontal: scale(7)}} />
              )}
              horizontal
              ListEmptyComponent={
                <View style={styles.bottomContainer}>
                  <View style={styles.emptyTxt}>
                    <Text style={styles.emptyText}>{textString.noVoices}</Text>
                  </View>
                </View>
              }
            />
            <ProfileHeaders
              title={textString.gallery}
              subTitle={textString.photVid}
              buttonTitle={textString.uploads}
              buttonIcon={<UploadCloud height={scale(16)} width={scale(16)} />}
              children={
                <>
                  <Text style={styles.ModalTitle}>
                    {textString.uploadMedHd}
                  </Text>
                  <Text style={styles.ModalSubTitle}>
                    {textString.uploadMedSb}
                  </Text>
                  <View style={styles.otherContentDiv}>
                    <FlatList
                      data={[]}
                      renderItem={({}) => null}
                      ListHeaderComponent={
                        <>
                          <View
                            style={{
                              ...styles.genderItemContainer,
                              height: scale(187),
                              borderRadius: scale(11),
                            }}>
                            <LinearGradient
                              useAngle={true}
                              angle={100}
                              colors={[
                                `${gradientColor1}`,
                                `${gradientColor2}`,
                              ]}
                              style={styles.genderItemContainerGrid}>
                              <View
                                style={{
                                  ...styles.genderItemContainerGridSmall,
                                  ...styles.AboutMeInputContainer,
                                  alignItems: 'center',
                                  justifyContent: 'center',
                                  flexDirection: 'column',
                                }}>
                                <UploadCloud
                                  height={scale(70)}
                                  width={scale(70)}
                                  fill={profileHeaderSubtitle}
                                />
                                <View style={styles.selectImageContainerView}>
                                  <Text style={styles.selectImageTxt}>
                                    {textString.selectNimg}
                                  </Text>
                                </View>
                              </View>
                            </LinearGradient>
                          </View>
                          <Text style={styles.uploadImageTxtBox}>
                            {textString.uploadImgs}
                          </Text>
                          <View style={styles.bottomContainer}>
                            <View style={styles.emptyTxt}>
                              <Text style={styles.emptyText}>
                                {textString.noMedFnd}
                              </Text>
                            </View>
                          </View>
                        </>
                      }
                      ListFooterComponent={
                        <CustomBtnSimple
                          title={textString.uploadMedHd}
                          onClickFunction={() => console.log('done')}
                        />
                      }
                    />
                  </View>
                </>
              }
            />
            <FlatList
              style={{...styles.bottomContainer, height: scale(245)}}
              data={[0, 1, 3, 4, 5]}
              renderItem={({item}) => (
                <>
                  <TouchableOpacity style={{marginVertical: scale(2)}}>
                    <Image
                      style={{
                        width: scale(152),
                        height: scale(245),
                        borderRadius: scale(22),
                      }}
                      source={require('../../../Utils/Assets/GetStart.jpg')}
                    />
                  </TouchableOpacity>
                </>
              )}
              ItemSeparatorComponent={() => <View style={{width: scale(20)}} />}
              horizontal
              ListEmptyComponent={
                <View style={styles.bottomContainer}>
                  <View style={styles.emptyTxt}>
                    <Text style={styles.emptyText}>{textString.noMedFnd}</Text>
                  </View>
                </View>
              }
            />
            <View style={styles.rowDivSwipeLeft}>
              <Text style={styles.swipeTxt}>{textString.swipLeft}</Text>
              <NextArrow fill={profileHeaderSubtitle} height={scale(18)} />
            </View>
            <ProfileHeaders
              title={textString.trasctHd}
              subTitle={textString.trasctSb}
            />
            <View style={styles.bottomContainer}>
              <View style={styles.emptyTxt}>
                <Text style={styles.emptyText}>{textString.trasctMT}</Text>
              </View>
            </View>
            <View style={styles.bottomContainer}>
              <CustomBtnSimple
                title={textString.promoteYrSElfTxt}
                onClickFunction={() => setPromoteModal(!promoteModal)}
              />
            </View>
          </>
        }
      />

      <Modal
        animationType="slide"
        visible={playingAudioModal}
        onRequestClose={() => setPlayingAudioModal(!playingAudioModal)}
        transparent>
        <StatusBar />
        <View style={styles.flexBgModal}>
          <AnimatedTopHeader style={styles.backButtonContainer}>
            <View style={styles.backButtonCircle}></View>
            <TouchableOpacity
              onPress={() => setPlayingAudioModal(!playingAudioModal)}
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
              onPress={() => setPlayingAudioModal(!playingAudioModal)}
              style={styles.flexBg}
            />
            <View style={styles.voiceNotePlayerDiv}>
              <LinearGradient
                colors={[`${gradientColor2}`, `${gradientColor1}`]}
                style={{
                  ...styles.genderItemContainerGrid,
                  borderRadius: scale(22),
                }}>
                <PlayIcon />
                <Text style={styles.playerMsgState}>{textString.plyAudio}</Text>
              </LinearGradient>
            </View>
            <TouchableOpacity
              onPress={() => setPlayingAudioModal(!playingAudioModal)}
              style={styles.flexBg}
            />
            <TouchableOpacity
              onPress={() => console.log('dor')}
              style={styles.deleteButtonDiv}>
              <View style={styles.delteButtonView}>
                <TrashIcon />
                <Text style={styles.deleteTxt}>| {textString.plyAudio}</Text>
              </View>
            </TouchableOpacity>
          </AnimatedView>
        </View>
      </Modal>
      <Modal
        animationType="slide"
        visible={promoteModal}
        onRequestClose={() => setPromoteModal(!promoteModal)}>
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
              onPress={() => setPromoteModal(!promoteModal)}
              style={styles.backButtonCircle}>
              <CrossIcon
                width={scale(20)}
                height={scale(25)}
                fill={`${normalTxtColor}`}
              />
            </TouchableOpacity>
          </AnimatedTopHeader>
          <AnimatedView
            style={{...styles.childContainer, alignItems: 'flex-start'}}>
            <Text style={styles.ModalTitle}>{textString.uploadMedHd}</Text>
            <Text style={styles.ModalSubTitle}>{textString.uploadMedSb}</Text>
            <View style={styles.otherContentDiv}>
              <FlatList
                data={[]}
                renderItem={({}) => null}
                ListHeaderComponent={
                  <>
                    <View
                      style={{
                        ...styles.genderItemContainer,
                        height: scale(187),
                        borderRadius: scale(11),
                      }}>
                      <LinearGradient
                        useAngle={true}
                        angle={100}
                        colors={[`${gradientColor1}`, `${gradientColor2}`]}
                        style={styles.genderItemContainerGrid}>
                        <View
                          style={{
                            ...styles.genderItemContainerGridSmall,
                            ...styles.AboutMeInputContainer,
                            alignItems: 'center',
                            justifyContent: 'center',
                            flexDirection: 'column',
                          }}>
                          <UploadCloud
                            height={scale(70)}
                            width={scale(70)}
                            fill={profileHeaderSubtitle}
                          />
                          <View style={styles.selectImageContainerView}>
                            <Text style={styles.selectImageTxt}>
                              {textString.selectNimg}
                            </Text>
                          </View>
                        </View>
                      </LinearGradient>
                    </View>
                    <Text style={styles.uploadImageTxtBox}>Upload Images</Text>
                    <CustomDropDown
                      borderRadius={scale(11)}
                      width={getWidthWithPercent(87)}
                      placeHolderText={textString.selectPromPkg}
                      dataList={[
                        {
                          id: '0',
                          label: '10$ for 5 days',
                          value: '10',
                        },
                        {
                          id: '1',
                          label: '20$ for 10 days',
                          value: '20',
                        },
                        {
                          id: '2',
                          label: '30$ for 15 days',
                          value: '30',
                        },
                      ]}
                      value={promationPackageValue}
                      onChangeValue={text => setpromationPackageValue(text)}
                    />
                    <View style={{height: scale(40)}} />
                  </>
                }
                ListFooterComponent={
                  <CustomBtnSimple
                    title={textString.submtTxt}
                    onClickFunction={() => console.log('done')}
                  />
                }
              />
            </View>
          </AnimatedView>
        </LinearGradient>
      </Modal>
    </>
  );
};

export default ModalProfileScreen;

const styles = StyleSheet.create({
  deleteButtonDiv: {
    width: scale(130),
    position: 'absolute',
    bottom: scale(10),
    height: scale(35),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
    borderRadius: scale(35),
  },
  deleteTxt: {
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: normalTxtColor,
    marginLeft: scale(3),
  },
  delteButtonView: {
    width: '100%',
    height: '100%',
    backgroundColor: gradientColor1,
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  playerMsgState: {
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: playerMsgBg,
    marginTop: scale(20),
  },
  voiceNotePlayerDiv: {
    width: '100%',
    height: getHeightWithPercent(25),
    borderRadius: scale(22),
    overflow: 'hidden',
  },
  flexBgModal: {
    width: '100%',
    height: '100%',
    backgroundColor: lightBlackBg,
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
  recordAudioBtnTxt: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '300',
    color: normalTxtColor,
    textAlign: 'center',
    marginTop: scale(10),
  },
  unLockTxt: {
    fontSize: scale(10),
    lineHeight: scale(12),
    fontWeight: '700',
    color: normalTxtColor,
    width: '90%',
    textAlign: 'center',
    marginTop: scale(10),
  },
  UnlockMoreDiv: {
    width: scale(75),
    height: scale(69),
    marginLeft: scale(14),
    marginBottom: scale(2),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: scale(14),
  },
  heartsValue: {
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: normalTxtColor,
  },
  starsValue: {
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: profileColorBg2,
  },
  heartsDiv: {
    width: '49%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: signOutColor,
    borderRadius: scale(12),
  },
  starsDiv: {
    width: '49%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: starsBg,
    borderRadius: scale(12),
  },
  ratingMainDiv: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  selectImageTxt: {
    fontSize: scale(12),
    fontWeight: '400',
    color: profileHeaderSubtitle,
  },
  selectImageContainerView: {
    height: scale(45),
    width: scale(130),
    borderRadius: scale(48),
    backgroundColor: selectImageColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    overflow: 'hidden',
    marginTop: scale(19),
  },
  uploadImageTxtBox: {
    fontSize: scale(13),
    lineHeight: scale(20),
    fontWeight: '500',
    textAlign: 'left',
    color: normalTxtColor,
    marginVertical: scale(19),
  },
  AboutMeInputContainer: {
    height: scale(185),
    borderRadius: scale(11),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(10),
  },
  AboutMeInput: {
    width: '100%',
    // height: '100%',
    textAlign: 'left',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: profileHeaderSubtitle,
    textAlignVertical: 'top',
  },
  remiainingTxt: {
    color: lettersLeftColor,
    fontSize: scale(11),
    lineHeight: scale(18),
    fontWeight: '400',
    textAlign: 'left',
    marginTop: scale(15),
    marginBottom: scale(20),
  },
  largeModalButton: {
    borderRadius: scale(10),
    height: scale(54),
    marginVertical: scale(15),
  },
  newBtnTxt: {fontSize: scale(20), lineHeight: scale(30), fontWeight: '400'},
  otherContentDiv: {
    width: '100%',
    flex: 1,
    marginTop: scale(15),
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

  swipeTxt: {
    color: profileHeaderSubtitle,
    fontSize: scale(10),
    lineHeight: scale(18),
    fontWeight: '400',
    marginRight: scale(1),
  },
  emptyTxt: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  emptyText: {
    fontSize: scale(14),
    lineHeight: scale(30),
    fontWeight: '300',
    color: profileHeaderSubtitle,
  },
  rowDivSwipeLeft: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    backgroundColor: profileColorBg2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    marginTop: scale(10),
  },
  bottomContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    height: scale(130),
    backgroundColor: profileColorBg2,
  },
  buttonContainerDiv: {
    width: '38%',
    height: '100%',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'column',
  },
  blackBtnShadow: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.45,
    shadowRadius: 3.84,

    elevation: 5,
  },
  customBtnOutlay: {
    width: '100%',
    height: scale(30),
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    borderRadius: scale(54),
    overflow: 'hidden',
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
    fontWeight: '400',
    lineHeight: scale(16),
    textAlign: 'center',
    color: normalTxtColor,
    marginLeft: scale(3),
  },
  badgeTxt: {
    fontSize: scale(12),
    fontWeight: '300',
    lineHeight: scale(16),
    textAlign: 'left',
    color: modalAccountColor,
  },
  goldCoinsTxt: {
    lineHeight: scale(35),
    fontSize: scale(27),
    fontWeight: '500',
    textAlign: 'left',
    color: normalTxtColor,
  },
  coinWalletTxt: {
    color: normalTxtColor,
    fontSize: scale(12),
    fontWeight: '400',
    textAlign: 'left',
  },
  rowDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  firstContainerDiv: {
    height: '100%',
    width: '62%',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  genderItemContainerRecording: {
    width: scale(130),
    height: scale(130),
    borderRadius: scale(150),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    marginVertical: scale(45),
  },
  genderItemContainer: {
    width: getWidthWithPercent(87),
    height: scale(98),
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
    width: getWidthWithPercent(86.5),
    height: scale(98) - 3,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(20),
    paddingHorizontal: scale(23),
    paddingVertical: scale(13),
    overflow: 'hidden',
  },
  flexBg: {
    width: '100%',
    height: '100%',
  },
  usernameTxt: {
    marginTop: scale(15),
    fontSize: scale(18),
    fontWeight: '700',
    lineHeight: scale(20),
    color: normalTxtColor,
    textAlign: 'center',
  },
  emailTxt: {
    marginBottom: scale(15),
    fontSize: scale(11),
    fontWeight: '400',
    lineHeight: scale(15),
    color: normalTxtColor,
    textAlign: 'center',
  },
  avtarImage: {
    width: scale(95),
    height: scale(95),
    borderRadius: scale(108),
    overflow: 'hidden',
    marginTop: scale(35),
    alignSelf: 'center',
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
  contentContainerBg: {
    width: '100%',
    flex: 1,
  },
});
