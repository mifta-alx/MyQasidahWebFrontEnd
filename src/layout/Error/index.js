import React from 'react'
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError()
  return (  
    <div className="d-flex align-items-center justify-content-center vh-100">
            <div className="text-center">
                <div>
                    <h1 className='fw-bold' style={{fontSize: 90}}>{error.status}</h1>
                </div>
                <div className="mt-2">
                    <p className="fs-3"> <span className="text-danger">Oops!</span> Sorry, an expected error has occured.</p>
                    <p className="lead">
                        {error.message}
                    </p>
                </div>

            </div>
        </div>
  )
}
