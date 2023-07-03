const express = require("express");
const app = express();
const router = express.Router();
// const jwt = require("jsonwebtoken");
// const bcrypt = require("bcrypt");
const authorization = require("./middleware/authorization");
const authentication = require ("./routes/jwtAuth");
const cors = require("cors");
const pool = require("./db");
const port = 8000;



// Middleware
app.use(cors());
app.use(express.json());
app.use(authentication);

 //

//get the user data from database
app.get('/get-user-data', async (req, res) => {
    const { getItem } = require("./utils/jwtGenerator");
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user_id = getItem(token).user_id;
    try {

  
      const user = await pool.query('SELECT * FROM users WHERE user_id = $1', [user_id]);
  
      if (user.rows.length === 0) {
        return res.status(404).json({ message: 'User not found' });
      }
  
      const userData = user.rows[0];
  
      res.json(userData);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

pool.connect().then(() => {
    app.listen(port, () => {
      console.log("Server working on port " + port);
    });
  });

app.put("/UpdateUser", async (req, res) => {
  const { getItem } = require("./utils/jwtGenerator");
  const authHeader = req.headers["authorization"];
  const token = authHeader && authHeader.split(" ")[1];
  const user_id = getItem(token).user_id;
 
    try {
       const { user_name,user_email,user_phone,user_address } = req.body;
       // Update the user profile in the database
       const updatedUser = await pool.query(
         "UPDATE users SET user_name = $1, user_email = $2, user_phone = $3 , user_address = $4 WHERE user_id = $5 RETURNING *",
         [user_name,user_email,user_phone,user_address, user_id]
       );
  
       res.json(updatedUser.rows[0]);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  });
  app.put("/UpdateUser", async (req, res) => {
    const { getItem } = require("./utils/jwtGenerator");
    

    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    const user_id = getItem(token).user_id;
   
    
      try {
         const { new_password } = req.body;
         const saltRounds = 10;
         const salt = await bcrypt.genSalt(saltRounds);
         const hashedPassword = await bcrypt.hash(new_password, salt);
         // Update the user profile in the database
         const updatedUser = await pool.query(
           "UPDATE users SET user_password = $1 WHERE user_id = $2 RETURNING *",
           [hashedPassword, user_id]
         );
    
         res.json(updatedUser.rows[0]);
      } catch (err) {
        console.error(err.message);
        res.status(500).send("Server Error");
      }
    });
  
    app.put("/UpdatePass", async (req, res) => {
      const { getItem } = require("./utils/jwtGenerator");
      
  
      const authHeader = req.headers["authorization"];
      const token = authHeader && authHeader.split(" ")[1];
      const user_id = getItem(token).user_id;
     
      
        try {
           const { current_password,new_password } = req.body;
          //  const saltRounds = 10;
          //  const salt = await bcrypt.genSalt(saltRounds);
          //  const hashedPassword = await bcrypt.hash(new_password, salt);
           // check if password is matches with current ?
          //  const CheckPass = await pool.query(
          //   "SELECT count(*) FROM users WHERE user_id = $1 AND user_password = $2 RETURNING *",
          //   [user_id,hashedPassword]
          // );
          res.json(hashedPassword);
           // Update the user profile in the database
          //  const updatedUser = await pool.query(
          //    "UPDATE users SET user_password = $1 WHERE user_id = $2 RETURNING *",
          //    [hashedPassword, user_id]
          //  );
      
          // res.json(updatedUser.rows[0]);
        } catch (err) {
          console.error(err.message);
          res.status(500).send("Server Error");
        }
      });
    
  app.post("/message", async (req, res) => {
    try {
        const { name, email,subject, message } = req.body;
      

        const Message =  await pool.query(
          "INSERT INTO massage (name, email,subject,massage ) VALUES ($1, $2, $3,$4) RETURNING *",
          [name, email,subject,message ]
        );

        res.json(Message);

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});