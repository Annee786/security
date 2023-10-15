import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  userView: {
    backgroundColor: colors.lightsea,
    flexDirection: 'row',
    paddingHorizontal: 30,
    paddingVertical: 12,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    width: '45%',
  margin:8,

  
},
  circle: {
    height: 45,
    width: 45,
    backgroundColor: colors.white,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 22,
  },
  reviewimage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  userjobText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: colors.black,
    padding: 10,
    textAlign:'center'
  },
  filtersView:{
    borderColor:colors.blue,
    borderRadius:25,
  paddingHorizontal:15,
  justifyContent:'space-between',
alignItems:'center',
  flexDirection:'row',
borderWidth:1,
paddingVertical:15,
margin:5

  },
  filtersText:{
    fontFamily: fonts.regular,
    fontSize: 12,
    color: colors.black,
    paddingRight:20
    
  },
  cross:{
    height:15,
    width:15,
    resizeMode:'contain',
  },
  resultView:{
    paddingHorizontal:15,
    borderColor:colors.shadow,
  backgroundColor:colors.white,
    paddingVertical:15,
    borderRadius:10,
    alignSelf:'center',
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
  },
  jobimage:{
    height:50,
    width:50,
    resizeMode:'contain',
  },
  jobsView:{
    flexDirection:'row',
    justifyContent:'space-between',
    alignItems:'center'
  },
  charges:{
    fontFamily: fonts.regular,
    fontSize: 14,
    color: colors.red,
    textAlign:'right'

  },
  image:{
    height:15,
    width:15,
    resizeMode:'contain', 
    tintColor:colors.grey
  },
  viewtext:{
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.blue, 
    paddingLeft:10
  },
  time:{
    fontFamily: fonts.regular,
    fontSize: 11,
    color: colors.grey, 
  },
  cylinder:{
    flexDirection:'row'
  }
});
