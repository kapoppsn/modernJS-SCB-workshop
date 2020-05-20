// rest
function restFunction(a, ...rest) {
  console.log(a);
  console.log(rest);
  console.log(rest.length);
}
restFunction(1, 2, 3, 4, 5, 6, "A");

const getAverage = (...value) => {
  let avg = 0;
  for (let v of value) {
    avg += v;
  }
  console.log(avg / value.length);
};
getAverage(10, 10, 10, 10, 10, 10);

//spread
const bw = ["black", "white"];
const color = ["red", "yellow", ...bw];
console.log(color);

const copy = [...bw];
console.log(copy);

const concat = [...color, ...bw];
console.log(concat);

const person = { name: "person1", age: 40 };
const person2 = { name: "person2", age: 50 };

const merge = { ...person, ...person2 };
console.log(merge);
const merge1 = { ...person2, ...person };
console.log(merge1);

const getDetailTeam = (leadName, teamName, ...members) => {
  console.log(leadName);
  console.log(teamName);
  console.log(members);
};

const team = {
  lead: "Bay",
  name: "TechCamp",
  members: ["Jane", "Noon", "Bow"]
};

getDetailTeam(team.lead, team.name, ...team.members);
