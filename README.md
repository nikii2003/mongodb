## What is MongoDB ?
MongoDB is an Open source, document-oriented NoSQL database Management System.

## why MongoDB ?
Design for flexibility,scalability and performance in handling unstructured or semi- structured data.

##  MongoDB Command and Usage 

**Connect to MongoDB:**
  Use the `mongo` shell to connect to a MongoDB server:
  MONGOSH

**Check Databases:**
If you want to check the databases use the `show dbs` command.  

**Create a Database:**
To create a new database , use the `use` command .

**Basics CRUD Operation:**

Create : 'insertOne', 'insertMany' <br>
Read :'find', findOne<br>
Update : 'updateOne', 'updateMany'<br>
Delete : 'deleteOne','deleteMany'<br>

## Insert a Document Using `insertOne`
To insert a single document into a MongoDB collection, you can use the `insertOne` command in the MongoDB shell.<br>
```
db.collectionName.insertOne(
    {
        field1 : value1,
        field2 : value2,
        ...
    }
)
```

## Insert Multiple Document Using `insertMany`
To insert a multiple document into a MongoDB collection, you can use the `insertMany` command in the MongoDB shell.<br>

```
db.collectionName.insertMany([
    {
        key1: value1,
        key2: value2
    },
    {
        key1: value3,
        key2: value4
    }
])
```
### Using `find`
To retrieve documents from a MongoDB collection, you can use the `find` command

### Using `findOne`
To find a single document in a collection, you can use the 'findOne' command:
```
db.collectionName.findOne(
    { key: value },
    { projection: { field1: 1, field2: 1, ... } }
)
```

## Update Documents Using `updateOne` and `updateMany`

### Using `updateOne`
To update a single document in a collection, you can use the `updateOne` command:
```
db.collectionName.updateOne(
    { filter: { key: value } },
    { update: { $set: { field1: value1, field2: value2, ... } } }
)
```
### Update `updateMany`
To update multiple documents in a collection, you can use the updateMany command:
```
db.collectionName.updateMany(
    { filter: { key: value } },
    { update: { $set: { field1: value1, field2: value2, ... } } }
)
```
