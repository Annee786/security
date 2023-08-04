import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../utils';

const dealsArray = [
  {
    numbers: '1',
    text:'Idea'
  },
  {
    numbers: '2',
    text:'Needed Roles'

  },
  {
    numbers: '3',
    text:'Team'

  },
  {
    numbers: '4',
    text:'Milestones'

  },
  {
    numbers: '5',
    text:'Business Plan'

  },
];

const StepCount = () => {
  return (
    <View style={{flexDirection: 'row', margin: 20}}>
      {dealsArray.map(item => {
        return (
          <View style={styles.stepCountView}>
            <View>
              <View style={styles.circle}>
                <Text style={styles.numbers}>{item?.numbers}</Text>
              </View>
              <Text>{item.text}</Text>
            </View>

            {item.numbers != 5 && <View style={styles.line} />}
          </View>
        );
      })}
    </View>
  );
};

export default StepCount;

const styles = StyleSheet.create({
  stepCountView: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
    marginRight:5,
  },
  circle: {
    height: 20,
    width: 20,
    borderColor: colors.blue,
    backgroundColor: colors.lightblue,
    borderRadius: 10,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  numbers: {
    fontFamily: fonts.medium,
    fontSize: 8,
    color: colors.white,
  },
  line: {
    backgroundColor: colors.lightblue,
    height: 1,
    width: undefined,
    margin: 5,
    flex: 1,
    marginTop:12,
    
  },
});
