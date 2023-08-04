import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: 10,
  },
  shadowView:{
    borderBottomColor:colors.lightgrey,
    width:'100%',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    
    elevation: 3,
borderWidth:1,
borderRadius:10,
marginTop:10
  },
  logoView: {
    flexDirection: 'row',
    paddingVertical: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  logoimage: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
  logoText: {
    fontFamily: fonts.bold,
    fontSize: 18,
    color: colors.lightblack,
    padding: 10,
  },
  attachmentimage: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  techText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightblack,
  },
  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',

 
  },
  imagegroup: {
    height: 220,
    width: '100%',
    resizeMode: 'contain',
  },
  imageStyling: {
    justifyContent: 'center',
  },
  tabView: {flexDirection: 'row', paddingHorizontal: 20, paddingVertical: 20},
  overViewTab: {
    flexDirection: 'row',
    height: 50,
    width: '110%',
    borderColor: colors.lightblue,
    backgroundColor: colors.lightblue,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
    paddingHorizontal: 20,
    marginBottom:20,
    marginTop:20
  },
  overView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
  },
  overViewText: {
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.white,
    padding:15
  },
  logo:
    {flexDirection:'column',
  },
  milestoneTab: {
    height: 100,
    width: '100%',
    borderColor: colors.shadowBox,
    backgroundColor: colors.shadowBox,
    borderRadius: 10,
    paddingHorizontal: 15,
    alignSelf: 'center',
    marginTop:10
    
 
  },
  tabView:{
    flexDirection:'row'
  },

  percent: {
    height: 40,
    width: 40,
    borderRadius: 20,
    borderColor: colors.grey,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:10
  },
  subText: {
    fontFamily:fonts.light,
    fontSize:12,
    color:colors.lightblack
  },
  mainText: {
    fontFamily:fonts.medium,
    fontSize:14,
    color:colors.jetblack
  },
  imageView: {
    height: 20,
    width: 20,
    resizeMode: 'contain',
    margin:10
  },
  textView: {
    flexDirection: 'column',
    margin: 10,
  },
  dateView:{
    flexDirection:'row',
    alignItems:'center',
    justifyContent:'flex-end',
  
  },
  dateimage:{
    height:10,
    width:10,
    resizeMode:'contain',

  },
  dateText:{
    fontFamily:fonts.light,
    fontSize:10,
    padding:5,
    color:colors.dateColor
  },
  textView: {
    flexDirection: 'column',
    margin: 10,
  },
  percentText:{
  
        fontFamily:fonts.regular,
        fontSize:10,
        padding:5,
        color:colors.jetblack
  },
  addTab:{
    height: 50,
    width:'50%',
    borderRadius: 20,
    borderColor: colors.termsTab,
    backgroundColor:colors.termsTab,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    marginTop:20
  },

  tabText:{  fontFamily:fonts.medium,
    fontSize:12,
    padding:5,
    color:colors.white}

})