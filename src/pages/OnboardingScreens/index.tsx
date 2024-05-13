import React, { useEffect } from 'react';

import Animated, 
{ 
  Extrapolation, 
  interpolate, 
  runOnJS, 
  useAnimatedStyle, 
  useSharedValue,
  withTiming 
} from 'react-native-reanimated'

import { 
    Conteiner,
    ImageTitule,
    TextSub
} from './style';

import { useNavigation } from '@react-navigation/native';

export default function OnboardingScreens() {

  // valor inicial da animacao 
  const SplashAnimation = useSharedValue(0);

  const LogoAnimation = useAnimatedStyle(() => {
    return{
      opacity: interpolate(
        SplashAnimation.value, 
        [0, 20, 25, 50], 
        [0.2, 0.5 , 1, 1],
        Extrapolation.CLAMP
      ),
    };
  });

  // translateY = animacao de cima para baixo 
  // translateX = animacao de um lado para o outro

  const TextAnimation = useAnimatedStyle(() => {
    return{
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
            [-20, 0], 
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

  //<Animated.View style={[LogoAnimation, {position: 'absolute'}]}>

  return (
    <Conteiner>
      <Animated.View style={LogoAnimation}>
        <ImageTitule source={require('../../global/images/ImageTituleIntroducion.png')}/>
      </Animated.View>
      <Animated.View style={TextAnimation}>
        <TextSub>Delicious Discoveries Await</TextSub>
      </Animated.View>
    </Conteiner>
  );
}
