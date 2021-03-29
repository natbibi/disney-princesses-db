const db = require('../dbConfig')
const SQL = require('sql-template-strings');

class Princess {
    constructor(data) {
        this.id = data.id
        this.username = data.username
        this.email = data.email
        this.passwordDigest = data.password_digest
        this.profilepic = data.profile_pic
    }


    static get all() {
        return new Promise(async (resolve, reject) => {
            try {
                const princessesData = await db.run(SQL`SELECT * FROM princesses`)
                const princesses = princessesData.rows.map(d => new Princess(d))
                resolve(princesses);
            } catch (err) {
                reject("Error retrieving princesses :(")
            }
        })
    }


    static findById(id) {
        return new Promise(async (resolve, reject) => {
            try {
                let princessData = await db.run(SQL`SELECT * FROM princesses WHERE id = ${id}`);
                let princess = new Princess(princessData.rows[0]);
                resolve(princess);
            } catch (err) {
                reject('Princess not found');
            }
        });
    }

    static create({ username, email, password }) {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`INSERT INTO princesses (username, email, password_digest)
                                                VALUES (${username}, ${email}, ${password}) RETURNING *;`);
                let princess = new Princess(result.rows[0]);
                res(princess)
            } catch (err) {
                rej(`Error creating user: ${err}`)
            }
        })
    }

    static findByEmail(email) {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM princesses
                                                WHERE email = ${email};`);
                let princess = new Princess(result.rows[0])
                res(princess)
            } catch (err) {
                rej(`Error retrieving user: ${err}`)
            }
        })
    }
}


// update() {
//     return new Promise (async (resolve, reject) => {
//         try {
//             let updatedDogData = await db.query(`UPDATE dogs SET age = age + 1 WHERE id = $1 RETURNING *;`, [ this.id ]);
//             let updatedDog = new Dog(updatedDogData.rows[0]);
//             resolve (updatedDog);
//         } catch (err) {
//             reject('Error updating dog');
//         }
//     });
// }

// destroy(){
//     return new Promise(async(resolve, reject) => {
//         try {
//             await db.query(`DELETE FROM dogs WHERE id = $1;`, [ this.id ]);
//             resolve('Dog was deleted')
//         } catch (err) {
//             reject('Dog could not be deleted')
//         }
//     })
// }


module.exports = Princess