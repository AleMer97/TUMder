const student1 = {
  name: "Hermann Fresh",
  age: 21,
  degree: "Mathematics",
  semester: "3. Bachelor",
  description:
    "You can calculate with me;) I'm the freshest study buddy you could look for.",
  language: "German, English, French",
  maxGroupSize: 4,
  searchesForMensa: false,
  searchesForStudy: true,
  image: "/static/tumStudent1.jpg",
};

const student2 = {
  name: "Hans Pfeiffer",
  age: 29,
  degree: "Business Administration",
  semester: "1. Master",
  description:
    "Feuerzangenbowle and university for life! I'm also student of German philology at LMU.",
  language: "German, Bavarian",
  maxGroupSize: 4,
  searchesForMensa: false,
  searchesForStudy: true,
  image: "/static/tumStudent2.jpg",
};

const student3 = {
  name: "Mandana Jolie",
  age: 21,
  degree: "Biochemistry",
  semester: "1. Master",
  description: "Motivated for studying:)",
  language: "German, English, Spanish",
  maxGroupSize: 4,
  searchesForMensa: false,
  searchesForStudy: true,
  image: "/static/tumStudent3.jpg",
};

const student4 = {
  name: "Lisa Müller",
  age: 18,
  degree: "Lehramt",
  semester: "1. Bachelor",
  description:
    "G'day mate! Love surfing, vegemite and Tim Tams. Might share those as well as experiences with study buddies;)",
  language: "German, English",
  maxGroupSize: 4,
  searchesForMensa: true,
  searchesForStudy: true,
  image: "/static/tumStudent4.jpg",
};

const student5 = {
  name: "Steffi Schmitt",
  age: 20,
  degree: "Nutritional Science",
  semester: "5. Bachelor",
  description: "Nothing beats a balanced diet, but 'to vino I say nie no'.",
  language: "German, English",
  maxGroupSize: 4,
  searchesForMensa: true,
  searchesForStudy: true,
  image: "/static/tumStudent5.jpg",
};

const student6 = {
  name: "Alex Mercier",
  age: 25,
  degree: "Computer Science",
  semester: "3. Master",
  description: "Sliding into your dms? 😏",
  language: "German, French, English, Spanish",
  maxGroupSize: 4,
  searchesForMensa: false,
  searchesForStudy: true,
  image: "/static/tumStudent6.jpg",
};
const group1 = {
  name: "Hermann Fresh, Steffi Schmitt",
  age: [21, 20],
  degree: "Mathematics, Nutritional Science",
  description: "Your new study group 💪🤓",
  language: "German",
  image: "/static/tumGroup1.jpg",
};

export const students = [
  group1,
  student1,
  student2,
  student3,
  student4,
  student5,
  student6,
];

const chatStudents = [...students];

export const chats = [
  {
    name: "TUMler learn group",
    display: "Hey guys😃, let's meet at room 08.13! ",
    image: chatStudents[0].image,
  },
  {
    name: "Lisa Müller",
    display: "Heyyy💁‍♀️ I need some help with math 🤪🤗 you help me with math I give you some vegemite?😏",
    image: chatStudents[4].image,
  },
  {
    name: "Hans Pfeiffer",
    display: "Hey, do you have plans for 06.12, 7.12 or 8.12?🤩",
    image: chatStudents[2].image,
  },
  {
    name: "Hermann Fresh",
    display: "Allnighter at the MI bib today?",
    image: chatStudents[1].image,
  },
];
