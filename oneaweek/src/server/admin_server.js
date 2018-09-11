import fire from "./fire";

const firestore = fire.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export function getSchools(startDoc) {
  if (!startDoc.null) {
    console.log("Start Doc Exists", startDoc);
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

export function getClasses(schoolId) {
  return fire
    .firestore()
    .collection("classes")
    .where("schoolId", "==", schoolId)
    .get();
}

export function addClass(teacher, schoolId) {
  return fire
    .firestore()
    .collection("classes")
    .add({
      code: 123456,
      schoolId: schoolId,
      teacher: teacher
    });
}
