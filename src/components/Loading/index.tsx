import React from 'react'
import loading from '../../assets/images/others/loading.gif'
import './style.scss'

export const Loading = () => {
  return (
    <div className="loading">
      <img src={loading} alt="loading"/>
    </div>
  )
}