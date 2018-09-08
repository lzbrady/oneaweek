import fire from "./fire";

const firestore = fire.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

var Filter = require("bad-words"),
  filter = new Filter();

export function shareAct(name, act, classId, state) {
  if (name === "" || act === "") {
    return { err: "Fill out all fields before submitting." };
  }

  return fire
    .firestore()
    .collection("acts")
    .add({
      name: filter.clean(name),
      act: filter.clean(act),
      classId: classId,
      index: getRandomNumber(),
      state
    });
}

export function getSchools(state) {
  return fire
    .firestore()
    .collection("schools")
    .where("state", "==", state)
    .get();
}

export function getClasses(schoolId) {
  return fire
    .firestore()
    .collection("classes")
    .where("schoolId", "==", schoolId)
    .get();
}

export function getSpotlightAct() {
  var randNum = getRandomNumber();
  let rtn = getRandomAct(randNum, true);

  return rtn.then(snapshot => {
    if (snapshot.docs.length === 0) {
      return getRandomAct(randNum, false);
    } else {
      return rtn;
    }
  });
}

function getRandomAct(num, greaterThan) {
  return fire
    .firestore()
    .collection("acts")
    .where("index", greaterThan ? ">=" : "<", num)
    .orderBy("index")
    .limit(1)
    .get();
}

function getRandomNumber() {
  return Math.floor(Math.random() * 100000000);
}
