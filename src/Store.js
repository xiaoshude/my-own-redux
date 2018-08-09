export default class Store {
  constructor(preloadedState) {
    this._store = preloadedState || {};

  }
  dispatch(action) {

  }
  subscribe(listener) {
  }
  replaceReducer(nextReducer) {
  }
  getState() {
    return this._store
  }
}
