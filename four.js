function hasProperty(Obj,propertyName) {
    return Obj.hasOwnProperty(propertyName);
}
const exampleObject={name:"Aliya",age:29};
console.log(hasProperty(exampleObject,"age"));
console.log(hasProperty(exampleObject,"email"));