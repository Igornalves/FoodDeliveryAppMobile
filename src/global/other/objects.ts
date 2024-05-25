import { DrawerActions } from "@react-navigation/native";

// const [fontsLoaded] = useFonts({
    // Montserrat_500Medium,
    // Montserrat_600SemiBold,
    // Inter_400Regular
// });

// const pressButton = () => {
//   props.navigation.dispatch(DrawerActions.closeDrawer());
// };

// const pressButton = () => {
//     props.navigation.dispatch(DrawerActions.openDrawer());
// };

export const pressButtonClose = (props) => {
    props.navigation.dispatch(DrawerActions.closeDrawer());
};

export const pressButtonOpen = (props) => {
    props.navigation.dispatch(DrawerActions.openDrawer());
};

export const goBackScreen = (props) => {
    props.navigation.navigate('Home');
};

export const goForScreen = (props) => {
    props.navigation.navigate('Locetion');
};

export const goForScreenAccount = (props) => {
    props.navigation.navigate('account-Drawer');
};

export const goForScreenStrap2 = (props) => {
    props.navigation.navigate('Stap2');
};

export const goForScreenStrap3 = (props) => {
    props.navigation.navigate('StapGetStarted');
};

export const goForScreenGetStarted = (props) => {
    props.navigation.navigate('WelcomeForLoginPage');
};

export const CreateLoginPageStart = (props) => {
    props.navigation.navigate('CreateLoginPage');
};

// export const goForScreenBest = (props) => {
//     props.navigation.navigate('BestOffers');
// };