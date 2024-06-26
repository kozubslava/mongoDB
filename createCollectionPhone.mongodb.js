/*Створити коллекцію телефонів і прикрутит до неє валідацію полів
у телефона можуть бути наступні поля:
  - назва
  - ціна
  - колір
  - вживаний / невживаний
  - габарити (товщина, висота, довжина)
  - підтримувані стандарти зв'язку (2G, 3G, LTE, 5G, WiFi, Bluetooth)

З них для кожного телефона обов'язково мати:
  - назва
  - ціна
  - вживаний / невживаний

У габаритів мають бути всі дані всередині
Ціна не може бути негативною
*/
db.createCollection("phones", {
  validator: {
    $jsonSchema: {
      bsonType: "object",
      required: ["model", "prise", "isUsed"],
      properties: {
        model: {
          bsonType: "string",
        },
        prise: {
          bsonType: "number",
          minimum: 0,
        },
        color: {
          bsonType: "string",
        },
        isUsed: {
          bsonType: "bool",
        },
        proportions: {
          bsonType: "object",
          required: ["thickness", "height", "width"],
          properties: {
            thickness: {
              bsonType: "number",
            },
            height: {
              bsonType: "number",
            },
            width: {
              bsonType: "number",
            },
          },
        },
        connection: {
          bsonType: "array",
          items: {
            bsonType: "object",
            properties: {
              network: {
                bsonType: "string",
              },
              description: {
                bsonType: "string",
              },
            },
          },
        },
      },
    },
  },
});

db.phones.insertOne({
  model: "iPhone",
  prise: 1500,
  color: "black",
  isUsed: false,
  proportions: {
    thickness: 1,
    height: 16,
    width: 7,
  },
  connection: [
    {
      network: "3G",
      description: "Lorem",
    },
    {
      network: "LTE",
      description: "Lorem 1",
    },
    {
      network: "Bluetooth",
      description: "Lorem 2",
    },
  ],
});

db.phones.find();
