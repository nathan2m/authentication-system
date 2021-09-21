export const isAuthenticated = () => {
    const state = localStorage.getItem('auth');
    return state === undefined ? false : state;
}