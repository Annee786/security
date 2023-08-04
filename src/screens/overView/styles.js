import {StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

export default StyleSheet.create({
  pageView: {
    flex: 1,
    backgroundColor: colors.white,
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
    height: 80,
    width: '90%',
    borderColor: colors.yellow,
    backgroundColor: colors.yellow,
    borderWidth: 1,
    borderRadius: 10,
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
  descriptionView:{
    height: 300,
    width: '90%',
    borderColor: colors.desciptionbox,
    backgroundColor: colors.desciptionbox,
    borderWidth: 1,
    borderRadius: 10,
    alignItems: 'center',
paddingHorizontal:10,
alignSelf:'center',
marginTop:20},


subtext:{
    fontFamily: fonts.light,
    fontSize: 12,
    color: colors.lightblack,
},
mainText:{
    fontFamily: fonts.semiBold,
    fontSize: 14,
    color: colors.lightblack,
},
description:{
    flexDirection:'row',
    alignItems:'center',
    paddingVertical:20,

},
upImage:{
    height: 15,
    width: 15,
    resizeMode: 'contain',
    tintColor:'black',
},
imageview:{
  height: 20,
  width: 20,
  resizeMode: 'contain',  
},
imagesView:{
  flexDirection:'row',
padding:19,
  justifyContent:'flex-start'
}

})