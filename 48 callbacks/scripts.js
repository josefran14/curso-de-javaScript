// Un callback es una funcion que se ejecuta a ttraves de una funcion
// Los callbacks no son asincronos

// const getUser = (id,cb) =>{
//     const user = {
//         name: "Francisco",
//         id: id
//     }

//      if(id == 2) cb("user not exist")
//      else cb(null,user)
// }

// getUser(1, (err,user) =>{
//     if(err) return console.log(err);
//     console.log(`user name is ${user.name}`);
// })

const users = [
  {
    id: 1,
    name: "Francisco",
  },
  {
    id: 2,
    name: "Dorian",
  },
  {
    id: 3,
    name: "Carlos",
  },
];

const emails = [
  {
    id: 1,
    email: "francisco@gmail.com",
  },
  {
    id: 2,
    email: "dorian@gmail.com",
  },
];

const getUser = (id, cb) => {
  const user = users.find((user) => user.id == id);
  if (!user) cb(`Not exist a user with id ${id}`);
  else cb(null, user);
};

const getEmail = (user, cb) => {
  const email = emails.find((email) => email.id == user.id);
  if(!email) cb(`${user.name} has not email`)
  else cb(null,{
    id:user.id,
    name: user.name,
    email: email.email
  })
};

getUser(3, (err, user) => {
  if (err) return console.log(err);
  
  getEmail(user, (err,res) =>{
    if (err) return console.log(err);
    console.log(res);
  })
});
