import { Router } from "express";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { S3Client, GetObjectCommand } from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'

const router = Router();

const prisma = new PrismaClient();

const JWT_SCERET= "anurag123"

router.get("/presignedurl", (req, res)=>{
  const s3Client = new S3Client()
const command = new GetObjectCommand({
  Bucket: "some-bucket",
  Key: "some-object"
})
   
})

 

router.post("signin", async (req, res) =>{
  const hardcoreanuragaddress ="6UoCsHVFQ4oBv9yRxnjpbBTedJiWdneX4MEuvZwMKh66"


  const existingUser = await prisma.user.findFirst({
    where: {
      address: hardcoreanuragaddress
    }
  })
  
  if (existingUser){
     const token =jwt.sign({
       userid :existingUser.id
     }, JWT_SCERET)


     res.json({
      token
     })
  }else{
    const User = await prisma.user.create({
      data: {
        address: hardcoreanuragaddress
      }
    })
  
    const token =jwt.sign({
        userid :User.id
     }, JWT_SCERET)

     res.json({ 
       token
     })
   
  }
});


export default router;

