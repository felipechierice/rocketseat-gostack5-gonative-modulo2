import { StyleSheet } from 'react-native';
// import { getStatusBarHeight } from 'react-native-status-bar-height';
import { colors, metrics } from '../../styles';

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    alignItems: 'center',
    borderBottomColor: colors.light,
    borderBottomWidth: 1,
    flexDirection: 'row',
    height: 54, // + getStatusBarHeight(),
    // paddingTop: getStatusBarHeight(),
    justifyContent: 'space-between',
    paddingHorizontal: metrics.basePadding,
  },
  title: {
    color: colors.darker,
    fontSize: 16,
    fontWeight: 'bold',
  },
  icon: {
    color: colors.darker,
  },
});

export default styles;
