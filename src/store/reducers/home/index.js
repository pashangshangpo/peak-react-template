export default (state, action) => {
  state = state || {
    load: false
  }

  const Types = {
    addLoad() {
      return {
        ...state,
        load: true
      }
    },
    removeLoad() {

      return {
        ...state,
        load: false
      }
    }
  }

  let current = Types[action.type]

  return (current && current()) || state
}