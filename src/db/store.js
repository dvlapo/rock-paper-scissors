import { openDB } from "idb";

const store = {
    openDB: async () => {
        return await openDB("rpgGameScore", 1);
    },
    updateDB: async (score) => {
        const db = await store.openDB();
        const tx = db.transaction("score", "readwrite");
        const objStore = tx.objectStore("score");
        await objStore.put(+score, "score");
        await tx.done;
    },
    getScore: async () => {
        const db = await store.openDB();
        return (await db.getAll("score")).length !== 0
            ? await db.getAll("score")
            : 0;
    },
};

export default store;
