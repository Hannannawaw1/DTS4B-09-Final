import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcz7_W3W_XjpW9K5w1oB8j_PHd92rTpUU",
  authDomain: "sudomovies-18cac.firebaseapp.com",
  projectId: "sudomovies-18cac",
  storageBucket: "sudomovies-18cac.appspot.com",
  messagingSenderId: "123939941221",
  appId: "1:123939941221:web:f8e40e5a4df1a2c7b08f8c",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export { auth };
