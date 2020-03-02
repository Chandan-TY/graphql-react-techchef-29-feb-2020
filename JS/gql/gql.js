function template(staticData, ...data) {
  console.log(staticData);
//   console.log(dynamicData);
//   console.log(age)
console.log(data)
  console.log("template function");
}
let name = "Chandan";
let age = 12
template`My name is ${name} , age is ${age}`;
// template()