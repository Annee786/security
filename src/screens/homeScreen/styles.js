import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    backgroundColor: colors.white,
    flex: 1,
  },
  exploreBox:{
    height:100,
    width:'90%',
    backgroundColor:colors.skyBlue,
    borderRadius:10,
    borderWidth:1,
    borderColor:colors.skyBlue,
    alignSelf:'center',
    paddingLeft:10,
    paddingVertical:10,
    flexDirection:'row'
  },
  lookingText:{
color:colors.black,
fontFamily:fonts.medium,
fontSize:12
  },

  exploreTab:{
    height:27,
    marginTop:10,
    width:'50%',
    backgroundColor:colors.blue,
    borderRadius:12,
    borderWidth:1,
    borderColor:colors.blue,
    justifyContent:'center',
    alignItems:'center',

  },
  text:{
    color:colors.light,
    fontFamily:fonts.light,
    fontSize:10 
  },
  explore:{
    color:colors.white,
    fontFamily:fonts.light,
    fontSize:10 
  },
  boyImage:{
    height:100,
    width:'50%',
    resizeMode:'contain'
  },
  textImageView:{
    flexDirection:"column"
  },
  cardimage:{
    height:150,
    width:'60%',
    resizeMode:'contain' 
  },
  cardsView:{
   
    height:160,
    width:'77%',
borderColor:colors.blue,
backgroundColor:colors.blue,
borderRadius:20,
paddingHorizontal:10,
marginLeft:20,


  },
  navebar:{
    flexDirection:"row",
    alignItems:'center',
    justifyContent:'space-between',
    paddingHorizontal:20,
    paddingVertical:30
  
  },
  image:{
    height:25,
    width:25,
    resizeMode:'contain',
    tintColor:colors.grey  
  },
  container: {
    marginTop:10,
    height:80,
    width:'90%',
    borderRadius:15,
    borderColor:colors.shadow,
    backgroundColor:colors.white,
    flexDirection:'row',
    alignItems:'center',
    paddingHorizontal:10,
    alignSelf:'center',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
  },

  imageView: {
    height: 50,
    width: 50,
    resizeMode: 'contain',
  },
  jobtitle: {
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.black,
    padding: 5,   

  },
  dateText: {
    fontFamily: fonts.medium,
    fontSize: 10,
    color: colors.grey,
    paddingLeft: 5,  

  },
  $Text: {
    color: colors.red,
    fontFamily: fonts.semiBold,
    fontSize: 14,  

  },
  textView: {
    color: colors.blue,
    fontFamily: fonts.medium,
    fontSize: 11, 
    paddingVertical:5

  },
  jobstextView:{
    height:70,
    width:'50%',
    flexDirection:'column',
    paddingLeft:10,
    paddingVertical:10,
    
  
  },
  jobstextView2:{
    height:90,
    width:'40%',
    flexDirection:'column',
  alignItems:'center',
 paddingVertical:20

  },
  calenderimage:{
    height:10,
    width:10,
    resizeMode:'contain'
  },
  imagedateView:{
    flexDirection:'row',
    alignItems:'center',
    paddingLeft:5
  },
  whiteback:{
    height:45,
    width:50,
    flexDirection:'column',
    backgroundColor:colors.white,
    borderRadius:10,
    justifyContent:'center',
    alignItems:'center'
  },
  johnimage:{
    height:30,
    width:30,
    resizeMode:'contain'
  },
  john:{
    color: colors.white,
    fontFamily: fonts.semiBold,
    fontSize: 16,  
    paddingLeft:10
  },
  textimageview:{
    flexDirection:"row",
    height:80,width:'100%',
  alignItems:'center',
  justifyContent:'space-between'

  },
  verify:{
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 10   
  },
  nameimage:{
    flexDirection:'row',
    alignItems:'center',
    padding:10
  },
  priceView:{
    height:30,
    width:'100%',
    marginTop:20,
    alignItems:'center',
    justifyContent:'space-between',
    flexDirection:'row'
  },
  price:{
    color: colors.white,
    fontFamily: fonts.regular,
    fontSize: 12 ,
    paddingLeft:5 
  },
  checktext:{
    flexDirection:'row',
    alignItems:'center'
  },
  check:{
    height:20,
    width:20,
    resizeMode:'contain'
  }

})
