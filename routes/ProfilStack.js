import { createStackNavigator } from 'react-navigation-stack';
import EditUserProfil from '../screens/Profil/EditUserProfil';
import ProfilScreen from '../screens/Profil/ProfilScreen';
import ProfilUser from '../screens/Profil/ProfilUser';
import UserStudies from "../screens/Studies/UserStudies";
import ExperienceUser from '../screens/Experience/ExperienceUser';
import GoalUser from '../screens/Goal/GoalUser';

const screens = {
  ProfilScreen: {
    screen: ProfilScreen,
    navigationOptions: {
      headerTitle: "Profil",
      headerStyle: {
        backgroundColor: "#254151",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 26,
      },
      headerLeft: () => null,
    },
  },
  EditUserProfil: {
    screen: EditUserProfil,
    navigationOptions: {
      headerTitle: "J'édite Mon Profil",
      headerStyle: {
        backgroundColor: "#254151",
      },
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 22,
      },
    },
    headerBackTitle: "Retour",
  },
  ProfilUser: {
    screen: ProfilUser,
    navigationOptions: {
      //title: 'Mon Profil',
    },
  },
  GoalUser: {
    screen: GoalUser,
    navigationOptions: {
      //headerLeft: null,
      title: "Mon Objectif",
      //headerStyle: {justifyContent: 'center',}
    },
  },
  UserStudies: {
    screen: UserStudies,
    navigationOptions: {
      //headerLeft: null,
      //title: "Mes Formations",
      //headerStyle: {justifyContent: 'center',}
    },
    //headerBackTitle: "Retour",
  },
  ExperienceUser: {
    screen: ExperienceUser,
    navigationOptions: {},
  },
};

const ProfilStack = createStackNavigator(screens);

export default ProfilStack;
