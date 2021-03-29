# disney-princesses-db

If Disney Princesses had Twitter.

# Installation & Usage

## Installation
Clone or download the repo.

## Usage
Start a server and database combo:

Open the terminal:
1. postgres database
    `cd server-postgresssql` 
     `docker-compose up`
2. mongo databse (not set up yet)
    `cd server-mongodb`
     `docker-compose up`

To stop and keep data 
   `docker-compose down`
To stop and remove all artifacts 
    `docker-compose down --volumes --remove-orphans`

# Technologies
bcrypt, dotenv,  jsonwebtoken
cors, express, postgress, sql-template-strings
    
# Changelog or Process 
1. Set up Postgress database and server
2. Create database for Disney Princesses
3. Create server with MVC for posts and princesses
4. Create client side view
5. GET and POST routes 

# Bugs 
- [x] Nodemon not found when starting up docker
- [x] postgres cannot read data
- [x] Server starting error -> postgres data format 
                            -> relative paths
- [x] Unable to fetch multiple routes
- [x] Unable to escape ' in string in postgres database - use '' e.g I''m
- [ ] When making a POST request, how to change username input into user_id in database
        - [x] POST request takes userID info from local storage
        - [x] Join username with userID and return one
        - [x] Add userID and profile pic info to JWT token
        - [x] Extract userID and profile from JWT and add to local storage
        - [x] Current user sends POST request with userID and profilepic from local storage
    
# Future Features 
- New user can change their profile pic (update route)