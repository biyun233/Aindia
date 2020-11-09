import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, FlatList } from "react-native";
import Constants from 'expo-constants';
import { Button } from 'react-native-elements';
import Card from '../components/Card';


export default function Candidat({ navigation }) { 
    const [offre, setOffre] = useState([
        {title:'Développeur Web(H/F)',
         nom:'Thales', location:'Bordeaux', 
         salaireMin:'800', salaireMax:'1000',
         expérience:'+ de 3 ans', étude:'bac +3',
         date:'10-10-2020', recruteur:'WANG Biyun',
         poste:'Manager', mission:'1. Analyser et/ou développer les composants techniques communs.\n2. Assurer la maintenance corrective et évolutive des développements. \n3. Tester, identifier et traiter les dysfonctionnements éventuels.\n',
         tech:'— Framework Spring, Hibernate, React JS, Angular, Vue.js\n— PostgreSQL, Elasticsearch, Go, Docker, Kubernetes, AWS, Google Cloud', key: '1'}
    ]);
    const pressHandler = () => {
        navigation.navigate('Filtrer');
    }
    return (
        <View style={styles.container}>
            <View>
                <Button 
                title='Filtrer' 
                buttonStyle={styles.button} 
                titleStyle={styles.filtrer} 
                onPress={pressHandler}/>

                {/*tuto26 custom card component*/}
                
            </View>
            <View>
                <FlatList 
                        data={offre}
                        renderItem={({item}) => (
                            <TouchableOpacity onPress={() => navigation.navigate('OffreDetails', item)}>
                                <Card item={item} />
                            </TouchableOpacity>
                        )}
                />
            </View>
            
        </View>

        
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "column",
        alignItems: "center",
        backgroundColor: "#EBEAEA",
        paddingBottom: 20
    },

    button: {
        flexDirection: "column",
        justifyContent: "flex-end",
        alignItems: "center",
        borderWidth: 1,
        borderRadius: 0,
        borderColor: "#254151",
        backgroundColor: "white",
        height: 38,
        width: 80,
        marginTop: 20,
        marginLeft: 240
        
      },
    filtrer:{
        fontWeight: "bold",
        fontSize: 20,
        color: "#254151"
    },
});
