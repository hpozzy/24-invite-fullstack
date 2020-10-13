import { configureStore } from "@reduxjs/toolkit"
import inviteReducer from "../features/invite/inviteSlice"
import goingReducer from "../features/invite/goingSlice"
export default configureStore({
  reducer: {
    invite: inviteReducer,
  },
})
