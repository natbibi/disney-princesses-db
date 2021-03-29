const db = require('../dbConfig');
const SQL = require('sql-template-strings');

class Post {
    constructor(data) {
        this.id = data.id
        this.body = data.body
        this.user_id = data.user_id
        this.username = data.username
        this.profilePic = data.profile_pic
    }

    static get all() {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT posts.*, princesses.username as username, princesses.profile_pic as profile_pic
                                                    FROM princesses 
                                                    JOIN posts ON posts.user_id = princesses.id;`);
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

    static findByPostID(id) {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM posts WHERE id = ${id}`);
                // how to return data for user_id from posts table when inputting username
                let post = new Post(result.rows[0])
                res(post)
            } catch (err) {
                rej(`Error retrieving post: ${err}`)
            }
        })
    }

    // Get all the posts a Princess posted
    static findByPrincessID(user_id) {
        return new Promise(async (res, rej) => {
            try {
                let result = await db.run(SQL`SELECT * FROM posts WHERE user_id = ${user_id}`);
                let posts = result.rows.map(r => new Post(r))
                res(posts)
            } catch (err) {
                rej(`Error retrieving post: ${err}`)
            }
        })
    }

}


module.exports = Post