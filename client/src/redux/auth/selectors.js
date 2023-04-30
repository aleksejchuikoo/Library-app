export const selectAuthState = (state) => state.auth
export const selectAuthData = (state) => selectAuthState(state).data
export const selectAuthStatus = (state) => selectAuthState(state).status
