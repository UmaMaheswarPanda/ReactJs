import React from "react";
import Person from "./Person";

function NameList() {
  const persons = [
    {
      id: 1,
      name: 'sumit',
      age: 15,
    },
    {
        id:2,
        name:'amit',
        age:12
    }
  ]
  const personList=persons.map(person => <Person person={person}/>)
  return <div>{personList}</div>
//   return (
//     <div>
//       {names.map((name) => (
//         <h2>{name}</h2>
//       ))}
//     </div>
    
//   );
}

export default NameList
