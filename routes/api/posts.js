var express=require('express');
const router=express.Router();
//@route GET api/posts
//@descn Test route
router.get("/",(req,res)=>res.send('Posts Route'));
module.exports=router;