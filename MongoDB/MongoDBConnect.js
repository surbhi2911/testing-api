import mongoose from 'mongoose';

const MongoDB = () => {
    mongoose.connect("mongodb+srv://vaishalitankonly4loginsites:doo5sFH5BilUYK9Y@blooddata.vpp2o.mongodb.net/blood?retryWrites=true&w=majority").then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });
}

export default MongoDB;