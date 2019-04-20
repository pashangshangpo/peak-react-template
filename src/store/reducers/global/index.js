export default (state, action) => {
  state = state || {}

  const Types = {}

  let current = Types[action.type]

  return (current && current()) || state
}
