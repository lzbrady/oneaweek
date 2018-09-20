import fire from "./fire";

const firestore = fire.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

export function getSchools(startDoc) {
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

export function getClasses(schoolId) {
  return fire
    .firestore()
    .collection("classes")
    .where("schoolId", "==", schoolId)
    .get();
}

export function addClass(teacher, schoolId) {
  if (teacher.trim() === "") {
    return { error: true };
  }
  return fire
    .firestore()
    .collection("classes")
    .add({ code: 123456, schoolId: schoolId, teacher: teacher });
}

export function addSchool(schoolName, state) {
  if (schoolName.trim() === "" || state === "na" || state.trim() === "") {
    return { error: true };
  }
  return fire
    .firestore()
    .collection("schools")
    .add({ name: schoolName, state: state });
}

export function addBlog(blogName, file, preview) {
  var uploadTask = fire
    .storage()
    .ref("blogs")
    .child(blogName)
    .put(file);

  fire
    .database()
    .ref("blogs")
    .child(blogName)
    .set({
      preview: preview,
      timestamp: new Date().getTime()
    });

  return uploadTask.then(
    function(snapshot) {
      // Can get progess in here if we want
      return { success: true };
    },
    function(error) {
      // A full list of error codes is available at
      // https://firebase.google.com/docs/storage/web/handle-errors
      switch (error.code) {
        case "storage/unauthorized":
          // User doesn't have permission to access the object
          break;
        case "storage/canceled":
          // User canceled the upload
          break;
        default:
          // Unknown error occurred, inspect error.serverResponse
          break;
      }
      return { error: true };
    }
  );
}
