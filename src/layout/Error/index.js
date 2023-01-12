import React from 'react'
import { useRouteError } from "react-router-dom";

export default function ErrorPage() {
const error = useRouteError()
  return (  
    <div class="d-flex align-items-center justify-content-center vh-100">
            <div class="text-center">
                <div>
                    <h1 className='fw-bold' style={{fontSize: 90}}>{error.status}</h1>
                </div>
                <div class="mt-2">
                    <p class="fs-3"> <span class="text-danger">Oops!</span> Sorry, an expected error has occured.</p>
                    <p class="lead">
                        {error.message}
                    </p>
                </div>

            </div>
        </div>
  )
}
