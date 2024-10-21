
import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    status_of: {
        type: String,
        default: 'Available',
    },
    MobileNumber: {
        type: Number,
        required: true,
        unique: true,
    },
    BloodGroup: {
        type: String,
        required: true,
        enum: ['A+', 'A-', 'B+', 'B-', 'AB+', 'AB-', 'O+', 'O-'],
    },
    Country: {
        type: String,
        required: true,
        default: 'INDIA',
    },
    State: {
        type: String,
        required: true,
    },
    District: {
        type: String,
        required: true,
    },
    City: {
        type: String,
        required: true,
    }
});

const User = mongoose.model('donations', UserSchema);

export const Getdata = async () => {
    try {
        const result = await User.find();
        // console.log(result);
        return result;
    } catch (err) {
        console.error("Error retrieving data:", err);
    }
};

export const PostData = async (object) => {
    try {
        const UserDoc = await User(object);
        const result = await UserDoc.save()
        console.log(result, 'Successfully Added');
        return result;
    } catch (err) {
        console.error("Error retrieving data:", err);
    }
};


export const DeleteData = async (id) => {
    try {
        const result = await User.findByIdAndDelete(id);
        return result;
    } catch (err) {
        console.error("Error deleting data:", err);
        throw new Error(err);
    }
};


export const UpdateData = async (id, data) => {
    try {
        const result = await User.findByIdAndUpdate(id, { $set: data.updateData })
        return result;
    } catch (err) {
        console.error("Error deleting data:", err);
        throw new Error(err);
    }
};