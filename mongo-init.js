db.createUser(
  {
    user: 'user2',
    pwd: 'password2',
    roles: [
      {
        role: 'readWrite',
        db: 'todo_db'
      }
    ]
  }
)

db.users.insertMany(
  [
    {name:"Vitalii"},
    {name:"Denys"},
    {name:"Elon"},
  ]
);