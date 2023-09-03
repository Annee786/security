import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  dateview: {
    fontFamily: fonts.italic,
    fontSize: 14,
    justifyContent: 'center',
    alignSelf: 'center',
    color: colors.grey,
  },
  chatView: {
    height: 400,
    width: '90%',
    alignSelf: 'center',
  },
  imageView: {
    height: 90,
    width: 120,
    resizeMode: 'contain',
  },
  chatBox: {
    alignSelf: 'flex-end',
  },

  time: {
    fontFamily: fonts.regular,
    fontSize: 10,
    color: colors.neutral,
    padding: 5,
  },
  ansbox: {
    height: 60,
    width: '85%',
    borderColor: colors.chatbox,
    backgroundColor: colors.chatbox,
    borderWidth: 1,
    borderRadius: 10,
    alignSelf: 'flex-start',
    marginTop: 10,

    padding: 5,
  },
  line: {
    width: '100%',
    borderColor: colors.chatbox,
    backgroundColor: colors.chatbox,
    borderWidth: 0.5,
   
  },

  answer: {
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.neutral,
    paddingLeft: 5,
  },
  answerbox: {
    height: 40,
    width: '75%',
    borderColor: colors.chatbox,
    backgroundColor: colors.chatbox,
    borderWidth: 1,
    borderRadius: 10,
    paddingTop: 10,
    alignSelf: 'center',
    marginLeft: 10,
    marginRight: 10,
  },
  icon: {
    height: 25,
    width: 25,
    resizeMode: 'contain',
    marginLeft: 5,
  },
  answerPortion: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
  },
  bottomView:{
    bottom:20,
    position:'absolute',
  }
});
