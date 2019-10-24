import * as firebase from 'firebase';



const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN ,
    databaseURL:process.env.FIREBASE_DATABASE_URL ,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STOREAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};

firebase.initializeApp(firebaseConfig);


const database = firebase.database();
export{ firebase, database as default}
//child_added
// database.ref('expenses').on('child_added',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// });
//child_changed
// database.ref('expenses').on('child_changed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('child_removed',(snapshot)=>{
//     console.log(snapshot.key, snapshot.val())
// });

// database.ref('expenses').on('value',(snapshot)=>{
//     const expenses =[];

//       snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//       });
//       console.log(expenses)
//   });
 
  
      

// database.ref('expenses')
//   .once('value')
//   .then((snapshot)=>{
//       const expenses =[];

//       snapshot.forEach((childSnapshot) => {
//        expenses.push({
//            id: childSnapshot.key,
//            ...childSnapshot.val()
//        });
//       });
//       console.log(expenses)
//   });

database.ref('expenses').push({
    description:'Rent',
    amount:7000,
    createdAt:76137213891
});

// database.ref('expenses').push({
//     description:'Food',
//     amount:1000,
//     createdAt:76137213891
// });

// database.ref('expenses').push({
//     description:'phone',
//     amount:3000,
//     createdAt:76137213891
// });
// database.ref().on('value',(snapshot)=>{
//     const val = snapshot.val();
//     console.log(` ${val.name} is a ${val.job.title} at ${val.job.company}`)
// })

//**using on */
// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// });

// setTimeout(()=>{
//     database.ref('age').set(24);
// },3500);

// setTimeout(()=>{
//     database.ref().off();
// },5000);

// setTimeout(()=>{
//     database.ref('age').set(28);
// },10000);




/////***using once****/
// database.ref('job')
//     .once('value')
//     .then((snapshot)=>{
//       const val = snapshot.val();
//       console.log(val)
//     })
//     .catch((e)=>{
//       console.log('Error fecthing data',e);
//     });


// database.ref().set({
//   name:'sabrina akther',
//   age:25,
//   stressLevel:9,
//    job:{
//        title:'software developer',
//        company:'Amazon'
//    },
//    location:{
//        city:'New York',
//        country:'USA'
//    }
// }).then(()=> {
//     console.log('Data is saved!');
// }).catch((e) => {
//     console.log('This is failed',e);
// })


//**** */
//database.ref('age').set(26)
//database.ref('location/city').set('Texsas')

///****removefrom database ****/
// database.ref()
//  .remove()
//  .then(()=>{
//      console.log('Data was removed!')
//  }).catch((e)=> {
//      console.log('Did not remove data',e)
//  })


//*****update database  */
// database.ref().update({
//   stressLevel:6,
//   'job/company':'Instragram',
//   'location/city':'Nevada'
// })