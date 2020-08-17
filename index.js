const express = require("express");
const app = express();
const connectDB = require("./config/db");
connectDB();

app.use(express.json())
app.get("/",(req,res)=>{
  res.send("index")
})


app.use("/api/users", require("./routes/api/users"))
app.use("/api/auth", require("./routes/api/auth"))
app.use("/api/post", require("./routes/api/post"))
app.use("/api/profile", require("./routes/api/profile"))


const port = process.env.PORT || 3000
app.listen(port,()=>{
 console.log(`this port ${port} is runing`)
})