import api from './api';

export async function actionLogin(username) {
    const responseFromApi = await api.post('/devs', { username });
    if (!responseFromApi) return;
    return responseFromApi.data.user
}

export async function fetchAllUsers(user) {
    const responseFromApi = await api.get('/devs', { headers: { user } });
    if (!responseFromApi) return;
    return responseFromApi.data
}

export async function likeInUser(user, target) {
    const responseFromApi = await api.post('/devs/likes', { headers: { user, target } });
    if (!responseFromApi) return;
    return true;
}

export async function dislikeInUser(user, target) {
    const responseFromApi = await api.post('/devs/dislikes', { headers: { user, target } });
    if (!responseFromApi) return;
    return true;
}