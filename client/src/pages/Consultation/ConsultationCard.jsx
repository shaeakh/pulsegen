import React from 'react'
import { Link } from 'react-router-dom'
function ConsultationCard(props) {
  return (
    <>
    <Link to="/specialists">
      <div className="card card-side bg-base-100 shadow-xl">
        <figure><img src={props.photo} alt="Movie" /></figure>
        <div className="card-body">
          <h2 className="card-title">{props.title}</h2>
          <p>{props.info}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary">
              
              Consult
              
              </button>
          </div>
        </div>
      </div>
      </Link>
    </>
  )
}

export default ConsultationCard