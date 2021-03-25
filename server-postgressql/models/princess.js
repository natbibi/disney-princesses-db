const db = require ('../dbConfig')

class Princess {
    constructor(data){
        this.id = data.id
        this.name = data.name
        this.age = data.age
        this.featureFilm = data.feature_film
        this.faveColor = data.fave_color
    }

    static get all() {
        return new Promise (async (resolve, reject) => {
            try {
                const princessesData = await db.query(`SELECT * FROM princesses;`)
                const princesses = princessesData.rows.map(d => new Princess(d))
                resolve(princesses);
            } catch (err) {
                reject("Error retrieving princesses")
            }
        })
    }

    static findById (id) {
        return new Promise (async (resolve, reject) => {
            try {
                let princessData = await db.query(`SELECT * FROM princesses WHERE id = $1;`, [ id ]);
                let princess = new Princess(princessData.rows[0]);
                resolve (princess);
            } catch (err) {
                reject('Princess not found');
            }
        });
    }

    // static findByOwner (id) {
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let dogsData = await db.query(`SELECT * FROM dogs WHERE ownerId = $1;`, [ id ]);
    //             const dogs = dogsData.rows.map(d => new Dog(d))
    //             resolve (dogs);
    //         } catch (err) {
    //             reject('Error retrieving owner\'s dogs');
    //         }
    //     });
    // }

    // static create(name, age){
    //     return new Promise (async (resolve, reject) => {
    //         try {
    //             let dogData = await db.query(`INSERT INTO dogs (name, age) VALUES ($1, $2) RETURNING *;`, [ name, age ]);
    //             let newDog = new Dog(dogData.rows[0]);
    //             resolve (newDog);
    //         } catch (err) {
    //             reject('Error creating dog');
    //         }
    //     });
    // }

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

}

module.exports = Princess;