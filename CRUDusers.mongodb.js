
// https://www.mongodb.com/docs/mongodb-vscode/playgrounds/firstMongo




db.users.insertOne({
  firstName: "First",
  lastName: 'User',
  email: 'user@user.com',
  isMale: true,
  height: 1.91,
  birthday:new Date(1990,5,15),
  adress:{
    city:'Zaporizhzhia',
    country:'Ukrein'
  }
});

db.users.insertOne({
  fulName:'Daryna Kozub',
  email: 'user@user.com',
  isMale: true,
  height: 1.91,
  birthday:new Date(1989,5,26),
  adress:{
    city:'Kharkov',
    country:'Ukrein'
  }
});

db.cats.inssert({
  name: 'Vas`ka',
  breed: 'British',
  age: 8,
  isMale: true,
  mass: 8
});

db.cats.insertOne({
  name: 'Busia',
  breed: 'Maine Coon',
  age: 4,
  isMale: false,
  mass: 6
});

db.cats.inssert({
  name: 'Felex',
  breed: 'Maine Coon',
  age: 6,
  isMale: true,
});

db.cats.inssert({
  name: 'Rich',
  breed: 'British',
  isMale: true,
  mass: 9
});
