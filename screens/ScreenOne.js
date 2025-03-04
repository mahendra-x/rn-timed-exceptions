import React from 'react';
import { Alert, Button, View } from 'react-native';
import { checkException } from '../utils/commonFunctions';

const ScreenOne = ({navigation}) => {
  try {
    checkException(20); // 8:00 PM
  } catch (error) {
    Alert.alert('Error', error.message);
  }
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <Button
        title="Go to Screen 2"
        onPress={() => navigation.navigate('ScreenTwo')}
      />
    </View>
  );
};

export default ScreenOne;
