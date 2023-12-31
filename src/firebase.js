//firebase.js
import firebase from "firebase/compat/app";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: `${process.env.REACT_APP_FIREBASE_KEY}`,
  authDomain: "babylion-a387d.firebaseapp.com",
  projectId: "babylion-a387d",
  storageBucket: "babylion-a387d.appspot.com",
  messagingSenderId: "1052449483871",
  appId: `${process.env.REACT_APP_FIREBASE_ID}`,
  measurementId: "G-KC0Z2MYFSY",
};

// firebaseConfig 정보로 firebase 시작
firebase.initializeApp(firebaseConfig);

// firebase의 firestore 인스턴스를 변수에 저장
const firestore = firebase.firestore();

// 다른 곳에서 불러올때 firestore로 불러와야 함!!
export { firestore };
