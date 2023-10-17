db.fruits.updateMany({color : 'Red'}, {$set :{price : 1.49}})

db.flowers.updateOne({name : 'Lily'}, {$set : {quantity : 90}})

db.flowers.deleteOne({name : 'Tulip'})

db.fruits.updateMany({name :'Strawberry'})

db.fruits.deleteMany({lt:{quantity : 100}})