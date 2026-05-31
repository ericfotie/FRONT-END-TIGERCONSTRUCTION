import axios from 'axios';

// Configuration de base pour Vite
// Dans Vite, on utilise import.meta.env pour les variables d'environnement
// Rappel : vos variables doivent commencer par VITE_ (ex: VITE_API_URL)
const BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:8090/api';

// Instance pour les requêtes JSON standard
const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true
});

// Instance pour les requêtes avec Fichiers (Multipart)
export const API_FILES = axios.create({
    baseURL: BASE_URL,
    withCredentials: true
});

// Intercepteur pour gérer les erreurs globales
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            console.error("Session expirée, redirection vers le login...");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default API;