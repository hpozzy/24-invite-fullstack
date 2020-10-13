import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const goinginviteSlice = createSlice({
  name: "invites",
  initialState: {
    going: [],
  },
  reducers: {
    display: (state, action) => {
      state.invitee = action.payload
    },
    yesGoing: (state, action) => {
      state.going = action.payload
    },
  },
})

export const { yesGoing, display } = goinginviteSlice.actions

export const goingUserAsync = () => (dispatch) => {
  axios.get("/api/going").then((resp) => dispatch(yesGoing(resp.data)))
  // axios.post(`/api/going/`, user).then((r) => dispatch(yesGoing(r.data)))
}

export const goingInvitesAsync = () => (dispatch) => {
  axios.get(`/api/going`).then((r) => dispatch(display(r.data)))
}

export const selectGoing = (state) => state.invite.going

export default goinginviteSlice.reducer
