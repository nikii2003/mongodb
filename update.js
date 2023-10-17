db.fruits.updateMany({color : 'Red'}, {$set :{price : 1.49}})

db.flowers.updateOne({name : 'Lily'}, {$set : {quantity : 90}})

db.flowers.deleteOne({name : 'Tulip'})

db.fruits.deleteMany({name :'Strawberry'})

