import { db } from './firebase';
import {
    collection,
    addDoc,
    getDocs,
    orderBy,
    query,
    serverTimestamp,
} from 'firebase/firestore';

const colRef = collection(db, 'experiences');

export const fbExperiences = {
    list: async () => {
        const q = query(colRef, orderBy('createdAt', 'desc'));
        const snap = await getDocs(q);
        return snap.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
    },

    create: async ({ user, title, content, rating = null, spot = null }) => {
        const doc = await addDoc(colRef, {
            userId: user.uid,
            username: user.displayName || user.email || 'user',
            title,
            content,
            rating,
            spot,
            createdAt: serverTimestamp(),
        });
        return doc.id;
    },
};
