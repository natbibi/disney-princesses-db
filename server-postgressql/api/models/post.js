const db = require('../dbConfig');
const SQL = require('sql-template-strings');

class Post {
    constructor(data) {
        this.body = data.body
        this.username = data.username
        this.profilePic = data.profile_pic
    }

    static get all() {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT posts.*, princesses.username as username
                                                    FROM posts 
                                                    JOIN princesses ON posts.user_id = princesses.id;`);
                let posts = result.rows.map(r => new Post(r))
                res(posts)
            } catch (err) {
                rej(`Error retrieving posts: ${err}`)
            }
        })
    }

    static create(user_id, body) {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`INSERT INTO posts (user_id, body)
                                                VALUES (${user_id}, ${body}) RETURNING *;`);
                let post = new Post(result.rows[0]);
                res(post)
            } catch (err) {
                rej(`Error creating user: ${err}`)
            }
        })
    }
}

module.exports = Post