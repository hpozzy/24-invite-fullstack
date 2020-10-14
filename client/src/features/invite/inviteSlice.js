import { createSlice } from "@reduxjs/toolkit"
import axios from "axios"

export const inviteSlice = createSlice({
  name: "invites",
  initialState: {
    invitee: {},
    going: [],
    notGoing: [],
  },
  reducers: {
    display: (state, action) => {
      state.invitee = action.payload
    },
    yesGoing: (state, action) => {
      state.going = action.payload
    },
    notComing: (state, action) => {
      state.notGoing = action.payload
    },
  },
})

export const { display, yesGoing, notComing } = inviteSlice.actions

export const getInvites = () => (dispatch) => {
  axios.get(`/api`).then((r) => dispatch(display(r.data)))
}

export const goingUserAsync = (user) => (dispatch) => {
  axios.post(`/api/going/`, user).then((r) => dispatch(yesGoing(r.data)))
}

export const personnotGoingAsync = (user) => (dispatch) => {
  axios.post(`/api/notgoing/`, user).then((r) => dispatch(notComing(r.data)))
}

export const notgoingUserAsync = () => (dispatch) => {
  axios.get("/api/notgoing").then((resp) => dispatch(notComing(resp.data)))
  // axios.post(`/api/going/`, user).then((r) => dispatch(yesGoing(r.data)))
}

export const goingInvitesAsync = () => (dispatch) => {
  axios.get(`/api/going`).then((r) => dispatch(display(r.data)))
}

export const notGoingInvitesAsync = () => (dispatch) => {
  axios.get(`/api/notgoing`).then((r) => dispatch(display(r.data)))
}

export const selectInvitee = (state) => state.invite.invitee
export const selectGoing = (state) => state.invite.going
export const selectNotGoing = (state) => state.invite.notGoing

export default inviteSlice.reducer
