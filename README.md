# CURD MESTERY 👋

# About

this is a curd mastery app for the backend api server,and using node js and typescript

 ## Use Technology!

 - Express js
 - Typescript
 - mongosse 
 - Zod 
 - byrciptjs

## Command this project

start ts-dev

```bash
  npm run start:dev
```

start node

```bash
  npm run start
```

Build project

```bash
  npm run build
```

## When Create User symbol data structure
### /api/users
```json
{
    "user": {
        "userId": 442752,
        "userName": "mamun_smith",
        "password": "98765pass",
        "fullName": {
            "firstName": "tua",
            "lastName": "tasffy"
        },
        "age": 15,
        "email": "mamun@gmail.com",
        "isActive": false,
        "hobbies": [
            "painting",
            "traveling"
        ],
        "address": {
            "street": "456 Oak St",
            "city": "Townsville",
            "country": "Countryville"
        }
    }
}

```

## When update User symbol data structure

### /api/users/:65618d50e2a1b809bf706e41

```json
{
    "userId": 1548,
    "userName": "ruble mia",
    "hobbies": [
        "cricket",
        "football"
    ],
    "address": {
        "street": "dhaka",
        "city": "jamalput",
        "country": "bangladesh"
    }
}

```

## When put user order data structure
### /api/users/656039cbd3dc5cccd3c8ed4c/orders
```json
{
    "orders": [
        {
            "productName": "apple",
            "price": 50,
            "quantity": 2
        }
    ]
}

```
## 🔗 Links
[Github Repository Link ](https://github.com/mdrubel02/crud-mastery-assignment)
[Production Live Link ](https://crud-mastery-assignment-gytnaynjm-mdrubel02.vercel.app/)