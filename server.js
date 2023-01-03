import express from 'express';
import cors from 'cors';
import { uuid } from 'uuidv4';
import crypto from 'crypto';

const app = express();
app.use(cors());
app.use(express.json());

let fakeDB = [];
let counter = 0

app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const encryptedUsername = crypto.createHash('sha256').update(username).digest('hex');
    const encryptedPassword = crypto.createHash('sha256').update(password).digest('hex');
    // Store the encrypted username and password in a database or file; we will just log/ add to fake object DB
    // In the real world we would save these to a DB, and generate a token with 
    // uuid on 'ingestion' of UN and PW, connecting it to the user
    // For now instead we will generate a UUID that we send back as a response
    // this is visibly awful practice and only exists for our current purposes as we play pretend
    //! IN PRODUCTION DO NOT LOG USERNAMES AND PASSWORDS DIRECTLY EVER EVER EVER
    console.log([ encryptedUsername, encryptedPassword ])
    fakeDB.push({
        'name': encryptedUsername,
        'password': encryptedPassword,
        token: uuid()
    })
    res.send({
      token: fakeDB[counter].token
    });
    counter += 1;
    console.log(fakeDB)
});

app.listen(8080, () => console.log('API is running on http://localhost:8080/login'));