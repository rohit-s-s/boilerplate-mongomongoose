require("dotenv").config();
const connectDB = require("./database");
const Person = require("./model/user");

let John = new Person({
  name: "John",
  age: 24,
  favoriteFoods: ["pizza", "pasta"],
});

const createAndSavePerson = (done) => {
  John.save()
    .then((data) => {
      console.log(data);
    })
    .catch((err) => {
      console.error(err);
    });
  done(null, data);
};

const createManyPeople = (arrayOfPeople, done) => {
  done(null /*, data*/);
};

const findPeopleByName = (personName, done) => {
  done(null /*, data*/);
};

const findOneByFood = (food, done) => {
  done(null /*, data*/);
};

const findPersonById = (personId, done) => {
  done(null /*, data*/);
};

const findEditThenSave = (personId, done) => {
  const foodToAdd = "hamburger";

  done(null /*, data*/);
};

const findAndUpdate = (personName, done) => {
  const ageToSet = 20;

  done(null /*, data*/);
};

const removeById = (personId, done) => {
  done(null /*, data*/);
};

const removeManyPeople = (done) => {
  const nameToRemove = "Mary";

  done(null /*, data*/);
};

const queryChain = (done) => {
  const foodToSearch = "burrito";
  var query = Person.find(foodToSearch)
    .sort({ name: 1 })
    .limit(2)
    .select({ name: true, favoriteFoods: true })
    .exec((err,data)=>{
      if(err) return console.log(err)
        return done(null, data)
    });
  // done(null /*, data*/);
};

const MONGO_URL = process.env.MONGO_URL;
if (!MONGO_URL) {
  console.info("MongoDB URL not found");
  process.exit(1);
}

connectDB(MONGO_URL);

/** **Well Done !!**
/* You completed these challenges, let's go celebrate !
 */

//----- **DO NOT EDIT BELOW THIS LINE** ----------------------------------

exports.PersonModel = Person;
exports.createAndSavePerson = createAndSavePerson;
exports.findPeopleByName = findPeopleByName;
exports.findOneByFood = findOneByFood;
exports.findPersonById = findPersonById;
exports.findEditThenSave = findEditThenSave;
exports.findAndUpdate = findAndUpdate;
exports.createManyPeople = createManyPeople;
exports.removeById = removeById;
exports.removeManyPeople = removeManyPeople;
exports.queryChain = queryChain;
