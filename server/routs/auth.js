const router = require("express").Router();
const User = require("../model/user");

//Sign up

router.post("/register", async (req, res) => {
  try {
    const { email, username, password } = req.body;
    const hashpassword = bcrypt.hashSync(password);
    const user = new User({ email, username, password: hashpassword });
    await user.save().then(() => res.statusCode(200).json({ user: user }));
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

//Sign in

router.post("/signin", async (req, res) => {
  try {
    const user = await User.findOne({email: req.body.email});
    if(!user){
        res.status(400).json({ message: "Please Sign Up First" });
    }

    const isPasswordCorrect = bcrypt.compare(req.body.password, user.password)
    if(!isPasswordCorrect){
        res.status(400).json({ message: "Password Is Not Correct" });
    }
    const { password, ...others } = user._doc;
    res.status(200).json({ others });
  } catch (error) {
    res.status(400).json({ message: "User Already Exists" });
  }
});

module.exports = router;
