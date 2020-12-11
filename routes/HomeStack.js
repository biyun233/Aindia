import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Filtrer from '../screens/Filtrer';
import RegisterUser from '../screens/Auth/RegisterUser';
import Login from '../screens/Auth/LoginUser';
import BottomTab_candidat from './BottomTab_candidat';
import BottomTab_recruteur from './BottomTab_recruteur';
import OffreDetails from '../screens/Offres/OffreDetails';
import CreateProfilUser from '../screens/Profil/CreateProfilUser';


import CreateStudiesUser from '../screens/Studies/CreateStudiesUser';
import EditStudiesUser from "../screens/Studies/EditStudiesUser";
import CreateExperienceUser from "../screens/Experience/CreateExperienceUser";
import EditExperienceUser from '../screens/Experience/EditExperienceUser';
import CreateGoalUser from "../screens/Goal/CreateGoalUser";
import EditGoalUser from '../screens/Goal/EditGoalUser';
import ProfilUserRecruiter from '../screens/Profil/ProfilUserRecruiter';



const screens = {
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: false,
    },
  },
  TabRoute_candidat: {
    screen: BottomTab_candidat,
    navigationOptions: {
      headerShown: false,
    },
  },
  TabRoute_recruteur: {
    screen: BottomTab_recruteur,
    navigationOptions: {
      headerShown: false,
    },
  },

  RegisterUser: {
    screen: RegisterUser,
    navigationOptions: {
      headerShown: false,
    },
  },
  Filtrer: {
    screen: Filtrer,
    navigationOptions: {
      title: "Filtrer",
      headerTintColor: "#254151",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },
  OffreDetails: {
    screen: OffreDetails,
    navigationOptions: {
      title: " ",
      headerTintColor: "#254151",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },
  CreateProfilUser: {
    screen: CreateProfilUser,
    navigationOptions: {
      title: "Création de Profil",
      header: null,
    },
  },
  ProfilUserRecruiter: {
    screen: ProfilUserRecruiter,
    navigationOptions: {
      title: "Profil",
      headerTintColor: "white",
      headerStyle: {
        backgroundColor: "#254151",
      },
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 25,
      },
      headerBackTitle: "Retour",
    },
  },
  CreateStudiesUser: {
    screen: CreateStudiesUser,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#254151",
      },
      title: "Création de Parcours",
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },
  CreateGoalUser: {
    screen: CreateGoalUser,
    navigationOptions: {
      headerLeft: null,
      header: null,
      //title: "Mon Objectif",
      //headerStyle: {justifyContent: 'center',}
    },
  },
  EditGoalUser: {
    screen: EditGoalUser,
    navigationOptions: {
      //headerLeft: null,
      headerStyle: {
        backgroundColor: "#254151",
      },
      title: "Mon Objectif",
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },

  EditStudiesUser: {
    screen: EditStudiesUser,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#254151",
      },
      title: "Édition de Parcours",
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },
  CreateExperienceUser: {
    screen: CreateExperienceUser,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#254151",
      },
      title: "Création d'Expérience",
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    }
  },

  EditExperienceUser: {
    screen: EditExperienceUser,
    navigationOptions: {
      headerStyle: {
        backgroundColor: "#254151",
      },
      title: "Édition d'Expérience",
      headerTintColor: "white",
      headerTitleStyle: {
        fontWeight: "bold",
        fontSize: 20,
      },
      headerBackTitle: "Retour",
    },
  },
};

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);
