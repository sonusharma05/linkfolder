const express = require("express");
const cors = require("cors");
const app = express();
const authmiddleware = require("./authmiddleware")
const { User, Link } = require("./db");
app.use(cors())
const jwt = require("jsonwebtoken")
const { signinSchema, userSchema } = require("./zod");
const { success } = require("zod");
app.use(express.json());
app.get("/test", (req, res) => {
  res.json({
    msg: "backend is working",
  });
});

app.get("/links", authmiddleware,async (req, res) => {
  const links = await Link.find({
    userId:req.userId
  });
  res.json({
    links: links,
  });
});

app.post("/links",authmiddleware, async (req, res) => {
  const link = req.body.link;
  const store = await Link.create({
    userId : req.userId,
    link: link,
  });
  res.json({
    msg: "link Stored successfully",
    data: store,
  });
});
app.delete("/links",authmiddleware,async(req,res)=>{

  const link = req.body.link;
  const deleteit = await Link.findOneAndDelete({link});
  if(!deleteit){
    return res.status(404).json({message:"no link "})
  }
  res.json({message:"link deleted successfully"})
})

app.put(" /links/:id", authmiddleware,async(req,res) =>{
  try{
    const linkId = req.params.id;
    const newLink = req.body.link;

    const updated = await Link.findOneAndUpdate({
      _id:linkId,
      userId: req.userId

    },{
      link:newLink
    },{
      new:true
    }
  
  )
  if(!updated){
    return res.status(404).json({message:"Link not found"})
  }
  res.json({
    message:"Link Updated Successfully",
    data:updated
  })

  }catch(err){
    res.status(500).json({message:"updated failed"})
  }

})


app.post("/signin", async (req, res) => {
  const { success } = signinSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      msg: "some error in inputs",
    });
  }
  const findUser = await User.findOne({
    username: req.body.username,
    password:req.body.password
    
  });

  if (!findUser) {
    return res.json({
      msg: "invalid credintailas",
    });
  }
  const token = jwt.sign({userId:findUser._id},process.env.SECRET_KEY)
  
  return res.json({
    msg: "logged in successfully",
    token:token
  });
  
});

app.post("/signup",async (req, res) => {
  const { success } = userSchema.safeParse(req.body);
  if (!success) {
    return res.json({
      msg: "invalid inputs",
    });
  }

  const existingUser = await User.findOne({
    username: req.body.username,
  });
  const existingEmail = await User.findOne({
    Email: req.body.Email,
  });
  const ExistingPhoneno = await User.findOne({
    phoneNo: req.body.phoneNo,
  });

  if (existingEmail) {
    return res.json({
      msg: "Email already existits",
    });
  }
  if (existingUser) {
    return res.json({
      msg: "UserName already exists",
    });
  }
  if (ExistingPhoneno) {
    return res.json({
      msg: "phoneno already exists",
    });
  }

  const user = await User.create({
    username: req.body.username,
    Email: req.body.Email,
    password: req.body.password,
    Age: req.body.Age,
    phoneNo: req.body.phoneNo,
  });
    const userId = user._id;
    const token = jwt.sign({userId},process.env.SECRET_KEY) 

  return res.json({
    msg:"account created successfully",
    token:token
  })
});
app.listen(3000, () => {
  console.log("app is listing on port 3000");
});

