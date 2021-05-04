import { configureStore, createSlice } from '@reduxjs/toolkit';

const authSlice = createSlice({
  name: 'authentication',
  initialState: { isAuthenticated: false },
  reducers: {
    login(state) {
      state.isAuthenticated = true;
    },
    logout(state) {
      state.isAuthenticated = false;
    }
  }
})

const formSlice = createSlice({
  name: 'form',
  initialState: { showData: false, formArray: [], prefillArray: []  ,heading:false },
  reducers: {
    showData(state) {
      state.showData = !state.showData;

    },
    toggle(state, action) {
      state.showData = !state.showData;
      state.prefillArray = state.formArray[action.payload];
      state.heading = !state.heading;
    
    },
    addToArray(state, action) {
      state.formArray.push(action.payload);
    },
    removeArray(state) {
      state.formArray = [];
    },
    deleteItem(state, action) {
      state.formArray.splice(action.payload, 1);
      localStorage.setItem('form-data', JSON.stringify(state.formArray));
    },
    overRideArray(state,action){
      state.formArray.splice(action.payload, 1);
      localStorage.setItem('form-data', JSON.stringify(state.formArray));

    }
  }
})

const store = configureStore({
  reducer: { auth: authSlice.reducer, data: formSlice.reducer }
});

export const authActions = authSlice.actions;
export const formActions = formSlice.actions;
export default store;