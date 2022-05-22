#  REST-API  

## Built With

- [x] JWTs & refresh tokens
- [x] Node.js
- [x] TypeScript
- [x] MongoDB with Mongoose

## Application Structure

![diagram](https://user-images.githubusercontent.com/56429354/169705372-63853102-b94b-4b39-8fb4-ac32ebf43949.png)


expressjs-server/    contains the express  server code
 ```
└── config              # _default configurations (port,db,token ttl , privatekey)
└── src
    ├── controller      # Controller logic goes here          
    ├── middleware      # Middleware 
    ├── service         # Db query logic goes here  
    ├── modles
    |   └──             # contain model to database
    ├── utils           # contains wrapper functions to sign and verify our jwt
    └── app.ts          # default  entry point

```



## Getting Started

To get a local copy up and running follow these simple example steps.

1.  clone repo either through ssh / https

> ssh

```sh
 git clone git@github.com:Gedewon/express-API.git
```

> https

```sh
 git clone git@github.com:Gedewon/express-API.git
```

2.  the change directory to /Todo.git

```sh
cd express-API
```

3. install node dependency and open index.html with live server

```sh
 yarn  && yarn dev
```
4. then paly around with this [http endpoint](https://github.com/Gedewon/express-API/blob/main/collection.http)
   don't forget to replace token with your own generated onces after  login


👤 **Gedewon**

- GitHub: [Gedewon](https://github.com/Gedewon)
- LinkedIn: [Gedewon](https://linkedin.com/in/gedewon)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/Gedewon/express-API/issues).

## Show your support

Give a ⭐️ if you like this project!
