import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Filtrer from '../screens/Filtrer';
import RegisterUser from '../screens/Auth/RegisterUser';
import Login from '../screens/Auth/LoginUser';
import BottomTab_candidat from './BottomTab_candidat';
import BottomTab_recruteur from './BottomTab_recruteur';
import OffreDetails from '../screens/Offres/OffreDetails';
import CreateProfilUser from '../screens/Profil/CreateProfilUser';

import StudiesUserDetails from '../screens/Studies/StudiesUserDetails';
import StudiesUserEdit from '../screens/Studies/StudiesUserEdit';
import CreateStudiesUser from '../screens/Studies/CreateStudiesUser';
import EditStudiesUser from "../screens/Studies/EditStudiesUser";
import CreateExperienceUser from "../screens/Expérience/CreateExperienceUser";
import EditExperienceUser from '../screens/Expérience/EditExperienceUser';
import CreateGoalUser from "../screens/Goal/CreateGoalUser";
import EditGoalUser from '../screens/Goal/EditGoalUser';

const screens = {
    Login: {
        screen: Login,
        navigationOptions: {
            headerShown: false
        }
    },
    TabRoute_candidat: {
        screen: BottomTab_candidat,
        navigationOptions: {
            headerShown: false
        }
    },
    TabRoute_recruteur: {
        screen: BottomTab_recruteur,
        navigationOptions: {
            headerShown: false
        }
    },
    
    RegisterUser: {
        screen: RegisterUser,
        navigationOptions: {
            headerShown: false
        }
    },
    Filtrer: {
        screen: Filtrer,
        navigationOptions: {
            title: "Filtrer",
            headerTintColor: "#254151",
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            headerBackTitle: "Candidat"
        }
    },
    OffreDetails: {
        screen: OffreDetails,
        navigationOptions: {
            title: " ",
            headerTintColor: "#254151",
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20,
              },
            headerBackTitle: "Candidat"
        }
    },
    CreateProfilUser: {
        screen: CreateProfilUser,
        navigationOptions: {
          title: "Création De Mon Profil",
          //header: null,
        },
    },
    
    StudiesUserDetails: {
        screen: StudiesUserDetails,
        navigationOptions: {
          //headerLeft: null,
          title: "Détails du Parcours",
          //headerStyle: {justifyContent: 'center',}
        },
      },
    StudiesUserEdit: {
        screen: StudiesUserEdit,
        navigationOptions: {
          //headerLeft: null,
          title: "Mes Études",
          //headerStyle: {justifyContent: 'center',}
        },
    },
   
    CreateStudiesUser: {
        screen: CreateStudiesUser,
        navigationOptions: {
          //headerLeft: null,
          title: "Mes Formations",
          //headerStyle: {justifyContent: 'center',}
        },
    },
    CreateGoalUser: {
        screen: CreateGoalUser,
        navigationOptions: {
          //headerLeft: null,
          title: "Mon Objectif",
          //headerStyle: {justifyContent: 'center',}
        },
    },
    EditGoalUser: {
        screen: EditGoalUser,
        navigationOptions: {
          //headerLeft: null,
          title: "Mon Objectif",
          //headerStyle: {justifyContent: 'center',}
        },
    },
    
    EditStudiesUser: {
        screen: EditStudiesUser,
        navigationOptions: {
          //headerLeft: null,
          //title: "Mes Formations",
          //headerStyle: {justifyContent: 'center',}
        },
    },
    CreateExperienceUser: {
        screen: CreateExperienceUser,
        navigationOptions: {
          //headerLeft: null,
          title: "Mes Expériences",
          //header: null,
          //headerStyle: {justifyContent: 'center',}
        },
    },
    
    EditExperienceUser: {
        screen: EditExperienceUser,
        navigationOptions: {
          //headerLeft: null,
          title: "Mes Expériences",
          //header: null,
          //headerStyle: {justifyContent: 'center',}
        },
    },
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);