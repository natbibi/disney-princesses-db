# disney-princesses-db

# Installation & Usage

## Installation
Clone or download the repo.

## Usage
Start a server and database combo:

Open the terminal:
1. postgres database
    `cd server-postgresssql` 
     `docker-compose up`
2. mongo databse
    `cd server-mongodb`
     `docker-compose up`

To stop and keep data 
   `docker-compose down`
To stop and remove all artifacts 
    `docker-compose down --volumes --remove-orphans`

# Technologies

# Changelog or Process 
1. Set up Postgress database and server
2. Create database for Disney Princesses

# Bugs 
- [x] Nodemon not found when starting up docker
- [x] postgres cannot read data
- [x] Server starting error -> postgres data format 
                            -> relative paths
- [x] Unable to fetch multiple routes


