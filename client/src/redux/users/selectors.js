export const selectUsersState = (state) => state.users
export const selectUsersData = (state) => selectUsersState(state).allUsers
export const selectUsersStatus = (state) => selectUsersState(state).status
