import { db } from './firebase';
import {
    collection,
    getDocs,
    orderBy,
    query,
} from 'firebase/firestore';

const colRef = collection(db, 'spots');

const mapSpot = (doc) => {
    const d = doc.data();
    const name = d.name || '';
    const address = d.address || '';
    const city = d.city || '';
    const state = d.state || '';
    const zip = d.zip_code || d.zip || '';
    const full_address = [address, city, state].filter(Boolean).join(', ') + (zip ? ` ${zip}` : '');
    return {
        id: doc.id,
        name,
        address,
        city,
        state,
        zip_code: zip,
        latitude: typeof d.latitude === 'number' ? d.latitude : (d.latitude ? Number(d.latitude) : null),
        longitude: typeof d.longitude === 'number' ? d.longitude : (d.longitude ? Number(d.longitude) : null),
        rating: d.rating ?? null,
        review_count: d.review_count ?? 0,
        description: d.description || '',
        phone: d.phone || '',
        website: d.website || '',
        hours: d.hours || '',
        price_range: d.price_range || '',
        is_featured: !!d.is_featured,
        image_url: d.imageUrl || d.image_url || '',
        full_address,
        created_at: d.created_at || null,
        updated_at: d.updated_at || null,
    };
};

export const fbSpots = {
    list: async () => {
        // Basic ordered list; complex filtering done client-side for simplicity
        const q = query(colRef, orderBy('name'));
        const snap = await getDocs(q);
        return snap.docs.map(mapSpot);
    },
};
