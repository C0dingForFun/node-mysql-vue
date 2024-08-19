import {pool} from '../config/config.js'

// Users
const getUsersDB = async (req,res)=>{
    let [data] = await pool.query('SELECT * FROM users')
    return data;
}

const getUserDB = async (username)=>{
    let [[data]] = await pool.query('SELECT * FROM users WHERE username = ?', [username]);
    return data;
}

const insertUserDB = async(name, surname, age, fav_coding_lang, fav_car, eye_colour,username,password)=>{
    let [data] = await pool.query(`
        INSERT INTO users (name, surname, age, fav_coding_lang, fav_car, eye_colour,username, password)
        VALUES(?,?,?,?,?,?,?,?)`,
        [name, surname, age, fav_coding_lang, fav_car, eye_colour,username,password]
    )
}

const deleteUserDB = async(id)=>{
    await pool.query(`DELETE FROM users WHERE id = ?`,[id])
}

const updateUserDB = async(name, surname, age, fav_coding_lang, fav_car, eye_colour,id )=>{
    await pool.query(`UPDATE users SET name = ?,surname = ?, age = ?, fav_coding_lang = ?, fav_car = ?, eye_colour = ? WHERE id = ?`,[name, surname, age, fav_coding_lang, fav_car, eye_colour,id])
}

// Fruits
const getFruitsDB = async (req,res)=>{
    let [data] = await pool.query('SELECT * FROM fruits')
    return data;
}

const getFruitDB = async (id)=>{
    let [[data]] = await pool.query('SELECT * FROM fruits WHERE id = ?', [id]);
    return data;
}

const insertFruitDB = async(fruit_name, weight, amount)=>{
    let [data] = await pool.query(`
        INSERT INTO fruits (fruit_name, weight, amount)
        VALUES(?,?,?)`,
        [fruit_name, weight, amount]
    )
}

const deleteFruitDB = async(id)=>{
    await pool.query(`DELETE FROM fruits WHERE id = ?`,[id])
}

const updateFruitDB = async(fruit_name, weight, amount,id )=>{
    await pool.query(`UPDATE fruits SET fruit_name = ?, weight = ?, amount = ? WHERE id = ?`,[fruit_name, weight, amount,id])
}

//Cart 
const addToCartDB = async (user_id, fruit_id)=>{
    await pool.query(`INSERT INTO cart (user_id, fruit_id)
        VALUES(?,?)`,[user_id, fruit_id])
}

export {getUsersDB,getUserDB, insertUserDB, deleteUserDB, updateUserDB, getFruitsDB, getFruitDB, insertFruitDB, deleteFruitDB, updateFruitDB, addToCartDB}