// REDUX ACTION IMPLEMENTED HERE !! :D
// By iTUTOR


// Create Event
/*
 * action types
 */

export const CREATE_EVENT = 'CREATE_EVENT'
export const DELETE_EVENT = 'DELETE_EVENT'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'

let eventId = 0

/*
 * other constants
 */

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_MY_EVENT: 'SHOW_MY_EVENT'
}

/*
 * action creators
 */

export function createEvent(text) {
  return { type: CREATE_EVENT, id: eventId++ ,text }
}

export function deleteEvent(id) {
  return { type: DELETE_EVENT, id }
}

export function setVisibilityFilter(filter) {
  return { type: SET_VISIBILITY_FILTER, filter }
}
