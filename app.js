//import jwt from 'jsonwebtoken';




const express = require("express");
const mysql = require('mysql');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json()); // Add this line to parse JSON requests

const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "",
    database: "lethabong_db"
});

// Connect to the database
db.connect((err) => {
    if (err) {
        console.error("Error connecting to the database: " + err.message);
    } else {
        console.log("Connected to the database");
    }
});

app.post('/Signup', (req, res) => {
    const { cust_name, cust_email, cust_password } = req.body; // Destructure the request body

    const sql = "INSERT INTO customer (cust_name, cust_email, cust_password) VALUES (?, ?, ?)";
    const values = [cust_name, cust_email, cust_password];

    db.query(sql, values, (err, result) => {
        if (err) {
            console.error("Error inserting data: " + err.message);
            return res.status(500).json({ error: "Error inserting data" });
        }
        
        console.log("Data inserted successfully");
        return res.status(200).json({ message: "Data inserted successfully" });
    });
});

app.get('/login',(req,res)=>{
    const {cust_email} = req.body;
    const values = [cust_email]

    const sql = "SELECT * FROM customer WHERE cust_email = ? ";
    db.query(sql,values,(err,result)=>{
        if (err){
            console.error('Error logging in ',err.message);
            return res.status(200).json({ message: "Error logging in." });
        }
        /*if(result.length>0){

            bcrypt.compare(req.body.cust_password.toString(),result[0].cust_password,(err,response) =>{
                if(err) return res.json({Error:"Password does not match"});
                if(response){
                    return res.json({Status:"Success"})
                }
            })

        }*/
        else{

            console.log(values);
            //return res.json({error: "No email exists"});
        }

        res.status(200).json({ message: 'Login successful' });
    })
})

app.listen(8081, () => {
    console.log('Server is listening on port 8081');
});
