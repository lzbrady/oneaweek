import fire from "./fire";

const firestore = fire.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

var Filter = require("bad-words"),
  filter = new Filter();

// Acts
export function getActs(classId) {
  return fire
    .firestore()
    .collection("acts")
    .where("classId", "==", classId)
    .get();
}

export function shareAct(name, act, imageUrl, classId, state) {
  if (name === "" || act === "") {
    return { err: "Fill out all fields before submitting." };
  }

  return fire
    .firestore()
    .collection("acts")
    .add({
      name: filter.clean(name),
      act: filter.clean(act),
      imageUrl: imageUrl,
      classId: classId,
      index: getRandomNumber(),
      state
    });
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

export function getActCount() {
  return fire.database().ref("actCount");
}

// Schools
export function getSchools(state) {
  return fire
    .firestore()
    .collection("schools")
    .where("state", "==", state)
    .get();
}

export function getAllSchools(startDoc) {
  if (!startDoc.null) {
    return fire
      .firestore()
      .collection("schools")
      .orderBy("state")
      .startAfter(startDoc)
      .get();
  }
  return fire
    .firestore()
    .collection("schools")
    .orderBy("state")
    .get();
}

// Classes
export function getClasses(schoolId) {
  return fire
    .firestore()
    .collection("classes")
    .where("schoolId", "==", schoolId)
    .get();
}

// Blogs
export function getLatestBlog() {
  return fire
    .database()
    .ref("blogs")
    .orderByChild("timestamp")
    .limitToLast(1);
}

export function getBlogPreviews(start) {
  return fire
    .database()
    .ref("blogs")
    .orderByChild("timestamp")
    .startAt(start, "timestamp")
    .limitToFirst(10);
}

export function getFullBlog(blogName) {
  return fire
    .database()
    .ref("blog_posts")
    .child(blogName);
}

// Utility
function getRandomNumber() {
  return Math.floor(Math.random() * 100000000);
}
