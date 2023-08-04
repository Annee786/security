import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  milestoneView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  dateTab: {
    height: 50,
    width: '50%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
    borderColor: colors.grey,
    backgroundColor: colors.lightgrey,
    borderRadius: 10,
    margin: 15,
    marginBottom: 30,
  },
  dateText: {
    fontFamily: fonts.light,
    fontSize: 14,
    color: colors.grey,
  },
  duedateimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  progresText:{
    fontFamily:fonts.semiBold,
    fontSize:14,
color:colors.lightblack,
paddingHorizontal:20
  },
  progressView:{
    height:50,
    justifyContent:'center',
    alignSelf:'center',
    alignItems:'center',
    width:'90%',
    alignSelf:'center',
    borderColor:colors.lightgrey,
borderRadius:10,
backgroundColor:colors.white,
borderWidth:1,
shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 3,

  
},
shadowOpacity: 0.27,
shadowRadius: 4.65,

elevation: 6,
  },
  percents:{
    fontSize:14,
    color:colors.jetblack,
    paddingHorizontal:20
  },
  progress:{
    height:15,
    width:'90%',
    backgroundColor:colors.lightblue,
    borderColor:colors.lightblue,
    borderWidth:1,
    borderRadius:5,
    }
});
