import {Dimensions} from 'react-native';
const getWidthWithPercent = (percentage: number): number => {
  return (percentage * Dimensions.get('screen').width) / 100;
};

const getHeightWithPercent = (percentage: number): number => {
  return (percentage * Dimensions.get('screen').height) / 100;
};

export {getHeightWithPercent, getWidthWithPercent};
