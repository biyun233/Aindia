
import { createStackNavigator } from 'react-navigation-stack';
import Candidat from '../screens/Candidat';
import Constants from "expo-constants";

const CandidatStack = createStackNavigator({
    Candidat: {
        screen: Candidat,
        navigationOptions: ({navigation}) => ({
            //header: () => <Header navigation={navigation}/>,
            headerStyle: {
                backgroundColor: '#254151',
                height: Constants.statusBarHeight + 1,
            },
            headerLeft: null
        })
    },
    
    
});


  
export default CandidatStack;