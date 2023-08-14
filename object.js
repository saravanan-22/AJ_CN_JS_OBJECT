// let bioData = () => {
//   let cV = {
//     ["Full Name"]: "Arun Prince",
//     ["Date of Birth"]: "09 - 04 - 1999",
//     Gender: "Male",
//     ["Marital status"]: "Single",
//     ["Educational Qualification"]: {
//       Highschool: "VVMHS",
//       College: "GAC, Coimbatore",
//       Degree: "Psychology,",
//     },
//     Skills: {
//       Language: "English, Tamil,",
//       Technical: "Full-Stack Development",
//     },
//     Hobbies: "Reading books",
//     Address: {
//       ["Door No"]: "8/1234",
//       Street: "Abc street,",
//       District: "Tirupur",
//       State: "Tamilnadu",
//     },
//     Reference: {
//       Contact: "Mob : 9087657866",
//       Mail: "yourname@email.com",
//     },
//   };
//   let result = () => {
//     console.log("-----------------------------------------------");
//     console.log("              Bio Data        ");
//     console.log("-----------------------------------------------");
//     console.log(`Full Name         : ${cV["Full Name"]}`);
//     console.log(`Date of Birth     : ${cV["Date of Birth"]}`);
//     console.log(`Marital Status    : ${cV["Marital status"]}`);
//     console.log("Education         :");
//     let Education = cV["Educational Qualification"];
//     for (let key1 in Education) {
//       console.log(`                  ${key1} : ${Education[key1]}`);
//     }
//     console.log("Skills            :");
//     let sk = cV.Skills;
//     for (let key2 in sk) {
//       console.log(`                  ${key2} : ${sk[key2]}`);
//     }
//     console.log(`Hobbies           : ${cV.Hobbies}`);
//     console.log("Address           :");
//     let ad = cV.Address;
//     for (let key3 in ad) {
//       console.log(`                  ${key3} : ${ad[key3]}`);
//     }
//     console.log("Reference         : ");
//     let rf = cV.Reference;
//     for (let key4 in rf) {
//       console.log(`                  ${key4} : ${rf[key4]}`);
//     }
//     console.log("----------------------------------------------------");
//   };
//   return result();
// };
// bioData();

// let userDetails = {
//         firstName: "John",
//         ["last name"]: "Jack",
//         age: 30,
//         isAdmin: true
//     }
//     let key = prompt("Enter any property key");
//     console.log(userDetails.[key]);

// let bioData = () => {

//       let userDetails = {

//         ["first Name"] : prompt("Enter your first name","Saravanan"),
//         ["second Name"]: prompt("Enter your second name","R"),
//         age            : +prompt("Enter the age",24),
//         ["D.O.B"]      : prompt("date of birth","22-10-1999"),
//         ["Educational details"] : {
//           college : prompt("college name","NASC"),
//           address : prompt("address","Perundurai"),
//           year    : +prompt("Enter the ending year",2020),
//           percentage : +prompt("Ender Your percentage",65)
//         },
//         address   : {
//           street : prompt("Enter your street","Sedarpalayam"),
//           city   : prompt("Enter your city","Pooluvapatti"),
//           district:prompt("Enter your district","Tirupur") ,
//           Pincode: +prompt("Enter your pincode",641602),
//           state  : prompt("Enter your state","Tamilnadu"),
//           country: prompt("Enter your country","India")
//         }
//       };

//           console.log ("-----------------------------------------------------------");
//           console.log ("                        Bio data");
//           console.log ("-----------------------------------------------------------");
//           console.log (`      First Name          -      ${userDetails["first Name"]}`);
//           console.log (`      Second Name         -      ${userDetails["second Name"]}`);
//           console.log (`      Age                 -      ${userDetails.age}`);
//           console.log (`      Date of birth       -      ${userDetails["D.O.B"]}`);
//           console.log("      Educational details -");

// for (let key in userDetails["Educational details"]) {
//   console.log (`                                 ${(key.padEnd(10))} -  ${userDetails["Educational details"][key]}`)

// }

// console.log ("      Address             -"); //doubt ///////////
//   for (let key in userDetails.address) {
//         console.log(`                                 ${(key.padEnd(10))} - ${userDetails.address[key]}`)
//   }

// console.log("--------------------------------------------------------")

// }; bioData()

let userDetails = {
  firstName: "John",
  ["last name"]: "Jack",
  age: 30,
  isAdmin: true,
};
let key = prompt("Enter any property key");
console.log(userDetails[key]);
