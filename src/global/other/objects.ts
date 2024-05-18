import { DrawerActions } from "@react-navigation/native";

export const pressButton = (props) => {
    props.navigation.dispatch(DrawerActions.openDrawer());
};