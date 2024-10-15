// import mongoose from 'mongoose';

// const MongoDB = () => {
//     mongoose.connect('mongodb://127.0.0.1:27017/blood')
//         .then(() => console.log('MongoDB Connected!'));
// }

// export default MongoDB;

import mongoose from 'mongoose';
const MongoDB = () => {
    // mongoose.connect('mongodb+srv://vaishalitankonly4loginsites:doo5sFH5BilUYK9Y@blooddata.vpp2o.mongodb.net/blood?retryWrites=true&w=majority', {
    //     useNewUrlParser: true,
    //     useUnifiedTopology: true,
    // })
    //     .then(() => console.log('MongoDB Connected!'))
    //     .catch((err) => console.error('MongoDB connection error:', err));


    mongoose.connect("mongodb+srv://vaishalitankonly4loginsites:doo5sFH5BilUYK9Y@blooddata.vpp2o.mongodb.net/blood111?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    }).then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.error('Error connecting to MongoDB:', err);
    });

}
export default MongoDB;