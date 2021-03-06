// IN PROGRESS // following code from E-Commerce hw (now that json files were imported to js files)

const seedUsers = require('./userData');
const seedLoos = require('./looData');
const seedReviews = require('./reviewData');
// const seedUsersLoos = require('./usersloosData')


const sequelize = require('../config/connection');

const seedDatabase = async () => {
    await sequelize.sync({ force: true });
    console.log('\n----- DATABASE SYNCED -----\n');

    await seedLoos();
    console.log('\n----- LOOS SYNCED -----\n');

    await seedUsers();
    console.log('\n----- USERS SYNCED -----\n');

    // await seedUsersLoos();
    // console.log('\n----- USERSLOOS SYNCED -----\n');

    await seedReviews();
    console.log('\n----- REVIEWS SYNCED -----\n');

    process.exit(0);
};

seedDatabase();
