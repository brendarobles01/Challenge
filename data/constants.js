require('dotenv').config();

module.exports = {
    userStandard: process.env.USERVALID,
    passGeneral: process.env.PASSVALID,
    userLocked: process.env.USERNOVALID,
    userName: process.env.NAME,
    userLastName: process.env.LASTNAME,
    userZipCode: process.env.ZIPCODE,
    NewUserName: process.env.NAMEUPDATE,
    NewUserLastName: process.env.LASTNAMEUPDATE,
    NewUserZipCode: process.env.ZIPCODEUPDATE

};