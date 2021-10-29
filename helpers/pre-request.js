'use strict';
var Faker = require('faker-br');
const { kinships } = require('./constants');

module.exports = {
  generateRandomPayload,
  printStatus,
  generateRandomUser,
  generateDeliveryRequest
};

function printStatus (requestParams, response, context, ee, next) {
  console.log(JSON.parse(response.body), response.statusCode);
  return next();
}

function generateRandomPayload (userContext, events, done) {
  var payload = {
    "username": "0000000000",
    "password": "teste"
  };

  // payload.Email =  Faker.internet.exampleEmail();  
  userContext.vars.payload = payload;
  return done();
}


function generateRandomUser (userContext, events, done) {
  var payload = {
    "email": "ledhukro@ipwe.play",
    "password": "teste",
    "name": "John F",
    "phoneNumber": "44998107900",
    "cpf": "00000000000",
    "identityUrl": "https://google.com",
    "driverLicenseUrlFront": "https://google.com",
    "driverLicenseUrlBack": "https://google.com",
    "vehicleLicenseUrl": "https://google.com",
    "paymentMethod": {
      "paymentKeyType": "CPF",
      "key": "44998107900",
      "cpfCnpj": "17475817121"
    },
    "emergencyContact": {
      "name": "Fred P",
      "phoneNumber": "44998107900",
      "kinship": "BROTHER"
    }
  }

  payload.email = Faker.internet.email();
  payload.name = Faker.name.findName(); 
  payload.phoneNumber = Faker.phone.phoneNumber();
  payload.cpf = Faker.br.cpf();
  payload.identityUrl = Faker.image.imageUrl();
  payload.driverLicenseUrlFront = Faker.image.imageUrl();
  payload.driverLicenseUrlBack = Faker.image.imageUrl();
  payload.vehicleLicenseUrl = Faker.image.imageUrl();
  payload.paymentMethod.key = Faker.br.cpf();
  payload.paymentMethod.cpfCnpj = Faker.br.cpf();
  payload.emergencyContact.name = Faker.name.findName();
  payload.emergencyContact.phoneNumber = Faker.phone.phoneNumber();
  payload.emergencyContact.kinship = kinships[Math.floor(Math.random() * kinships.length)];

  userContext.vars.payload = payload;
  return done();
}


function generateDeliveryRequest (userContext, events, done) {
  const products = Array.from(new Array(20), () => ({
    "code": "bdb71660-367c-11ec-a5a5-d9d39fbb565b",
    "name": "Ração de cachorro dogshow 14kg",
    "imageUrl": "https://example.com",
    "quantity": 3
  }));

  var payload = {
    "orderId": "6094",
    "senderId": "bdb76480-367c-11ec-a5a5-d9d39fbb565b",
    "senderZipcode": "87000000",
    "senderName": "John F",
    "senderImageUrl": "https://example.com",
    "senderLat": "38.8951",
    "senderLong": "-77.0364",
    "receiverId": "bdb76481-367c-11ec-a5a5-d9d39fbb565b",
    "receiverName": "John F",
    "receiverAddress": "Rua São João 271, Maringá - PR",
    "senderAddress": "Rua São João 271, Maringá - PR",
    "receiverLat": "38.8951",
    "receiverLong": "-77.0364",
    "receiverPhoneNumber": "44998107900",
    "observation": "Desejo que a entrega seja deixado na portaria",
    "fee": 3.13,
    products
  }


  userContext.vars.payload = payload;
  return done();
}