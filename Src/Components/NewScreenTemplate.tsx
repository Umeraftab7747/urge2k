import {StyleSheet, Text, View, FlatList} from 'react-native';
import React from 'react';
import LinearGradient from 'react-native-linear-gradient';
import {profileColorBg1, profileColorBg2} from '../Utils/Colors';
import {getWidthWithPercent} from '../Utils/Functions/GetStyles';

interface Props {
  inVisibleChildren?: React.ReactNode;
  bgChildren?: React.ReactNode;
}

const NewScreenTemplate: React.FC<Props> = ({
  inVisibleChildren,
  bgChildren,
}) => {
  return (
    <LinearGradient
      colors={[
        `${profileColorBg1}`,
        `${profileColorBg2}`,
        `${profileColorBg2}`,
      ]}
      style={styles.flexBg}>
      <View style={styles.mainContainerDiv}>
        <FlatList
          data={[]}
          renderItem={() => null}
          ListHeaderComponent={
            <>
              <LinearGradient
                colors={[`transparent`, `transparent`, `${profileColorBg2}`]}
                style={{
                  width: '100%',
                  flex: 1,
                  display: 'flex',
                  alignItems: 'flex-start',
                  justifyContent: 'center',
                }}>
                <View
                  style={{width: getWidthWithPercent(90), alignSelf: 'center'}}>
                  {inVisibleChildren}
                </View>
              </LinearGradient>
            </>
          }
          ListFooterComponent={
            <>
              <LinearGradient
                colors={[
                  `${profileColorBg2}`,
                  `${profileColorBg2}`,
                  `${profileColorBg2}`,
                ]}
                style={{
                  width: '100%',
                  flex: 1,
                }}>
                <View
                  style={{
                    width: getWidthWithPercent(90),
                    alignSelf: 'center',
                    flex: 1,
                  }}>
                  {bgChildren}
                </View>
              </LinearGradient>
            </>
          }
        />
      </View>
    </LinearGradient>
  );
};

export default NewScreenTemplate;

const styles = StyleSheet.create({
  flexBg: {
    width: '100%',
    height: '100%',
  },
  mainContainerDiv: {
    width: '100%',
    alignSelf: 'center',
    flex: 1,
  },
  mainContainerDiv2: {
    width: getWidthWithPercent(90),
    alignSelf: 'center',
    flex: 1,
    backgroundColor: profileColorBg2,
  },
});
