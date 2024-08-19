import { getUsersDB, getUserDB,insertUserDB, updateUserDB, deleteUserDB, getFruitsDB, getFruitDB, insertFruitDB, updateFruitDB, deleteFruitDB, addToCartDB } 
from "../model/fullstackDB.js";
import {hash} from 'bcrypt';
getUserDB()
// <----------------------------------------- Users --------------------------------------------------------------------->
const fetchUsers = async (req,res)=>{
    res.json(await getUsersDB());
}

const fetchUser = async (req, res)=>{
    res.json(await getUserDB(req.params.id));
}

const insertUser =  async(req,res)=>{
    let {name, surname, age, fav_coding_lang, fav_car, eye_colour,username,password} = req.body;
    let hashedP = await hash(password,10);
    if (hashedP.stack) throw (hashedP);
    await insertUserDB(name, surname, age, fav_coding_lang, fav_car, eye_colour,username,hashedP);
    res.send('User was inserted successfully.');
}

const deleteUser =  async(req,res)=>{
    await deleteUserDB(req.params.id);
    res.send('User has been deleted successfully');
}

const updateUser =  async(req,res)=>{
    let {name, surname, age, fav_coding_lang, fav_car, eye_colour} = req.body
    let users = await getUserDB(req.params.id)

    name?name = name:name = users.name;
    surname?surname = surname:surname = users.surname;
    age?age = age:age = users.age;
    fav_coding_lang?fav_coding_lang = fav_coding_lang:fav_coding_lang = users.fav_coding_lang;
    fav_car?fav_car = fav_car:fav_car = users.fav_car;
    eye_colour?eye_colour = eye_colour:eye_colour = users.eye_colour;

    await updateUserDB(name, surname, age, fav_coding_lang, fav_car, eye_colour,req.params.id);
    res.send('User has been updated successfully.')
}

const loginUser = (req,res)=>{
    res.json({message:"User logged in successfully",token:req.body.token})
}
// <----------------------------------------- Fruits --------------------------------------------------------------------->

const fetchFruits = async (req,res)=>{
    res.json(await getFruitsDB());
}

const fetchFruit = async (req, res)=>{
    // console.log(await getPeer(1));
    res.json(await getFruitDB(req.params.id));
}

const insertFruit =  async(req,res)=>{
    let {fruit_name, weight, amount} = req.body;
    await insertFruitDB(fruit_name, weight, amount);
    res.send('Fruit was inserted successfully.')
}

const deleteFruit =  async(req,res)=>{
    await deleteFruitDB(req.params.id);
    res.send('Fruit has been deleted successfully');
}

const updateFruit =  async(req,res)=>{
    let {fruit_name, weight, amount} = req.body
    let fruits = await getFruitDB(req.params.id)

    fruit_name?fruit_name = fruit_name:fruit_name = fruits.fruit_name;
    weight?weight = weight:weight = fruits.weight;
    amount?amount = amount:amount = fruits.amount;

    await updateFruitDB(fruit_name, weight, amount,req.params.id);
    res.send('Fruit has been updated successfully.')
}

const addToCart = async (req,res)=>{
    let {id} = await getUserDB(req.body.user);
    console.log(id);
    await addToCartDB(id,req.body.id)
    res.json({message:"You've added an item to cart"})

}

export {fetchUsers,fetchUser, insertUser, updateUser, deleteUser, fetchFruits, fetchFruit, insertFruit, updateFruit, deleteFruit,loginUser,addToCart}