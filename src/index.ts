function add(int1: number, int2: number) {
  return int1 + int2;
}

const person: {
  name: string;
  nickname?: string;
  age: number;
} = {
  name: "sachin",
  age: 25
};

let res = add(2, 32);
console.log(res);
console.log(person.name);
console.log(person.nickname);
console.log(person.age);

let hobbies: string[];
hobbies = ["badmintion", "carrom", 23]; // cant assign 23 as its an array of string
console.log(hobbies);

let role = [2, "author"];
console.log(role);

enum Roles {
  ADMIN,
  MANAGER = 3,
  EMPLOYEE = 45,
  CLERK = "HEHE",
  TYPIST = 2,
  CEO
}

console.log(Roles.ADMIN); // 0
console.log(Roles.MANAGER); // 3 . can be assigned any values
console.log(Roles.EMPLOYEE); // 45
console.log(Roles.CLERK); // "HEHE". next value should be assigned
console.log(Roles.TYPIST); // 2
console.log(Roles.CEO); // 3 . gets autoincremented if the previous value is a number
