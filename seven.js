const userMap=new Map();

function addUser(name,age,email){
    const userInfo={age,email};
    userMap.set(name,userInfo);
}

function updateUser(name,age,email){
    if(userMap.has(name)){
        const userInfo=userMap.get(name);
        userInfo.age=age;
        userInfo.email=email;
    }
}
 
function deleteUser(name){
    userMap.delete(name);
}
addUser("Alice",26,"alice@example.com");
addUser("John",30,"john@example.com");
console.log(userMap);

updateUser("Alice",32,"newemail@example.com");
console.log(userMap);
deleteUser("john")
console.log(userMap);