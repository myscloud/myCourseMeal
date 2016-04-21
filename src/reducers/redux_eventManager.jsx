const event = (state, action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
    // Contact MongoDB via
    // RESTFul API
    // OnComplete Then Return
      return {
        id: action.id,
        text: action.text,
        completed: false
      }
    case 'DELETE_EVENT':
    // Contact MongoDB via
    // RESTFul API
    // OnComplete Then Return
      var deleteSuccess = true; //Database Action Boolean Return
      /* var deleteSuccess = function(action.id){
          send REST Request with action.id
          action.id = "The ID of Event"
      }; */

      if(deleteSuccess){
          console.log("Deletion Success");
      }else{
          console.log("Deletion of Event "+action.id+" FAILED")
      }

    default:
      return state
  }
}

const events = (state = [], action) => {
  switch (action.type) {
    case 'CREATE_EVENT':
      return [
        ...state,
        event(undefined, action)
      ]
    case 'DELETE_EVENT':
      return state.map(t =>
        event(t, action)
      )
    default:
      return state
  }
}

export default events
