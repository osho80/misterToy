import axios from 'axios'

var toys = [
    {
        "_id": 6473,
        "name": "adipiscing molestie",
        "price": 11,
        "type": "Adult",
        "createdAt": "1990-10-05T18:29:49.668Z",
        "inStock": false
    },
    {
        "_id": 6474,
        "name": "lorem amet",
        "price": 23,
        "type": "Funny",
        "createdAt": "1973-05-23T11:47:38.563Z",
        "inStock": true
    },
    {
        "_id": 6475,
        "name": "at et",
        "price": 30,
        "type": "Funny",
        "createdAt": "1987-07-30T09:21:03.442Z",
        "inStock": true
    },
    {
        "_id": 6476,
        "name": "odio porta",
        "price": 94,
        "type": "Adult",
        "createdAt": "1998-04-13T02:35:24.769Z",
        "inStock": true
    },
    {
        "_id": 6477,
        "name": "massa amet",
        "price": 3,
        "type": "Adult",
        "createdAt": "1986-06-30T15:50:40.317Z",
        "inStock": true
    },
    {
        "_id": 6478,
        "name": "malesuada vitae",
        "price": 59,
        "type": "Adult",
        "createdAt": "1995-11-26T17:50:07.979Z",
        "inStock": true
    },
    {
        "_id": 6479,
        "name": "elementum fringilla",
        "price": 19,
        "type": "Adult",
        "createdAt": "1985-10-08T21:03:17.238Z",
        "inStock": true
    },
    {
        "_id": 6480,
        "name": "nec vestibulum",
        "price": 74,
        "type": "Educational",
        "createdAt": "1994-08-15T15:51:13.424Z",
        "inStock": false
    },
    {
        "_id": 6481,
        "name": "etiam etiam",
        "price": 0,
        "type": "Funny",
        "createdAt": "1976-04-19T06:37:31.337Z",
        "inStock": true
    },
    {
        "_id": 6482,
        "name": "mattis placerat",
        "price": 79,
        "type": "Adult",
        "createdAt": "1988-01-31T13:21:22.239Z",
        "inStock": false
    },
    {
        "_id": 6483,
        "name": "sed magna",
        "price": 14,
        "type": "Funny",
        "createdAt": "1975-01-29T21:27:36.516Z",
        "inStock": false
    },
    {
        "_id": 6484,
        "name": "turpis porta",
        "price": 11,
        "type": "Adult",
        "createdAt": "1970-09-21T03:46:35.022Z",
        "inStock": false
    },
    {
        "_id": 6485,
        "name": "mi eros",
        "price": 23,
        "type": "Funny",
        "createdAt": "1975-06-24T18:41:11.933Z",
        "inStock": false
    },
    {
        "_id": 6486,
        "name": "sit nunc",
        "price": 68,
        "type": "Educational",
        "createdAt": "1997-01-20T05:53:21.138Z",
        "inStock": true
    },
    {
        "_id": 6487,
        "name": "ac sollicitudin",
        "price": 97,
        "type": "Educational",
        "createdAt": "1992-02-25T16:06:54.534Z",
        "inStock": true
    },
    {
        "_id": 6488,
        "name": "quis lectus",
        "price": 56,
        "type": "Adult",
        "createdAt": "1991-04-08T09:55:37.667Z",
        "inStock": true
    },
    {
        "_id": 6489,
        "name": "lectus tempor",
        "price": 76,
        "type": "Educational",
        "createdAt": "1970-12-06T15:51:29.586Z",
        "inStock": true
    },
    {
        "_id": 6490,
        "name": "convallis risus",
        "price": 12,
        "type": "Funny",
        "createdAt": "1996-04-29T03:34:36.378Z",
        "inStock": false
    },
    {
        "_id": 6491,
        "name": "non nunc",
        "price": 25,
        "type": "Adult",
        "createdAt": "1982-07-12T19:44:29.062Z",
        "inStock": true
    },
    {
        "_id": 6492,
        "name": "scelerisque in",
        "price": 33,
        "type": "Funny",
        "createdAt": "1985-01-08T01:31:45.294Z",
        "inStock": true
    }
]

const baseUrl = 'http://localhost:3000/toy';

export default {
    query,
    getById, 
    remove,
    save
}

// function query() {
//     return toys;
// } 

function query(){
    console.log('sending axios request');
    
    return axios.get(baseUrl)
        .then(res=> res.data);
}

function getById(id) {
    return toys.find(toy=> toy._id === parseInt(id))
}

function remove(id) {
    const idx = toys.findIndex(toy => toy._id === id)
    toys.splice(idx, 1);
}

function save(toy) {
    if(toy._id) {
        const idx = toys.findIndex(_toy => _toy._id === toy._id)
        toys.splice(idx, 1, toy);
    } else {
        toy._id = _makeId();
        toys.push(toy)
    }

    return toy
}

function _makeId(length = 5) {
    var text = "";
    var possible = "0123456789";
    for (var i = 0; i < length; i++) {
        text += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    return text;
}



