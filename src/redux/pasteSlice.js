import { createSlice } from '@reduxjs/toolkit'
import { act } from 'react'
import toast, { Toaster } from 'react-hot-toast';

const initialState = {
  pastes:localStorage.getItem("pastes")
  ? JSON.parse(localStorage.getItem("pastes"))
  : []
}
// yha upar jo puri ki puri list padhi hui hai usme hm new paste add karenge 

export const pasteSlice = createSlice({
  name: 'paste',
  initialState,
  reducers: {
   addToPastes: (state,action) => {
        const paste = action.payload;

        // HOME WORK  add a check paste already exist wala case same title


        console.log("Dispatching addToPastes:", paste); // ✅ Add this
        state.pastes.push(paste);
        localStorage.setItem("pastes" , JSON.stringify(state.pastes));
        toast.success("Paste Created Successfully");

    },

    updateToPaste: (state,action) => {
      console.log("update?")
      const paste = action.payload;
      const index = state.pastes.findIndex((item) => item._id === paste._id);

      if(index >=0){
        state.pastes[index]=paste;
        localStorage.setItem("pastes" , JSON.stringify(state.pastes));

        toast.success("Paste Updated");
        console.log("updated ?")
      }
    },

    resetAllPaste: (state, action) => {
      state.pastes = [];
      localStorage.removeItem("pastes")
    },
     removeFromPaste: (state, action) => {
      const pasteId = action.payload;
     console.log("paste delete ?")
      const index = state.pastes.findIndex((item) => item._id === pasteId)

      if(index >=0){
        state.pastes.splice(index,1);
        localStorage.setItem("pastes", JSON.stringify(state.pastes));

        toast.success("paste deleted");
        console.log("paste deleted ?")
      }
    },
  },
})

// Action creators are generated for each case reducer function
export const { addToPastes, updateToPaste, resetAllPaste, removeFromPaste  } = pasteSlice.actions

export default pasteSlice.reducer