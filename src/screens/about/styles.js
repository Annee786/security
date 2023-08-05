import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tabView:{
    flexDirection:'row',

  },
  line:{
    borderColor:colors.chatgrey,
    borderWidth:1,
    width:'100%',
    height:1,
    paddingTop:10,
    paddingBottom:10
  },
  skillsBox:{
    width:'90%',
    height:80,
    flexDirection:'row',

    borderColor:colors.lightgrey,
    shadowColor: "#000",
shadowOffset: {
	width: 0,
	height: 2,
},
shadowOpacity: 0.25,
shadowRadius: 3.84,

elevation: 5,
backgroundColor:colors.white,
alignSelf:'center'

  },
  designs:{
    width:'30%',
    height:30,
    borderColor:colors.lightblue,
    alignItems:'center',
    justifyContent:'center',
    borderRadius:10,
    backgroundColor:colors.lightblue,
    marginLeft:5,
    marginTop:10
    
  },
  skillsText:{
    fontFamily:fonts.regular,
    fontSize:10,
    color:colors.white

  },
  imageView:{
    height:40,
    width:40,
    resizeMode:'contain'
  }
})