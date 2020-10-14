import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { BrowserRouter as Router, Route, Link } from "react-router-dom"
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
  notgoingUserAsync,
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
      <Link to={"/api/going/"} className="headerGoing">
        Going: {selectGoing.length}
      </Link>
      <Link to={"/api/notgoing/"} className="headerNotGoing">
        Not Going: {personnotGoingAsync.length}
      </Link>
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
            <form>
              <button
                className="notGoing"
                onClick={() => dispatch(personnotGoingAsync(invitee))}
              >
                x
              </button>
            </form>
          </div>
          <div>
            <form>
              <button
                className="yesGoing"
                onClick={() => dispatch(goingUserAsync(invitee))}
              >
                ✓
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}
