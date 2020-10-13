import React, { useState, useEffect } from "react"
import { useSelector, useDispatch } from "react-redux"
import { selectGoing, goingUserAsync } from "./goingSlice"

export function Going() {
  const goingPerson = useSelector(selectGoing)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(goingUserAsync())
  }, [])

  return (
    <div>
      {" "}
      <h2>Going</h2>
      <div className="going">
        {goingPerson.map((item) => (
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
