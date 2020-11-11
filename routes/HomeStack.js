import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';
import Filtrer from '../screens/Filtrer';
import RegisterUser from '../screens/RegisterUser';
import Login from '../screens/LoginUser';
import BottomTab_candidat from './BottomTab_candidat';
import BottomTab_recruteur from './BottomTab_recruteur';
import OffreDetails from '../screens/OffreDetails';
import CreateProfilUser from '../screens/CreateProfilUser';

import StudiesUserDetails from '../screens/StudiesUserDetails';
import StudiesUserEdit from '../screens/StudiesUserEdit';
import UpdateUser from '../screens/UpdateUser';
import ExperienceUserEdit from "../screens/ExperienceUserEdit";
import CreateAboutUser from '../screens/CreateAboutUser';
import EditAboutUser from '../screens/EditAboutUser';
import CreateStudiesUser from '../screens/CreateStudiesUser';
import EditStudiesUser from "../screens/EditStudiesUser";
import CreateExperienceUser from "../screens/CreateExperienceUser";
import EditExperienceUser from '../screens/EditExperienceUser';
import CreateGoalUser from "../screens/CreateGoalUser";
import EditGoalUser from '../screens/EditGoalUser';

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
    UpdateUser: {
        screen: UpdateUser,
        navigationOptions: {
          //headerLeft: null,
          title: "Mes Informations",
          //headerStyle: {justifyContent: 'center',}
        },
    },
    CreateAboutUser: {
        screen: CreateAboutUser,
        navigationOptions: {
          //headerLeft: null,
          title: "À Propos",
          //headerStyle: {justifyContent: 'center',}
        },
    },
    EditAboutUser: {
        screen: EditAboutUser,
        navigationOptions: {
          //headerLeft: null,
          title: "À Propos Édition",
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
    ExperienceUserEdit: {
        screen: ExperienceUserEdit,
        navigationOptions: {
          //headerLeft: null,
          title: "Édition Du Stage",
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