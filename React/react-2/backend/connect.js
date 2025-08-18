import mysql from 'mysql2/promise';

export async function connectDB() {
    try{
    const connection = await mysql.createConnection({
        host: "localhost",
        user: "root",
        password: '',
        database: "register"
    })
    console.log("coneccion con mysql")
    return connection
    }
    catch(err){
        console.err("Error:", err);
    }
}