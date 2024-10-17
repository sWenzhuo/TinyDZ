import { createStore } from 'vuex'
import user from './user'
import pk from './pk'



const store = createStore({
  modules:{
    user,
    pk
  }
});
export default store;