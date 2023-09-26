import mongoose from "mongoose";

const SimpleFormSchema = new mongoose.Schema({
    zip: {
        type: String,        
    },
    is_home_owner: {
        type: String,        
    },
    address: {
        type: String,        
    },
    email: {
        type: String,        
    },
    full_name: {
        type: String,        
    },
    phone: {
        type: String,        
    },   
    message: {
        type: String,        
    },    
})

const SimpleForm = mongoose.models.SimpleForm || mongoose.model("SimpleForm", SimpleFormSchema);

export default SimpleForm;