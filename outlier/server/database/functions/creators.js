const db = require('../databaseConnection')

module.exports = {
    // check if an email is already in use
    emailTaken: (email) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT COUNT(*) FROM creators WHERE email = $1 `, email)
            .then(results => {
                if(results[0].count > 0){resolve(true)}
                else{resolve(false)}
            })
            .catch(error => reject(error))
        })
    },
    // check if an email is already in use
    phoneNumberTaken: (phone) => {
        return new Promise((resolve, reject) => {
            db.query(`SELECT COUNT(*) FROM creators WHERE email = $1`, phone)
            .then(results => {
                if(results[0].count > 0){resolve(true)}
                else{resolve(false)}
            })
            .catch(error => reject(error))
        })
    },
    // get a user's id if the email and password combination are in the database
    getUserId: (email, password) => {
        return new Promise((resolve, reject) => {
            db.one(`SELECT id FROM creators WHERE email = $1 AND password = $2;`, [email, password])
            .then(userId => resolve(userId))
            .catch(() => reject())
        })
    },
    // add a new user to the database and get their id
    addNewUser: (firstName, lastName, email, password, phoneNumber) => {
        return new Promise((resolve, reject) => {
            db.none(`INSERT INTO creators(first_name, last_name, email, password, phone_number) VALUES($1, $2, $3, $4, $5)`,
            [firstName, lastName, email, password, phoneNumber])
            .then(() => {
                module.exports.getUserId(email, password)
                .then(userId => resolve(userId))
                .catch(() => {})
            })
            .catch(error => reject(error))
        })
    }
}