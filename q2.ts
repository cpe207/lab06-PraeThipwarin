// const axios = require("axios");
import axios from "axios";

/* assign interface/type to the function definition properly */
const getTodo = async (todoId: number) => {
  try {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    const userNames = res.data;
    const res2 = await axios.get("https://jsonplaceholder.typicode.com/todos");
    const userTodos = res2.data;
    
    return {
      owner: userNames[(userTodos[todoId-1].userId)-1].name,
      title: userTodos[todoId-1].title,
      completed: userTodos[todoId-1].completed
    }
     
} catch (err) {
    return "INVALID TODO ID";
}
};

//test case
const input1 = 15;
const input2 = 60;
const input3 = 250;

//run
getTodo(input1).then((result) => console.log(result));
getTodo(input2).then((result) => console.log(result));
getTodo(input3).then((result) => console.log(result));

export default getTodo;
