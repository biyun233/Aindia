import { Firebase } from "./Firebase";



class ChatFirebase {
    constructor() {
        this.checkAuth();
    }

    checkAuth = () => {
        Firebase.auth().onAuthStateChanged(user => {
            if(!user){
                Firebase.auth().signInAnonymously();
            }
        });
    };

    sendMessage = messages => {
        messages.forEach(item => {
            const message = {
                content: item.text,
                timestamp: Firebase.database.ServerValue.TIMESTAMP,
                user: item.user,
            };

            this.db.push(message);
        });
    };

    parse = message => {
        const { user, text, timestamp } = message.val();
        const { key: _id } = message;
        const createdAt = new Date(timestamp);

        return {
            _id,
            createdAt,
            text,
            user,
        };
    };

    get = callback => {
        this.db.on("child_added", snapshot => callback(this.parse(snapshot)));
    };

    off(){
        this.db.off();
    }

    get db(){
        return Firebase.database().ref("messages");
    }
    get uid(){
        return (Firebase.auth().currentUser || {}).uid;
    }


}

export default new ChatFirebase();
