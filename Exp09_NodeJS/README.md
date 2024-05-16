# NodeJS and ExpressJS with MongoDB

Design a Node.js application for managing a simple inventory system. Implement CRUD operations (Create, Read, Update, Delete) for the inventory items using Express.js as the web framework and MongoDB as the database.
Your application should allow users to:Create new inventory items with fields for name and quantity.Retrieve a list of all inventory items.Update the details (name and/or quantity) of an existing inventory item.Delete an inventory ite

## Steps

* Install node.js [Node.js — Download Node.js® (nodejs.org)](https://nodejs.org/en/download/)
* Install pacakges

```bash
npm install express mongoose
```

* Install MongoDB community server [Download MongoDB Community Server | MongoDB](https://www.mongodb.com/try/download/community)
* Install mongosh shell [MongoDB Shell Download | MongoDB](https://www.mongodb.com/try/download/shell)
* Start server in the directory

```bash
node app.js
```

* Access webpage using localhost:3000
* To access the JSON data in mongosh shell

```bash
 use inventory
 db.inventoryitems.find()
```
