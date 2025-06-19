import  mongoose  from "mongoose";
import colors from 'colors';



const connectDB = async () => {
    try{
        const conn = await mongoose.connect(process.env.MONGO_URL, {
            dbName: 'ecommerce'
        });
        console.log(`Conneted To Mongodb Database ${conn.connection.host}`);

    } catch (error) {
        console.log(`Error in Mongodb ${error}`.bgRed.white)

    }
};

export default connectDB;