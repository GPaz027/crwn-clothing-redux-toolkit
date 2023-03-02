import { createSlice } from "@reduxjs/toolkit";

const INITIAL_STATE = {
  currentUser: null,
};

// CreateSlice no solo crea el reducer, sino las acciones y los tipos de acciones.

export const userSlice = createSlice({
  name: "user", // Es el namespace, es decir, user/SET_ANYTHING
  initialState: INITIAL_STATE,
  reducers: {
    setCurrentUser(state, action) {
      // Es una acción
      state.currentUser = action.payload; // Es equivalente al return de los cases del reducer original. Aunque parezca que se está modificando el estado, se está creando un nuevo objeto. Sigue siendo inmutable. Es para que sea legible.
    },
  },
});

// Slice reemplaza al reducer, a los tipos de acción y a las acciones en sí mismas.

export const { setCurrentUser } = userSlice.actions;
export const userReducer = userSlice.reducer;
