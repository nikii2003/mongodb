// command of insertOne in transaction collection

db.transaction.insertOne({
    'id' :1,
    'user-ID' : 123,
    'amount' : 500,
    'type':'creadit',
    'timestamp':ISODate('2023-10-17T10:30:00Z')
})
db.transaction.insertOne({
    "_id": 2,
    "user_id": 456,
    "amount": 200,
    "type": "debit",
    "timestamp": ISODate("2023-10-17T11:15:00Z")
})

//command of insertMany in transaction collection

db.transaction.insertMany(
    [
{
    "_id": 3,
    "user_id": 789,
    "amount": 1000,
    "type": "credit"
 
},
{
    "_id": 4,
    "user_id": 123,
    "amount": 300,
    "type": "debit",
   
},
{
    
        "_id": 5,
        "user_id": 456,
        "amount": 700,
        "type": "credit",
     
      
},
{
    "_id" : 6,
    "user_id": 764,
    "amount" :800,
    "type":"credit",
    
 
}
    ]
)