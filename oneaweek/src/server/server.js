import fire from "./fire";

const firestore = fire.firestore();
const settings = {
    timestampsInSnapshots: true
};
firestore.settings(settings);

export function shareAct(name, act, classId) {
    console.log("SERVER| WRITE-" + name + ", " + act + ", " + classId);
    if (name === "" || act === "") {
        return {err: "Fill out all fields before submitting."};
    }
    return fire
        .firestore()
        .collection("acts")
        .add({name: name, act: act, classId: "XsTJQFQSIDnReO0J9XcM"});
}
