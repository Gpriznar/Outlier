const pgp = require('pg-promise')()

const cn= {
    host: 'localhost',
    port: 5432,
    database: 'outlier',
    user: '',
    password: ''
}
var db = pgp(cn)

db.none(`CREATE TABLE IF NOT EXISTS creators(
    id SERIAL PRIMARY KEY,
    first_name varchar(25) NOT NULL,
    last_name varchar(25) NOT NULL,
    email varchar(100) NOT NULL UNIQUE,
    password varchar(25) NOT NULL,
    phone_number varchar(20) NOT NULL,
    profile_image varchar(500)
)`)

db.none(`CREATE TABLE IF NOT EXISTS videos(
    id SERIAL PRIMARY KEY,
    creator_id INTEGER REFERENCES creators(id),
    title varchar(300) NOT NULL,
    description text,
    thumbnail text,
    upload_timestamp timestamp,
    label VARCHAR(300),
    s3_location varchar(300)
)`)

db.none(`CREATE TABLE IF NOT EXISTS payouts(
    id SERIAL PRIMARY KEY,
    creator_id INTEGER REFERENCES creators(id),
    amount money NOT NULL,
    timestamp timestamp
)`)

module.exports = db;