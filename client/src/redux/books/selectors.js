export const selectBooksState = (state) => state.books
export const selectBooksData = (state) => selectBooksState(state).allBooks
export const selectBooksStatus = (state) => selectBooksState(state).status
export const selectMyBooks = (state) => selectBooksState(state).myBooks