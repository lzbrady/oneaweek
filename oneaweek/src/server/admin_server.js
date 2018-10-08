import fire from "./fire";

const firestore = fire.firestore();
const settings = {
  timestampsInSnapshots: true
};
firestore.settings(settings);

// Classes
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

export function deleteClass(classId) {
  return fire
    .firestore()
    .collection("classes")
    .doc(classId)
    .delete();
}

export function setNewTeacherName(classId, teacherName) {
  fire
    .firestore()
    .collection("classes")
    .doc(classId)
    .update("teacher", teacherName);
}

// Schools
export function addSchool(schoolName, state) {
  if (schoolName.trim() === "" || state === "na" || state.trim() === "") {
    return { error: true };
  }
  return fire
    .firestore()
    .collection("schools")
    .add({
      name: schoolName.trim(),
      state: state.trim()
    });
}

export function deleteSchool(schoolId) {
  return fire
    .firestore()
    .collection("schools")
    .doc(schoolId)
    .delete();
}

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

export function setNewSchoolName(schoolId, schoolName) {
  fire
    .firestore()
    .collection("schools")
    .doc(schoolId)
    .update("name", schoolName);
}

// Acts
export function getActs(classId) {
  return fire
    .firestore()
    .collection("acts")
    .where("classId", "==", classId)
    .get();
}

export function deleteAct(actId) {
  return fire
    .firestore()
    .collection("acts")
    .doc(actId)
    .delete();
}

// Blogs
export function addBlog(blogName, content, preview) {
  if (blogName === "") {
    blogName = "New Blog Article";
  }

  fire
    .database()
    .ref("blog_posts")
    .child(blogName)
    .set({ content: content });

  return fire
    .database()
    .ref("blogs")
    .child(blogName)
    .set({
      preview: preview,
      timestamp: new Date().getTime()
    });
}

export function deleteBlog(blogName) {
  fire
    .database()
    .ref("blog_posts")
    .child(blogName)
    .remove();

  fire
    .database()
    .ref("blogs")
    .child(blogName)
    .remove();
}
