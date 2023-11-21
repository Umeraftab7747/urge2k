import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Dimensions,
  FlatList,
  TextInput,
  Image,
} from 'react-native';
import React, {useState} from 'react';
import {
  alertBorderColor,
  gradientColor1,
  gradientColor2,
  gradientColorBg1,
  gradientColorBg2,
  gradientColorBg3,
  inputBackgroundColor,
  lightBlackBg,
  msgTimeColor,
  newGradientBg,
  newGradientBg2,
  newProfilebg1,
  newProfilebg2,
  normalTxtColor,
  placeHolderColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
  senderMsgBg,
} from '../../Utils/Colors/index';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {getWidthWithPercent} from '../../Utils/Functions/GetStyles';
import BackArrow from '../../Utils/Assets/icons/BackArrow';
import CustomBtnSimple from '../../Components/CustomBtnSimple';
import CustomDropDown from '../../Components/CustomDropDown';
import CustomInput from '../../Components/CustomInput';
import CustomGridInput from '../../Components/CustomGridInput';
import moment from 'moment';
import CallIcon from '../../Utils/Assets/icons/CallIcon';
import TailLessBackIcon from '../../Utils/Assets/icons/TailLessBackIcon';
import SendMsgButton from '../../Utils/Assets/icons/SendMsgButton';
import CustomGridBorderBtn from '../../Components/CustomGridBorderBtn';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedView from '../../AnimatedComponents/AnimatedView';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
interface Props {
  navigation: any;
}
const ChatRoomScreen: React.FC<Props> = ({navigation}) => {
  const [msgArray, setmsgArray] = useState<
    {id: number; msg: string; sendDate: string; senderId: number}[]
  >([]);
  return (
    <LinearGradient
      colors={[
        `${newProfilebg2}`,
        `${newProfilebg1}`,
        `${newProfilebg2}`,
        `${newProfilebg1}`,
        `${newProfilebg2}`,
      ]}
      style={styles.flexBg}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <TailLessBackIcon width={scale(11)} height={scale(25)} />
        </TouchableOpacity>
        <Image
          style={styles.userProfile}
          source={require('../../Utils/Assets/GetStart.jpg')}
        />
        <TouchableOpacity
          onPress={() => console.log('call')}
          style={styles.backButtonCircle}>
          <CallIcon width={scale(20)} height={scale(25)} />
        </TouchableOpacity>
      </AnimatedTopHeader>
      <AnimatedTopHeader style={styles.chatRoomUserContainer}>
        <Text style={styles.chatUserName}>usaria</Text>
        <Text style={styles.chatStatus}>2 years ago</Text>
      </AnimatedTopHeader>
      <AnimatedView style={styles.BorderedBgContainer}>
        <View style={styles.fillMyDivMsgs}>
          <FlatList
            data={msgArray}
            ListEmptyComponent={
              <>
                <CustomGridBorderBtn
                  width={scale(142)}
                  height={scale(34)}
                  textSize={scale(10)}
                  placehoderTxt={textString.startChat}
                  onClickFunction={() =>
                    setmsgArray([
                      {
                        id: 0,
                        msg: 'Hy',
                        sendDate: new Date().toLocaleDateString(),
                        senderId: 0,
                      },
                      {
                        id: 1,
                        msg: 'Hello',
                        sendDate: new Date().toString(),
                        senderId: 1,
                      },
                      {
                        id: 2,
                        msg: 'I am john.',
                        sendDate: new Date().toLocaleDateString(),
                        senderId: 0,
                      },
                      {
                        id: 3,
                        msg: 'I am Ketty',
                        sendDate: new Date().toLocaleDateString(),
                        senderId: 1,
                      },
                    ])
                  }
                />
              </>
            }
            ItemSeparatorComponent={() => (
              <View style={{marginBottom: scale(7)}} />
            )}
            keyExtractor={item => `${item.id}`}
            renderItem={({item}) => (
              <AnimatedView
                style={{
                  ...styles.msgMainContainer,
                  alignSelf: item?.senderId === 0 ? 'flex-end' : 'flex-start',
                  alignItems: item?.senderId === 0 ? 'flex-end' : 'flex-start',
                }}>
                <View
                  style={{
                    ...styles.MsgBuble,
                    backgroundColor:
                      item?.senderId === 0 ? senderMsgBg : normalTxtColor,
                    borderTopLeftRadius: scale(23),
                    borderTopRightRadius: scale(23),
                    borderBottomRightRadius:
                      item?.senderId === 0 ? 0 : scale(23),
                    borderBottomLeftRadius:
                      item?.senderId === 0 ? scale(23) : 0,
                  }}>
                  <Text
                    style={{
                      ...styles.msgTxt,
                      color:
                        item?.senderId !== 0 ? senderMsgBg : normalTxtColor,
                    }}>
                    {item?.msg}
                  </Text>
                </View>
                <View
                  style={{
                    ...styles.senderInfoContainer,
                    flexDirection: item?.senderId === 0 ? 'row' : 'row-reverse',
                  }}>
                  <Text style={styles.msgTimeOwn}>
                    {moment(Date.now()).fromNow()}
                  </Text>
                  <Image
                    style={{
                      ...styles.messageSenderImage,
                      marginRight: item?.senderId !== 0 ? scale(5) : 0,
                      marginLeft: item?.senderId === 0 ? scale(5) : 0,
                    }}
                    source={
                      item?.senderId !== 0
                        ? require('../../Utils/Assets/GetStart.jpg')
                        : require('../../Utils/Assets/profileAvate.png')
                    }
                  />
                </View>
              </AnimatedView>
            )}
          />
        </View>
        <View style={styles.inputContainerMsgView}>
          <TextInput
            placeholderTextColor={placeHolderColor}
            placeholder={textString.typeMsg}
            style={styles.msgInput}
          />
          <TouchableOpacity style={styles.sendButtonView}>
            <SendMsgButton />
          </TouchableOpacity>
        </View>
      </AnimatedView>
    </LinearGradient>
  );
};

export default ChatRoomScreen;

const styles = StyleSheet.create({
  msgTimeOwn: {
    fontSize: scale(10),
    lineHeight: scale(18),
    fontWeight: '400',
    color: msgTimeColor,
  },
  messageSenderImage: {
    width: scale(15),
    height: scale(15),
    borderRadius: scale(20),
  },
  senderInfoContainer: {
    height: scale(20),
    width: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
    marginTop: scale(5),
  },
  MsgBuble: {
    paddingVertical: scale(15),
    paddingHorizontal: scale(15),
  },
  msgTxt: {
    fontSize: scale(12),
    // lineHeight: scale(21),
    fontWeight: '500',
  },
  msgMainContainer: {
    width: '90%',
    height: 'auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
  },
  sendButtonView: {
    position: 'absolute',
    bottom: scale(20),
    right: scale(10),
  },
  msgInput: {
    position: 'absolute',
    bottom: 0,
    width: '100%',
    height: scale(50),
    backgroundColor: inputBackgroundColor,
    borderTopWidth: 1,
    borderTopColor: alertBorderColor,
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400',
    paddingHorizontal: scale(10),
    color: normalTxtColor,
  },
  fillMyDivMsgs: {
    width: '100%',
    flex: 1,
    paddingHorizontal: scale(20),
    paddingTop: scale(22),
  },
  inputContainerMsgView: {
    width: '100%',
    height: scale(80),
    position: 'relative',
    overflow: 'hidden',
  },
  chatUserName: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '700',
    color: normalTxtColor,
  },
  chatStatus: {
    fontSize: scale(12),
    lineHeight: scale(16),
    fontWeight: '300',
    color: normalTxtColor,
  },
  userProfile: {
    width: scale(50),
    height: scale(50),
    borderRadius: scale(70),
  },
  chatMsgTxt: {
    fontSize: scale(16),
    lineHeight: scale(24),
    fontWeight: '400',
    color: normalTxtColor,
  },
  chatOtherTxt: {
    fontSize: scale(13),
    lineHeight: scale(21),
    fontWeight: '500',
    color: normalTxtColor,
    textTransform: 'capitalize',
  },
  TextContainerChat: {
    height: '100%',
    flex: 1,
    marginLeft: scale(8),
    display: 'flex',
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
    flexDirection: 'column',
  },
  chatAvtar: {
    width: scale(45),
    height: scale(45),
    borderRadius: scale(45),
  },
  chatItemContainer: {
    width: '100%',
    height: scale(75),
    borderRadius: scale(11),
    overflow: 'hidden',
    backgroundColor: inputBackgroundColor,
    paddingVertical: scale(15),
    paddingHorizontal: scale(9),
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-start',
    flexDirection: 'row',
  },
  reportTxt: {
    color: normalTxtColor,
    fontWeight: '500',
    fontSize: scale(13),
    lineHeight: scale(20),
  },
  ReportBtn: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
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
  otherContentDiv: {
    width: '100%',
    flex: 1,
    marginTop: scale(15),
  },

  flexBg: {
    width: '100%',
    height: '100%',
  },
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
  },
  chatRoomUserContainer: {
    width: Dimensions.get('screen').width - 34,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    alignSelf: 'center',
    marginBottom: scale(10),
  },
  BorderedBgContainer: {
    width: '100%',
    flex: 1,
    paddingTop: scale(17),
    backgroundColor: profileColorBg2,
    marginTop: scale(5),
    borderTopLeftRadius: scale(38),
    borderTopRightRadius: scale(38),
    shadowColor: lightBlackBg,
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
  },
  backButtonContainer: {
    margin: scale(17),
    marginBottom: 0,
    height: scale(50),
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
    borderRadius: scale(20),
    paddingHorizontal: scale(23),
    paddingVertical: scale(13),
    overflow: 'hidden',
  },
});
