const cloudinary = require('cloudinary').v2

const cloudinaryConfig = cloudinary.config({
    cloud_name: 'dihn7tk3r', 
    api_key: '387191998156751', 
    api_secret: '1bfXZmYA1lBqGKk5YASJfcXvhWY'
})

const upload_image = './12.png'

const uploadFile = async()=>{
    const res = await cloudinary.uploader.upload(upload_image)
    console.log(res)
}

uploadFile()