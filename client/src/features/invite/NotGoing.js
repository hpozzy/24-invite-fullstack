import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import {
  getInvites,
  selectInvitee,
  selectGoing,
  selectNotGoing,
  goingUser,
  personnotGoingAsync,
  display,
  yesGoing,
  notComing,
  notgoingUserAsync,
} from "./inviteSlice"

export function NotGoing() {
  const notgoingPerson = useSelector(selectNotGoing)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(notgoingUserAsync())
  }, [])

  return (
    <div>
      {" "}
      <h2>Not Going</h2>
      <div className="notGoing2">
        {notgoingPerson.map((item) => (
          <div className="randomUser">
            <div className="randomUser-img">
              <img className="randomUser-thumb" src={item.pic} />
            </div>
            <div className="userInfo">
              <div className="userName">
                <strong>Name:</strong> {item.name} {item.last}
              </div>
              <div className="userEmail">
                <strong>Email:</strong> {item.email}
              </div>
              <div className="userPhone">
                <strong>Phone:</strong> {item.phone}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
