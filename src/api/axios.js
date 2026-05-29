import axios from 'axios';

// Configuration de base
const BASE_URL = 'http://localhost:8090/api';

// Instance pour les requêtes JSON standard
const API = axios.create({
    baseURL: BASE_URL,
    headers: {
        'Content-Type': 'application/json'
    },
    withCredentials: true // INDISPENSABLE pour que le cookie de session soit envoyé
});

// Instance pour les requêtes avec Fichiers (Multipart)
export const API_FILES = axios.create({
    baseURL: BASE_URL,
    withCredentials: true // INDISPENSABLE également
    // Note : Ne pas définir Content-Type ici, Axios le fait pour 'multipart/form-data'
});

// Intercepteur pour gérer les erreurs globales (ex: session expirée)
API.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response && error.response.status === 401) {
            // L'utilisateur n'est plus authentifié (session expirée)
            console.error("Session expirée, redirection vers le login...");
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

export default API;