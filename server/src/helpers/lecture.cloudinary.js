import cloudinary from 'cloudinary';
import fs from 'fs';

// cloudinary.config({
//     cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
//     api_key: process.env.CLOUDINARY_API_KEY,
//     api_secret: process.env.CLOUDINARY_API_SECRET
// });


cloudinary.config({
    cloud_name: "dsh5742fk",
    api_key: "899594559273632",
    api_secret: "9E2v2LfZFqO2qiFf1-yuZmO3JX8"
});



const thumbnailUploadOnCloudinary = async(path) => {
    try {
        
        const response = await cloudinary.uploader.upload(path, {
            
            path: './uploads/thumbnails',
            resource_type: 'image',
            upload_preset: 'default',
            
            transformation: {
                quality: 'auto',
                fetch_format: 'auto',
                crop: 'limit',
                width: 1280,
                height: 720,
                aspect_ratio: '16:9',
                gravity: 'auto',
                radius: 0,
                background: 'transparent',
     
            }
        })
        
        console.log(response);

        console.log("response =>", response);
        return response;


    } 
    catch (error) {
        console.log(error);
        return error.message;
    }

}



const lectureUploadOnCloudinary = async(path) => {

    try {
        
        const response = await cloudinary.uploader.upload(path, {
            
            path: '/uploads/lectures/',
            resource_type: 'auto',
            upload_preset: 'default'


            // transformation: {
            //     quality: 'auto',
            //     fetch_format: 'auto',
            //     crop: 'limit',
            //     width: 1280,
            //     height: 720,
            //     aspect_ratio: '16:9',
            //     gravity: 'auto',
            //     radius: 0,
            //     background: 'transparent',
     
            // }


        })

        console.log(response);

        // fs.unlinkSync(path);
        return response;



    } 
    catch (error) {
        console.log(error);
        // fs.unlinkSync(path);
        return error;
    }
}



export {
    thumbnailUploadOnCloudinary, 
    lectureUploadOnCloudinary
};