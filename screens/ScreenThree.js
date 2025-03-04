
import React from 'react';
import { Alert, Button, View } from 'react-native';
import { checkException } from '../utils/commonFunctions';

const ScreenThree = ({navigation}) => {
  try {
    checkException(20); // 8:00 PM
  } catch (error) {
    Alert.alert('Error', error.message);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Screen 4"
        onPress={() => navigation.navigate('ScreenForth')}
      />
    </View>
  );
};

export default ScreenThree;
