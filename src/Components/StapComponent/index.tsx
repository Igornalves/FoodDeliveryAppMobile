import React, { useEffect } from 'react';
import { 
  Titule,
  TextPrimary,
  TextSecundary,
} from './style';

import Animated, { Extrapolation, interpolate, useAnimatedStyle, useSharedValue, withTiming } from 'react-native-reanimated';
import { TypeStrapComponent } from '../../global/interface/inteface';

export default function StapComponent({ TextPrimaryS, TextSecundaryS, TituleS }: TypeStrapComponent) {

  const SplashAnimation = useSharedValue(0);

  const TextAnimation = useAnimatedStyle(() => {
    return{
      position: 'absolute',
      top: 508,
      alignItems: 'center',
      // backgroundColor: 'red',
      // height: 280, 
      // paddingBottom: 70,
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
  
  useEffect(() => {
    SplashAnimation.value = withTiming( 
      50, 
      {duration: 1000},
      () => {
        'worklet'
      }
    )
  },[]);

  return (
    <Animated.View style={TextAnimation}>
        <Titule>{TituleS}</Titule>
        <TextPrimary>{TextPrimaryS}</TextPrimary>
        <TextSecundary>{TextSecundaryS}</TextSecundary>
    </Animated.View>
  );
}
