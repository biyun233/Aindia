import { createStackNavigator } from "react-navigation-stack";
import ProfilRecruteur from "../screens/Profil/ProfilRecruteur";
import ProfilUserRecruiter from "../screens/Profil/ProfilUserRecruiter";
import EditOffre from "../screens/Offres/EditOffre";


const screens = {
  ProfilRecruteur: {
    screen: ProfilRecruteur,
    navigationOptions: {
      headerTitle: "Mes Offres",
      headerStyle: {
        backgroundColor: "#254151",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerLeft: () => null,
    },
  },
  /*ProfilUserRecruiter: {
    screen: ProfilUserRecruiter,
    navigationOptions: {
      title: "Mon Profil",
      headerTintColor: "#254151",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },*/
  EditOffre: {
    screen: EditOffre,
    navigationOptions: {
      headerTitle: "Editer l'Offre",
      headerStyle: {
        backgroundColor: "#254151",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
    },
  },
};

const ProfilRecruStack = createStackNavigator(screens);

export default ProfilRecruStack;
