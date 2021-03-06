DROP DATABASE IF EXISTS rb3r1cxfg3wbmtzt;
CREATE DATABASE rb3r1cxfg3wbmtzt;


/*

user
    id,
    name,
    username,
    email,
    password;
    //* EXTRAS when accessing name entered for homepage banner,
    use *const name = str.split(' ');* to avoid saving first and last names in seperate columns

locations
    id,
    facility
    name,
    address,
    city,
    state,
    zip,
    lat,
    lon

loos
    id,
    location id,
    rating // rating 1-5 (might have to do in front end js),

reviews
    id,
    user id,
    loo id,
    title,
    review,
    date
*/
