import * as Google from "expo-google-app-auth";


const config = {
  iosClientId:
    "978143349657-90li9akpqsj382vgmgpj4va2ta7md8ch.apps.googleusercontent.com",
  androidClientId:
    "978143349657-ajdmbns9jhtqac994oq7acshfkhr1lp0.apps.googleusercontent.com",
};


export const auth = async () => {
    try {
        const result = await Google.logInAsync(config);
        console.log('result', result);
    } catch (error) {
        console.log("Erreur de Connexion", error)
    }
}