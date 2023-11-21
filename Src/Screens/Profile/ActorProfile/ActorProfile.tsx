import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Image,
  ImageBackground,
  StatusBar,
  Modal,
} from 'react-native';
import Carousel from 'react-native-snap-carousel';
import React, {useRef, useState} from 'react';
import {
  alertBorderColor,
  beginCallbg,
  errorBg,
  genderTextColor,
  goodGoColor,
  gradientColor1,
  gradientColor2,
  gradientColorBg0,
  gradientColorBg1,
  inputBackgroundColor,
  lightBlackBg,
  newGradientBg,
  newGradientBg2,
  newProfilebg1,
  newProfilebg2,
  normalTxtColor,
  placeHolderColor,
  playerMsgBg,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  profileSideButtonBg,
  reviewDetail,
} from '../../../Utils/Colors/index';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {
  getHeightWithPercent,
  getWidthWithPercent,
} from '../../../Utils/Functions/GetStyles';
import ActorCallIcon from '../../../Utils/Assets/icons/ActorCallIcon';
import ActorVideoIcon from '../../../Utils/Assets/icons/ActorVideoIcon';
import ActorChatIcon from '../../../Utils/Assets/icons/ActorChatIcon';
import ActorGiftIcon from '../../../Utils/Assets/icons/ActorGiftIcon';
import ActorBackIcon from '../../../Utils/Assets/icons/ActorBackIcon';
import ProfileIcon from '../../../Utils/Assets/icons/ProfileIcon';
import HeartIcon from '../../../Utils/Assets/icons/HeartIcon';
import StarIcon from '../../../Utils/Assets/icons/StarIcon';
import ProfileHeaders from '../../../Components/ProfileHeaders';
import NextArrow from '../../../Utils/Assets/icons/NextArrow';
import UnlockIcon from '../../../Utils/Assets/icons/UnlockIcon';
import VoiceNotesShowIcon from '../../../Utils/Assets/icons/VoiceNoteShowIcon';
import TrashIcon from '../../../Utils/Assets/icons/TrashIcon';
import PlayIcon from '../../../Utils/Assets/icons/PlayIcon';
import CrossIcon from '../../../Utils/Assets/icons/CrossIcon';
import CustomBtnSimple from '../../../Components/CustomBtnSimple';
import KingIcon from '../../../Utils/Assets/icons/KingIcon';
import GiftRose from '../../../Utils/Assets/icons/GiftRose';
import GiftBouqet from '../../../Utils/Assets/icons/GiftBouqet';
import GiftBikni from '../../../Utils/Assets/icons/GiftBikni';
import GiftTrip from '../../../Utils/Assets/icons/GiftTrip';
import GiftSpa from '../../../Utils/Assets/icons/GiftSpa';
import GiftAdd from '../../../Utils/Assets/icons/GiftAdd';
import CustomGridBorderInput from '../../../Components/CustomGridBorderInput';
import ClockIcon from '../../../Utils/Assets/icons/ClockIcon';
import BellIcon from '../../../Utils/Assets/icons/BellIcon';
import MicButtonIcon from '../../../Utils/Assets/icons/MicButtonIcon';
import DropCallButtonIcon from '../../../Utils/Assets/icons/DropCallButtonIcon';
import CoinButtonIcon from '../../../Utils/Assets/icons/CoinButtonIcon';
import ReviewStar from '../../../Utils/Assets/icons/ReviewStar';
import CircleDoneIcon from '../../../Utils/Assets/icons/CircleDoneIcon';
import {textString} from '../../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../../AnimatedComponents/AnimatedView';
import NewScreenTemplate from '../../../Components/NewScreenTemplate';
import SubscribeModal from '../../../Components/SubscribeModal';

interface Props {
  navigation: any;
}
const ActorProfile: React.FC<Props> = ({navigation}) => {
  const [playingAudioModal, setPlayingAudioModal] = useState<boolean>(false);
  const [openPremiumModal, setopenPremiumModal] = useState<boolean>(false);
  const [sendGiftModal, setsendGiftModal] = useState<boolean>(false);
  const [customGiftView, setCustomGiftView] = useState<boolean>(false);
  const [customGiftValue, setCustomGiftValue] = useState<string>('20 ');
  const [buyCoinsModal, setBuyCoinsModal] = useState<boolean>(false);
  const [callSettingModal, setCallSettingModal] = useState<boolean>(false);
  const [callModal, setCallModal] = useState<boolean>(false);
  const crouselRef = useRef(null);
  return (
    <>
      <NewScreenTemplate
        inVisibleChildren={
          <AnimatedTopHeader>
            <LinearGradient
              colors={[`${newProfilebg1}`, `${newProfilebg2}`]}
              style={styles.recentOuterContainer}>
              <ImageBackground
                source={require('../../../Utils/Assets/backup.jpg')}
                resizeMode="cover"
                style={{
                  ...styles.recentInnerContainer,
                  backgroundColor: normalTxtColor,
                }}>
                <View
                  style={{
                    ...styles.recentInnerContainer,
                    position: 'relative',
                  }}>
                  <TouchableOpacity
                    onPress={() => navigation.pop()}
                    style={styles.backButton}>
                    <ActorBackIcon width={scale(45)} height={scale(45)} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setCallSettingModal(!callSettingModal)}
                    style={styles.callButton}>
                    <ActorCallIcon width={scale(45)} height={scale(45)} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setCallSettingModal(!callSettingModal)}
                    style={styles.vidoButton}>
                    <ActorVideoIcon width={scale(45)} height={scale(45)} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('ChatRoomScreen')}
                    style={styles.chatButton}>
                    <ActorChatIcon width={scale(45)} height={scale(45)} />
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setsendGiftModal(!sendGiftModal)}
                    style={styles.giftButton}>
                    <ActorGiftIcon width={scale(45)} height={scale(45)} />
                  </TouchableOpacity>
                  <View style={styles.bottomUserInfo}>
                    <ProfileIcon width={scale(22)} height={scale(22)} />
                    <View style={styles.TextContenrBottom}>
                      <Text style={styles.bottomUserName}>Jayjay</Text>
                      <Text style={styles.bottomLanguage}>English, Igbo</Text>
                    </View>
                    <View
                      style={{
                        ...styles.TextContenrBottom,
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        flexDirection: 'row',
                        flex: 1 / 1.7,
                      }}>
                      <View style={styles.numberContainer}>
                        <View style={styles.numberView}>
                          <Text style={styles.ratingTxt}>0</Text>
                        </View>
                        <HeartIcon width={scale(20)} height={scale(20)} />
                      </View>
                      <View style={styles.numberContainer}>
                        <View style={styles.numberView}>
                          <Text style={styles.ratingTxt}>0</Text>
                        </View>
                        <StarIcon width={scale(20)} height={scale(20)} />
                      </View>
                    </View>
                  </View>
                </View>
              </ImageBackground>
            </LinearGradient>
          </AnimatedTopHeader>
        }
        bgChildren={
          <>
            <ProfileHeaders
              title={textString.aboutSimple}
              subTitle={textString.aboutSubSimple + 'Jayjay'}
            />
            <View style={styles.bottomContainer}>
              <View style={styles.emptyTxt}>
                <Text style={styles.emptyText}>{textString.nothingYetTxt}</Text>
              </View>
            </View>
            <ProfileHeaders
              title={textString.voiceNt}
              subTitle={textString.urDose}
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
              ListFooterComponent={
                <TouchableOpacity
                  onPress={() => setopenPremiumModal(!openPremiumModal)}>
                  <LinearGradient
                    colors={[`${gradientColorBg0}`, `${gradientColorBg1}`]}
                    style={styles.UnlockMoreDiv}>
                    <UnlockIcon />
                    <Text style={styles.unLockTxt}>
                      {textString.watchListen}
                    </Text>
                  </LinearGradient>
                </TouchableOpacity>
              }
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
            />
            <FlatList
              style={{...styles.bottomContainer, height: scale(245)}}
              data={[0, 1, 3, 4, 5]}
              renderItem={({item}) => (
                <>
                  <View style={styles.galleryImageContainer}>
                    <ImageBackground
                      style={styles.backgroundImageGallery}
                      source={require('../../../Utils/Assets/GetStart.jpg')}>
                      <TouchableOpacity style={styles.viewBtn}>
                        <Text style={styles.viewTxt}>{textString.view}</Text>
                      </TouchableOpacity>
                    </ImageBackground>
                  </View>
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
              title={textString.reviews}
              subTitle="Jayjay reviews and ratings"
              otherTitle={`1+ ${textString.reviews}`}
            />
            {[0, 1, 3, 4, 5] ? (
              <Carousel
                ref={crouselRef}
                data={[0, 1, 3, 4, 5]}
                renderItem={({item, index}) => (
                  <View style={styles.reviewContainerMain}>
                    <View style={styles.reviewContainerMsg}>
                      <View style={styles.reviewMsgView}>
                        <Text style={styles.reviewMsg}>
                          we are here to make your financial wishes come through
                          like aladdin.
                        </Text>
                      </View>
                      <View style={styles.reviewStarView}>
                        <Text style={styles.reviewNumber}>
                          <ReviewStar width={scale(13)} height={scale(13)} /> 4
                        </Text>
                      </View>
                    </View>
                    <View style={styles.reviewContainerDetails}>
                      <Text style={styles.reviewDetailTxt}>
                        Sirdavis99{' '}
                        <Text style={{color: reviewDetail}}>
                          | October 3rd 2021, 4:23:49 am
                        </Text>
                      </Text>
                    </View>
                  </View>
                )}
                sliderWidth={getWidthWithPercent(90)}
                itemWidth={getWidthWithPercent(90)}
              />
            ) : (
              <View style={styles.bottomContainer}>
                <View style={styles.emptyTxt}>
                  <Text style={styles.emptyText}>{textString.noReviewYet}</Text>
                </View>
              </View>
            )}
            <View style={{marginBottom: scale(20)}} />
            <View style={styles.lowerBorder} />
            <Text style={styles.drpRatingHead}>{textString.drpRating}</Text>
            <View style={styles.starContainerView}>
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
              <StarIcon />
            </View>
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
                  }}>
                  <TextInput
                    style={styles.AboutMeInput}
                    placeholderTextColor={profileHeaderSubtitle}
                    numberOfLines={8}
                    multiline={true}
                    editable
                    placeholder={textString.writeReviw}
                  />
                </View>
              </LinearGradient>
            </View>
            <View style={styles.goodToGoView}>
              <CircleDoneIcon />
              <Text style={styles.goodToTxt}>{textString.gd2go}</Text>
            </View>
            <CustomBtnSimple
              title={textString.sveRevw}
              onClickFunction={() => console.log('done')}
            />
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
          </AnimatedView>
        </View>
      </Modal>
      <SubscribeModal
        modalValue={openPremiumModal}
        closingFunction={() => setopenPremiumModal(!openPremiumModal)}
        buttonOnPress={() => navigation.navigate('SubscribeScreen')}
      />
      <Modal
        animationType="slide"
        visible={sendGiftModal}
        onRequestClose={() => setsendGiftModal(!sendGiftModal)}
        transparent>
        <StatusBar />
        <View style={styles.flexBgModal}>
          <AnimatedTopHeader style={styles.backButtonContainer}>
            <View style={styles.backButtonCircle}></View>
            <TouchableOpacity
              onPress={() => setsendGiftModal(!sendGiftModal)}
              style={styles.backButtonCircle}>
              <CrossIcon
                width={scale(20)}
                height={scale(25)}
                fill={`${normalTxtColor}`}
              />
            </TouchableOpacity>
          </AnimatedTopHeader>
          <AnimatedView style={styles.childContainer}>
            <View
              style={{
                ...styles.premiumOuterContainer,
                height: getHeightWithPercent(70),
              }}>
              <LinearGradient
                colors={[`${gradientColor2}`, `${gradientColor1}`]}
                style={{
                  ...styles.premiumOuterContainer,
                  height: getHeightWithPercent(70),
                }}>
                {customGiftView ? (
                  <FlatList
                    data={[]}
                    numColumns={2}
                    ListHeaderComponent={
                      <>
                        <Text style={styles.sendingGiftTxt}>
                          {textString.sendGiftTxt}
                        </Text>
                        <View style={styles.inputCustomGiftDiv}>
                          <View style={styles.inputFieldCustom}>
                            <TextInput
                              style={styles.giftInputStyle}
                              value={customGiftValue}
                              onChangeText={text => setCustomGiftValue(text)}
                            />
                            <TextInput
                              style={{
                                ...styles.giftInputStyle,
                                color: profileColorBg2,
                                flex: 1,
                              }}
                              value="₦"
                              editable={false}
                            />
                          </View>

                          <CustomBtnSimple
                            title={textString.sendBtnTxt}
                            colorsArray={[
                              `${inputBackgroundColor}`,
                              `${inputBackgroundColor}`,
                            ]}
                            onClickFunction={() =>
                              setCustomGiftView(!customGiftView)
                            }
                          />
                        </View>
                      </>
                    }
                    renderItem={() => null}
                  />
                ) : (
                  <FlatList
                    numColumns={2}
                    data={[
                      {
                        price: '20',
                        title: textString.gift1Txt,
                        imglink: <GiftRose />,
                      },
                      {
                        price: '200',
                        title: textString.gift2Txt,
                        imglink: <GiftBouqet />,
                      },
                      {
                        price: '2,000',
                        title: textString.gift3Txt,
                        imglink: <GiftBikni />,
                      },
                      {
                        price: '20,000',
                        title: textString.gift4Txt,
                        imglink: <GiftTrip />,
                      },
                      {
                        price: '40,000',
                        title: textString.gift5Txt,
                        imglink: <GiftSpa />,
                      },
                      {
                        price: '',
                        title: textString.gift6Txt,
                        imglink: <GiftAdd />,
                      },
                    ]}
                    columnWrapperStyle={{
                      flex: 1,
                      justifyContent: 'space-evenly',
                    }}
                    ListHeaderComponent={
                      <Text style={styles.sendingGiftTxt}>
                        {textString.sendGiftTxt}
                      </Text>
                    }
                    renderItem={({item}) => (
                      <TouchableOpacity
                        onPress={() => {
                          item?.title === 'Send Custom Amount'
                            ? setCustomGiftView(!customGiftView)
                            : setBuyCoinsModal(!buyCoinsModal);
                        }}
                        style={styles.giftMainContainer}>
                        {item?.imglink}
                        <Text style={styles.giftMainHeading}>
                          {item?.title}{' '}
                          {item?.price?.length > 0 && `\n(${item?.price} ₦)`}
                        </Text>
                      </TouchableOpacity>
                    )}
                  />
                )}
              </LinearGradient>
            </View>
            <TouchableOpacity
              onPress={() => setsendGiftModal(!sendGiftModal)}
              style={{...styles.flexBg, flex: 1}}
            />
          </AnimatedView>
        </View>
      </Modal>

      <Modal
        animationType="slide"
        visible={callSettingModal}
        onRequestClose={() => setCallSettingModal(!callSettingModal)}>
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
              onPress={() => setCallSettingModal(!callSettingModal)}
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
            <Text
              style={{
                ...styles.ModalTitle,
                textAlign: 'center',
                width: '100%',
              }}>
              {textString.voicCallTxt}
            </Text>
            <Text style={styles.ModalSubTitle2}>
              {textString.aboutStrtCallTxt}Tasty05
              {textString.aboutStrtCallTxt2}
            </Text>
            <View style={styles.otherContentDiv}>
              <View style={styles.timerDiv}>
                <ClockIcon />
                <Text style={styles.timeTxt}>00:01:00</Text>
              </View>
              <View style={styles.errorDiv}>
                <BellIcon height={scale(11)} width={scale(15)} />
                <Text style={styles.errorTxt}>
                  {textString.minimumAmount}N20
                </Text>
              </View>
              <CustomGridBorderInput
                borderRadius={scale(10)}
                width={getWidthWithPercent(90)}
                placehoderTxt={textString.enterAmountCall}
              />
              <View style={{marginTop: scale(30)}} />
              <CustomBtnSimple
                colorsArray={[`${beginCallbg}`, `${beginCallbg}`]}
                title={textString.beginCall}
                onClickFunction={() => {
                  setBuyCoinsModal(!buyCoinsModal);
                  setCallModal(!callModal);
                }}
              />
            </View>
          </AnimatedView>
        </LinearGradient>
      </Modal>
      <Modal
        animationType="slide"
        visible={callModal}
        onRequestClose={() => setCallSettingModal(!callModal)}>
        <StatusBar />
        <ImageBackground
          style={styles.callBackgroundImage}
          source={require('../../../Utils/Assets/modal.png')}>
          <View style={styles.contentContainerCall}>
            <AnimatedTopHeader style={styles.upperContantCall}>
              <Text style={styles.callerNameTxt}>
                {textString.callingSrtTxt} Vernoca
              </Text>
              <Image
                style={styles.callerAvtar}
                source={require('../../../Utils/Assets/modal2.png')}
              />
              <Text style={styles.callerTimeTxt}>00:30</Text>
            </AnimatedTopHeader>
            <AnimatedView style={styles.lowerContentCall}>
              <View style={styles.buttonsContsinerCall}>
                <TouchableOpacity onPress={() => setCallModal(!callModal)}>
                  <MicButtonIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCallModal(!callModal)}>
                  <DropCallButtonIcon />
                </TouchableOpacity>
                <TouchableOpacity onPress={() => setCallModal(!callModal)}>
                  <CoinButtonIcon />
                </TouchableOpacity>
              </View>
              <View style={styles.tipCallView}>
                <Text style={styles.callTipTxt}>{textString.callTipTxt}</Text>
              </View>
            </AnimatedView>
          </View>
        </ImageBackground>
      </Modal>
    </>
  );
};

export default ActorProfile;

const styles = StyleSheet.create({
  goodToTxt: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '300',
    color: goodGoColor,
    marginLeft: scale(7),
  },
  goodToGoView: {
    marginTop: scale(20),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    width: '95%',
    alignSelf: 'center',
  },
  drpRatingHead: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '300',
    color: placeHolderColor,
    textAlign: 'center',
    marginBottom: scale(20),
  },
  starContainerView: {
    width: '70%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
    marginBottom: scale(30),
    alignSelf: 'center',
  },
  genderItemContainer: {
    width: getWidthWithPercent(87),
    height: scale(118),
    borderRadius: scale(20),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
  },
  genderItemContainerGridSmall: {
    width: getWidthWithPercent(86.5),
    height: scale(115),
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
  AboutMeInputContainer: {
    height: scale(185),
    borderRadius: scale(11),
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    paddingHorizontal: scale(10),
  },
  AboutMeInput: {
    width: '100%',
    height: '100%',
    fontSize: scale(14),
    lineHeight: scale(21),
    fontWeight: '400',
    color: profileHeaderSubtitle,
    textAlignVertical: 'top',
  },
  lowerBorder: {
    marginBottom: scale(30),
    marginTop: scale(15),
    width: '100%',
    height: scale(1),
    backgroundColor: alertBorderColor,
  },
  reviewMsg: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '400',
    color: normalTxtColor,
    textTransform: 'capitalize',
  },
  reviewNumber: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '400',
    color: normalTxtColor,
  },
  reviewMsgView: {
    height: '100%',
    flex: 1,
  },
  reviewDetailTxt: {
    fontSize: scale(11),
    lineHeight: scale(19),
    fontWeight: '400',
    color: normalTxtColor,
  },
  reviewStarView: {
    height: '100%',
    width: scale(40),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'row',
  },
  reviewContainerMsg: {
    width: '90%',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: scale(75),
  },
  reviewContainerDetails: {
    width: '90%',
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'flex-end',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    height: scale(25),
  },
  reviewContainerMain: {
    width: getWidthWithPercent(90),
    paddingVertical: scale(10),
    height: scale(130),
    alignSelf: 'center',
    backgroundColor: inputBackgroundColor,
    borderRadius: scale(9),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  callTipTxt: {
    fontSize: scale(13),
    fontWeight: '400',
    color: genderTextColor,
  },
  tipCallView: {
    backgroundColor: lightBlackBg,
    height: scale(40),
    width: getWidthWithPercent(75),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: scale(17),
  },
  callerNameTxt: {
    fontSize: scale(19),
    lineHeight: scale(23),
    fontWeight: '500',
    color: normalTxtColor,
  },
  callerTimeTxt: {
    fontSize: scale(19),
    lineHeight: scale(23),
    fontWeight: '500',
    color: normalTxtColor,
    marginTop: scale(20),
  },
  callerAvtar: {
    width: getWidthWithPercent(40),
    height: getWidthWithPercent(40),
    borderRadius: getWidthWithPercent(40),
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: beginCallbg,
  },
  upperContantCall: {
    width: '100%',
    height: getHeightWithPercent(35),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    position: 'absolute',
    top: scale(40),
  },
  lowerContentCall: {
    width: '100%',
    height: getHeightWithPercent(25),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    position: 'absolute',
    bottom: scale(0),
  },
  buttonsContsinerCall: {
    width: getWidthWithPercent(70),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  contentContainerCall: {
    width: '100%',
    height: '100%',
    backgroundColor: lightBlackBg,
    position: 'relative',
  },
  callBackgroundImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  errorDiv: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    height: scale(25),
    backgroundColor: errorBg,
    borderRadius: scale(9),
    marginTop: scale(10),
  },
  errorTxt: {
    fontSize: scale(12),
    lineHeight: scale(20),
    fontWeight: '400',
    color: normalTxtColor,
    marginLeft: scale(10),
  },
  timeTxt: {
    fontSize: scale(14),
    lineHeight: scale(27),
    fontWeight: '400',
    color: normalTxtColor,
    marginLeft: scale(7),
  },
  timerDiv: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: inputBackgroundColor,
    width: scale(100),
    height: scale(43),
    borderRadius: scale(12),
    alignSelf: 'center',
  },
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
  ModalSubTitle2: {
    fontWeight: '400',
    fontSize: scale(12),
    lineHeight: scale(18),
    textAlign: 'left',
    color: normalTxtColor,
  },
  giftInputStyle: {
    width: '60%',
    height: '100%',
    fontSize: scale(36),
    fontWeight: '400',
  },
  giftCurrencyTxt: {
    fontSize: scale(36),
    fontWeight: '400',
    lineHeight: scale(59),
  },
  inputFieldCustom: {
    width: '100%',
    height: scale(59),
    backgroundColor: normalTxtColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderRadius: scale(5),
    overflow: 'hidden',
    paddingHorizontal: scale(10),
  },
  inputCustomGiftDiv: {
    width: '90%',
    alignSelf: 'center',
    height: getHeightWithPercent(60),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'column',
  },
  giftMainHeading: {
    fontSize: scale(15),
    lineHeight: scale(22),
    fontWeight: '400',
    color: normalTxtColor,
    textAlign: 'center',
  },
  sendingGiftTxt: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '700',
    color: normalTxtColor,
    textAlign: 'center',
    marginBottom: getHeightWithPercent(4),
  },
  giftMainContainer: {
    width: getWidthWithPercent(41),
    height: getHeightWithPercent(17),
    backgroundColor: inputBackgroundColor,
    marginBottom: scale(15),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    borderRadius: scale(7),
    overflow: 'hidden',
    padding: scale(14),
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
    justifyContent: 'center',
    height: getHeightWithPercent(24),
  },
  premiumBtnDiv: {
    width: '49%',
  },
  premiumHeading: {
    fontSize: scale(36),
    lineHeight: scale(54),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumSubHeading: {
    fontSize: scale(22),
    lineHeight: scale(33),
    fontWeight: '600',
    color: normalTxtColor,
    textAlign: 'center',
  },
  premiumDescHeading: {
    fontSize: scale(18),
    lineHeight: scale(27),
    fontWeight: '300',
    color: normalTxtColor,
    textAlign: 'center',
  },
  viewBtn: {
    width: scale(80),
    height: scale(55),
    borderRadius: scale(27),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    backgroundColor: lightBlackBg,
  },
  viewTxt: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '300',
    color: normalTxtColor,
  },
  backgroundImageGallery: {
    width: scale(152),
    height: scale(245),
    borderRadius: scale(22),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  galleryImageContainer: {
    position: 'relative',
    marginVertical: scale(2),
    borderRadius: scale(22),
    overflow: 'hidden',
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
  voiceNotePlayerDiv: {
    width: '100%',
    height: getHeightWithPercent(23),
    borderRadius: scale(22),
    overflow: 'hidden',
    marginBottom: scale(30),
  },
  genderItemContainerGrid: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  playerMsgState: {
    fontSize: scale(12),
    lineHeight: scale(21),
    fontWeight: '400',
    color: playerMsgBg,
    marginTop: scale(10),
  },
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
  deleteTxt: {
    fontWeight: '500',
    fontSize: scale(12),
    lineHeight: scale(18),
    color: normalTxtColor,
    marginLeft: scale(3),
  },
  flexBgModal: {
    width: '100%',
    height: '100%',
    backgroundColor: lightBlackBg,
  },
  unLockTxt: {
    fontSize: scale(8),
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
  swipeTxt: {
    color: profileHeaderSubtitle,
    fontSize: scale(12),
    lineHeight: scale(18),
    fontWeight: '400',
    marginRight: scale(1),
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
  ratingTxt: {
    fontSize: scale(10),
    lineHeight: scale(15),
    fontWeight: '500',
  },
  numberContainer: {
    width: '47%',
    height: '100%',
    paddingTop: scale(5),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
  },
  numberView: {
    position: 'absolute',
    left: scale(2),
    top: scale(7),
    width: scale(15),
    height: scale(18),
    backgroundColor: normalTxtColor,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    borderRadius: scale(10),
  },
  bottomUserName: {
    fontWeight: '700',
    fontSize: scale(12),
    lineHeight: scale(16),
    color: normalTxtColor,
  },
  bottomLanguage: {
    fontWeight: '400',
    fontSize: scale(9),
    lineHeight: scale(12),
    color: normalTxtColor,
  },
  bottomUserInfo: {
    position: 'absolute',
    bottom: scale(12),
    backgroundColor: profileSideButtonBg,
    width: '93%',
    right: scale(12),
    left: scale(12),
    height: scale(45),
    borderRadius: scale(17),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    paddingHorizontal: scale(12),
  },
  TextContenrBottom: {
    height: '100%',
    flex: 1,
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'center',
    flexDirection: 'column',
    marginLeft: scale(7),
  },
  backButton: {
    position: 'absolute',
    top: scale(12),
    left: scale(12),
    width: scale(45),
    height: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  callButton: {
    position: 'absolute',
    top: scale(12),
    right: scale(12),
    width: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  vidoButton: {
    position: 'absolute',
    top: scale(57),
    right: scale(12),
    width: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  chatButton: {
    position: 'absolute',
    top: scale(102),
    right: scale(12),
    width: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  giftButton: {
    position: 'absolute',
    top: scale(102),
    left: scale(12),
    width: scale(45),
    height: scale(45),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  premiumOuterContainer: {
    width: getWidthWithPercent(90),
    height: getHeightWithPercent(65),
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
    height: getHeightWithPercent(65) - 4,
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
    backgroundColor: inputBackgroundColor,
    paddingHorizontal: scale(12),
  },
  recentOuterContainer: {
    width: getWidthWithPercent(90),
    height: getHeightWithPercent(35),
    borderRadius: scale(23),
    marginVertical: scale(19),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    overflow: 'hidden',
  },
  recentInnerContainer: {
    width: getWidthWithPercent(90) - 4,
    height: getHeightWithPercent(35) - 4,
    borderRadius: scale(23),
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  flexBg: {
    width: '100%',
    height: '100%',
  },
  mainContainerDiv: {
    width: getWidthWithPercent(90),
    alignSelf: 'center',
    flex: 1,
  },
  bottomContainer: {
    width: getWidthWithPercent(90),
    alignSelf: 'center',
    height: scale(130),
    backgroundColor: profileColorBg2,
  },
});
