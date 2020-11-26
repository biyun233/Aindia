import { createStackNavigator } from 'react-navigation-stack';
import EditUserProfil from '../screens/Profil/EditUserProfil';
import ProfilScreen from '../screens/Profil/ProfilScreen';
import ProfilUser from '../screens/Profil/ProfilUser';
import UserStudies from "../screens/Studies/UserStudies";
import ExperienceUser from '../screens/Expérience/ExperienceUser';
import GoalUser from '../screens/Goal/GoalUser';
const screens = {
  ProfilScreen: {
    screen: ProfilScreen,
    navigationOptions: {
            headerTitle: "Mon Profil",
            headerStyle: {
                backgroundColor: '#254151',
            },
            headerTintColor: 'white',
            headerTitleStyle: {
                fontWeight: 'bold',
                fontSize: 20
            },
            headerLeft: () => null
    },
  },
  EditUserProfil: {
      screen: EditUserProfil,
      navigationOptions: {
        title: "Edition De Profil",
        
      },
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
  },
  ExperienceUser: {
    screen: ExperienceUser,
    navigationOptions: {
    },
  },  
    
}

const ProfilStack = createStackNavigator(screens);

export default ProfilStack;