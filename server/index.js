/*📌Express ko bula le bhai  */
const express = require("express")
const {readdirSync} = require("fs");
const bodyParser = require('body-parser');
/*📌Express ko call kr le fir kisi ek variable mein  */
const app = express();


/*📌ENV files ko chupa le bro */
const dotenv = require("dotenv");
const { connectDb } = require("./connection");
const cors = require("cors")
dotenv.config();
const PORT =    process.env.port || 5000;

connectDb();

app.use(cors({
    origin: process.env.CLIENT_URL,
    credentials :true,
}));
app.use(bodyParser.json());
app.use(express.json());
/*📌import the router  */
readdirSync("./routes").map((route)=>{
    app.use("/api", require(`./routes/${route}`))
})

// const authRoute = require("./routes/authRoutes");


/*📌Port Define krr lo taki ki kaha chalana hai hme code ko*/
const port = 5000;


/*📌Making Routes :  */
app.get("/", (req,res)=>{
    res.send("<center><h1>Server is running Bro</h1> </center>");
})

// app.use("/api",authRoute);
/*📌Ab jab sb ho gaya hai to server ko listen kara le bhai */

//Importing routes Dynamically : 
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})