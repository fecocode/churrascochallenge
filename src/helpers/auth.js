export function auth() {
    // retorna el token de autenticación
    let user = JSON.parse(sessionStorage.getItem('user'));

    if (user && user.data.token) {
        return user.data;
    } else {
        return {};
    }
}