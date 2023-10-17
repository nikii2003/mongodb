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