/*📌Express ko bula le bhai  */
const express = require("express")
/*📌ENV files ko chupa le bro */
const dotenv = require("dotenv");
dotenv.config();
const PORT =    process.env.port || 5000;
/*📌Express ko call kr le fir kisi ek variable mein  */
const app = express();
/*📌Port Define krr lo taki ki kaha chalana hai hme code ko*/
const port = 5000;
/*📌Making Routes :  */
app.get("/", (req,res)=>{
    res.send("<center><h1>Server is running Bro</h1> </center>");
})
/*📌Ab jab sb ho gaya hai to server ko listen kara le bhai */
app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})