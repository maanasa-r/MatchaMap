import { auth } from './firebase';
import {
    onAuthStateChanged,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    updateProfile,
} from 'firebase/auth';

export const fbAuth = {
    onChange: (callback) => onAuthStateChanged(auth, callback),

    register: async ({ email, password, username }) => {
        const cred = await createUserWithEmailAndPassword(auth, email, password);
        if (username) {
            await updateProfile(cred.user, { displayName: username });
        }
        return cred.user;
    },

    login: async ({ email, password }) => {
        const cred = await signInWithEmailAndPassword(auth, email, password);
        return cred.user;
    },

    logout: () => signOut(auth),
};
