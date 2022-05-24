const multer = require('multer');  
const user_data = require('../models/userData') 


//uploading image
const storage = multer.diskStorage(
    {
        destination:function(req,file,cb)
        {
            cb(null,"./uploads")
        },
        filename:function(req,file,cb)
        {
            cb(null,file.filename+"_"+Date.now()+"_"+file.originalname)
        }
    }
);

const upload = multer({
    storage:storage,
}).single("image");


module.exports = {login_call,signup_call,home_call,search_call,insertData,upload,delete_by_id,view_by_id,update_by_id,to_print}
