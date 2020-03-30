# Mongodb-project


This is our backend. You need front-end to run this project. Alternatively, use Postman to monitor the request and response.

### Step 1 – Clone this project to www or htdocs folder


git clone https://github.com/19wdwu07/react-fullstack.git

cd react-fullstack

### Step 2 – Install packages

npm i


### Step 3 – Mongodb

*You should have a mongodb account. The URI connection string needs username, password and cluster name with attached id. If not, create an account and get the uri string from https://www.mongodb.com/*

Copy the config-copy.json file in the backend folder and rename it to config.json and add your username, password and clustername with its id.

### Step 4 - Run the backeend project

*You should have installed nodemon globally. if not run **npm install nodemon -g***

###### use the legacy version in vagrant set up
cd backend
nodemon -L index.js


###### use this in non-vagrant set up
cd backend
nodemon index.js


### Step 5 - To see the home page
Go to the browser and type localhost:5000

or use ip in the place of localhost


### Step 6 - Endpoints

**Endpoints**       | **Description**             |**Acceptable values**| **Method**|
--------------------|-----------------------------|---------------------|-----------|
|/registerUser      | add a new user to db          |                   | POST      |
|/allUsers          | view all users from db      |                     | GET       |
|/loginUser         | check for  existing  user to login |               | POST      |
|/allProductsFromDB | view all products from db    |                    | GET       |
|/addProduct        | add a product in db        |                      | POST      |
|/updateProduct/ObjectId  | modify a product using id     |  ObjectId of product | PATCH     |
|/deleteProduct/ObjectId   | remove a product using id     |  ObjectId of product | DELETE    |


### Step 7 - Mongodb

To see data being posted, updated or deleted,  click on cluster->collections->shop->users or products respectively
