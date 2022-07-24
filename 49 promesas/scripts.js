// Una promesa es un objeto con 2 callbacks internos

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
  
  const getUser = (id) => {
    const user = users.find((user) => user.id == id);
    return promise = new Promise((resolve,reject) =>{
        if (!user) reject (`Does not exist an user with id ${id}`);
        else resolve (user);
    })
  };
  
  const getEmail = (user) => {
    const email = emails.find((email) => email.id == user.id);

    return promise = new Promise((resolve,reject) =>{
        if (!email) reject (`${user.name} has not email`);
        else resolve ({
            id:user.id,
            name: user.name,
            email: email.email
          });
    })
}
  
  getUser(2)
  .then(user => getEmail(user))
  .then(res => console.log(res))
  .catch(err => console.log(err))
