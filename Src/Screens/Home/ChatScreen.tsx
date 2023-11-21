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
  gradientColor1,
  gradientColor2,
  inputBackgroundColor,
  normalTxtColor,
  profileColorBg1,
  profileColorBg2,
  profileHeaderSubtitle,
} from '../../Utils/Colors/index';
import LinearGradient from 'react-native-linear-gradient';
import {scale} from 'react-native-size-matters';
import {getWidthWithPercent} from '../../Utils/Functions/GetStyles';
import BackArrow from '../../Utils/Assets/icons/BackArrow';
import moment from 'moment';
import {textString} from '../../Utils/Translation/Translation';
import AnimatedTopHeader from '../../AnimatedComponents/AnimatedTopHeader';
import AnimatedView from '../../AnimatedComponents/AnimatedView';
interface Props {
  navigation: any;
}
const ChatScreen: React.FC<Props> = ({navigation}) => {
  return (
    <LinearGradient
      colors={[
        `${profileColorBg1}`,
        `${profileColorBg2}`,
        `${profileColorBg2}`,
      ]}
      style={styles.flexBg}>
      <AnimatedTopHeader style={styles.backButtonContainer}>
        <TouchableOpacity
          onPress={() => navigation.pop()}
          style={styles.backButtonCircle}>
          <BackArrow
            width={scale(20)}
            height={scale(25)}
            fill={`${normalTxtColor}`}
          />
        </TouchableOpacity>
        <View style={styles.backButtonCircle}></View>
      </AnimatedTopHeader>
      <AnimatedView style={styles.childContainer}>
        <Text style={styles.ModalTitle}>{textString.chatsHed}</Text>
        <Text style={styles.ModalSubTitle}>{textString.chatSub}</Text>
        <View style={styles.otherContentDiv}>
          <FlatList
            data={[
              {
                id: 0,
                name: 'jay jay',
                msg: 'Hello',
                date: new Date().toString(),
              },
              {
                id: 1,
                name: 'just me',
                msg: 'Hi',
                date: new Date().toString(),
              },
            ]}
            renderItem={({item}) => (
              <TouchableOpacity
                onPress={() => navigation.navigate('ChatRoomScreen')}
                style={styles.chatItemContainer}>
                <Image
                  source={require('../../Utils/Assets/GetStart.jpg')}
                  style={styles.chatAvtar}
                />
                <View style={styles.TextContainerChat}>
                  <Text style={styles.chatMsgTxt}>{item?.msg}</Text>
                  <Text style={styles.chatOtherTxt}>
                    {item?.name} |{' '}
                    {moment(item?.date).format('MMM Do YYYY, h:mm:ss a')}
                  </Text>
                </View>
              </TouchableOpacity>
            )}
            ItemSeparatorComponent={() => (
              <View style={{marginBottom: scale(12)}} />
            )}
          />
        </View>
      </AnimatedView>
    </LinearGradient>
  );
};

export default ChatScreen;

const styles = StyleSheet.create({
  chatMsgTxt: {
    fontSize: scale(12),
    lineHeight: scale(22),
    fontWeight: '400',
    color: normalTxtColor,
  },
  chatOtherTxt: {
    fontSize: scale(10),
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
    justifyContent: 'center',
    flexDirection: 'column',
  },
  chatAvtar: {
    width: scale(35),
    height: scale(35),
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
  childContainer: {
    width: getWidthWithPercent(87),
    alignSelf: 'center',
    flex: 1,
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
