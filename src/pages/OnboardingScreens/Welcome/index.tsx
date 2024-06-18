import React, { useEffect } from 'react';
import { 
    Conteiner,
    TituleText,
    SubText,
    ImageWelcome
} from './style';
import Animated, { Extrapolation, interpolate, runOnJS, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { useNavigation } from '@react-navigation/native';

export default function Welcome() {

  const SplashAnimation = useSharedValue(0);

  const TextAnimation = useAnimatedStyle(() => {
    return{
      position: 'absolute',
      paddingBottom: 70,
      alignItems: 'center',
      opacity: interpolate(
        SplashAnimation.value, 
        [0, 25, 50], 
        [0 , 0.5, 1],
      ),
      transform: [
        {
          translateY: interpolate(
            SplashAnimation.value,
            [0,50], 
            [0, -20], 
            Extrapolation.CLAMP
          )
        }
      ]
    };
  });

  
  const navigation = useNavigation();

  function StartApp(){
    navigation.navigate('StartScreen');
  }
  
  useEffect(() => {
    SplashAnimation.value = withTiming( 
      50, 
      {duration: 2500},
      () => {
        'worklet'
        runOnJS(StartApp)();
      }
    )
  },[]);

  return (
    <Conteiner>
        <ImageWelcome source={require('../../../global/images/welcome.png')}/>
      <Animated.View style={TextAnimation}>
            <TituleText> Welcome to Foodpal</TituleText>
            <SubText> Discover a world of delightful flavors </SubText>
            <SubText> at your fingertips </SubText>
      </Animated.View>
    </Conteiner>
  );
}
