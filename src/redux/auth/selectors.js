/* eslint-disable import/no-anonymous-default-export */
const getIsAuthenticated = state => state.auth.isAuthenticated;
const getUserEmail = state => state.auth.user.email;
const getLoading = state => state.auth.loading;
const getError = state => state.auth.error;
export default { getIsAuthenticated, getUserEmail, getLoading, getError }