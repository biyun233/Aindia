import { createStackNavigator } from "react-navigation-stack";
import Recruteur from "../screens/Accueil/Recruteur";
import Constants from "expo-constants";

const RecruteurStack = createStackNavigator({
  Recruteur: {
    screen: Recruteur,
    navigationOptions: ({ navigation }) => ({
      //header: () => <Header_recruteur navigation= {navigation} />,
      headerStyle: {
        backgroundColor: "#254151",
        height: Constants.statusBarHeight + 1,
      },
      headerLeft: null,
    }),
  },
});

export default RecruteurStack;
