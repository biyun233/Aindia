import React, { Component } from "react";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  SafeAreaView,
  FlatList
} from "react-native";
import { Button } from 'react-native-elements';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import { Firebase } from "../../utils/Firebase";

class EditOffre extends Component {

  constructor(props) {
    super();
    this.state = {
      key: props.navigation.state.params.key,
      AuthId: props.navigation.state.params.AuthId,
      title: props.navigation.state.params.title,
      nom: props.navigation.state.params.nom, 
      location: props.navigation.state.params.location, 
      salaireMin:props.navigation.state.params.salaireMin, 
      salaireMax:props.navigation.state.params.salaireMax,
      expérience:props.navigation.state.params.expérience, 
      étude:props.navigation.state.params.étude,
      date:props.navigation.state.params.date, 
      recruteur:props.navigation.state.params.recruteur,
      poste:props.navigation.state.params.poste,
      mission:props.navigation.state.params.mission,
      tech:props.navigation.state.params.tech,
      isLoading: true,
      etude: [
        {text: 'Peu importe', key:'1', select: 'false', id: 'etude'},
        {text: '- de bac +3', key:'2', select: 'false', id: 'etude'},
        {text: 'bac +3 ', key:'3', select: 'false', id: 'etude'},
        {text: 'bac +4', key:'4', select: 'false', id: 'etude'},
        {text: 'bac +5 ou +', key:'5', select: 'false', id: 'etude'},
      ],
      experience: [
        {text: 'Stagiaire', key:'1', select: 'false', id: 'experience'},
        {text: 'moins de 1 an', key:'2', select: 'false', id: 'experience'},
        {text: 'plus de 1 an ', key:'3', select: 'false', id: 'experience'},
        {text: 'de 3 à 5 ans', key:'4', select: 'false', id: 'experience'},
        {text: 'plus de 5 ans', key:'5', select: 'false', id: 'experience'},
      ]
    };
  }

  inputValueUpdate = (value, prop) => {
    const state = this.state;
    state[prop] = value;
    this.setState(state);
  };

  updateOffre() {
    this.setState({ isLoading: true });

    const UpdateDBRef = Firebase.firestore()
      .collection("OfferDetails")
      .doc(this.state.key);

    UpdateDBRef.set({
      title: this.state.title,
      nom: this.state.nom, 
      location: this.state.location, 
      salaireMin:this.state.salaireMin, 
      salaireMax:this.state.salaireMax,
      expérience:this.state.expérience, 
      étude:this.state.étude,
      date:this.state.date, 
      recruteur:this.state.recruteur,
      poste:this.state.poste,
      mission:this.state.mission,
      tech:this.state.tech,
      AuthId: this.state.AuthId,
    })
      .then((docRef) => {
        alert("Vos modifications ont bien été Sauvegarder ! ");
        this.props.navigation.navigate("ProfilScreen");
      })
      .catch((error) => {
        alert("Vos modifications n'ont pas été sauvegarder ! ");
        this.setState({
          isLoading: false,
        });
      });
  }

  _renderItem = ({item, index}) => {
    const styleItem = (item.select == "false" ? styles.itemNonSelected : styles.itemSelected);
    return (
        <TouchableOpacity onPress={() => this.pressHandler(item)}>
            <Text style={styleItem}>{item.text}</Text>
        </TouchableOpacity>
    )
}
handle = (item, state, newState) =>{
  let prev = [...state];
  for (let i = 0; i < prev.length; i++) {
      if (prev[i] === item ) {
          if(prev[i].select == "true"){
              prev[i].select = "false";
          }
          else if(prev[i].select == "false"){
              prev[i].select = "true";
              this.inputValueUpdate(prev[i].text, newState);
              console.log(this.state.étude);
              for (let j = 0; j < prev.length; j++) {
                  if (j != i) {
                      prev[j].select = "false";
                  }
              }
          }
          
      } 
  }
  
}
  pressHandler(item) {
    switch(item.id){
        case 'etude': 
            this.handle(item, this.state.etude, "étude");
            break;
        case 'experience': 
            this.handle(item, this.state.experience, "expérience");
            break;
    }
  };
  render() {

    return (
      <SafeAreaView style={styles.container}>
        <KeyboardAwareScrollView >
            <View style={styles.content}> 
            <TextInput 
                style={styles.input} 
                placeholder="Titre d'offre" 
                value={this.state.title}  
                onChangeText={(value) =>
                  this.inputValueUpdate(value, "title")
                }/>
            <TextInput 
                style={styles.input} 
                placeholder="Nom d'entreprise" 
                value={this.state.nom}  
                onChangeText={(value) =>
                  this.inputValueUpdate(value, "nom")
                }/>
            <TextInput 
                style={styles.input} 
                placeholder="Salaire Minimum" 
                value={this.state.salaireMin}  
                onChangeText={(value) =>
                  this.inputValueUpdate(value, "salaireMin")
                }/>
            <TextInput 
                style={styles.input} 
                placeholder="Salaire Maximum" 
                value={this.state.salaireMax}  
                onChangeText={(value) =>
                  this.inputValueUpdate(value, "salaireMax")
                }/>
            <TextInput 
                style={styles.input} 
                placeholder="Localisation" 
                value={this.state.location}  
                onChangeText={(value) =>
                  this.inputValueUpdate(value, "location")
                }/>
            <Text style={styles.title}>Niveau d'études</Text>
            <FlatList 
                keyExtractor={(item) => item.key}
                numColumns= {2}
                data={this.state.etude}
                renderItem={this._renderItem}
                    />
            
            <Text style={styles.title}>Niveau d'expériences</Text>
            <FlatList 
                keyExtractor={(item) => item.key}
                numColumns= {2}
                data={this.state.experience}
                renderItem={this._renderItem}
                    />
            
            <Text style={styles.title}>Mission</Text>
            <TextInput 
                    multiline={true} 
                    style={styles.input_grand} 
                    value={this.state.mission} 
                    onChangeText={(value) =>
                      this.inputValueUpdate(value, "mission")
                    }/>
            <Text style={styles.title}>Technologie Requis</Text>
            <TextInput 
                multiline={true} 
                style={styles.input_grand} 
                value={this.state.tech} 
                onChangeText={(value) =>
                  this.inputValueUpdate(value, "techs")
                }/>
            <Button 
                title='valider' 
                buttonStyle={styles.button} 
                titleStyle={styles.appliquer} 
                onPress={() => this.updateOffre()}
                />
                    
          </View>              
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  }
}


const styles = StyleSheet.create({
  container: {
      flex: 1,
      flexDirection: "column",
      alignItems: "center",
      backgroundColor: "#EBEAEA",
  },
  content: {
      padding: 20
  },
  title: {
      marginTop: 20,
      fontSize: 30,
      fontWeight: "bold",
      color: "#254151",
      marginBottom: 10

  },
  list: {
      marginVertical: 20
  },
  input: {
      borderBottomWidth: 1,
      width: 300,
      height: 30,
      marginTop: 20,
      marginBottom: 10
    },
  input_grand: {
      borderWidth: 1,
      height: 150,
      width: 300,
      backgroundColor: "white"
  },
  button: {
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#254151",
      height: 50,
      width: 250,
      marginTop: 50,
      marginHorizontal: 40
    },
  appliquer: {
      color: "white",
      fontSize: 30
  },
  itemNonSelected: {
    padding: 5,
    borderWidth: 1,
    borderColor: "#254151",
    marginHorizontal: 15,
    marginVertical: 5,
},

itemSelected: {
    padding: 5,
    borderWidth: 1,
    backgroundColor: "#254151",
    color: "white",
    marginHorizontal: 15,
    marginVertical: 5,
}
});

export default EditOffre;