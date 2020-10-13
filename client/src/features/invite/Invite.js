import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getInvites,
  selectInvitee,
  selectGoing,
  selectNotGoing,
  goingUserAsync,
  personnotGoingAsync,
  display,
  yesGoing,
  notComing,
} from "./inviteSlice"

export function Invite() {
  const invitee = useSelector(selectInvitee)
  const goingPerson = useSelector(selectGoing)
  const notGoing = useSelector(selectNotGoing)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getInvites())
  }, [])

  // useEffect(() => {
  //   dispatch(goingUserAsync())
  // }, [])

  // useEffect(() => {
  //   dispatch(personnotGoingAsync())
  // }, [])

  return (
    <div>
      Going: {invitee.length}
      Not Going: {invitee.length}
      <div className="randomUser">
        <div className="randomUser-img">
          <img className="randomUser-thumb" src={invitee.pic} />
        </div>
        <div className="userInfo">
          <div className="userName">
            <strong>Name:</strong> {invitee.name} {invitee.last}
          </div>
          <div className="userEmail">
            <strong>Email:</strong> {invitee.email}
          </div>
          <div className="userPhone">
            <strong>Phone:</strong> {invitee.phone}
          </div>
        </div>
        <div className="goingOrNot">
          <div>
            <button
              className="notGoing"
              onClick={() => dispatch(personnotGoingAsync(invitee))}
            >
              x
            </button>
          </div>
          <div>
            <button
              className="yesGoing"
              onClick={() => dispatch(goingUserAsync(invitee))}
            >
              ✓
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
