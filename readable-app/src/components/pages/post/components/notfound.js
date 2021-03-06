import React from 'react';
import {Link} from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-12">
          <div className="text-center">
            <h1>Oops!</h1>
            <h2>404 Not Found</h2>
            <div className="error-details mb-2">
              Sorry, an error has occured, Requested page not found!
            </div>
            <div className="error-actions">
              <Link
                to="/"
                className="btn btn-outline-primary btn-lg"
              >
                <span className="fa fa-home" />
                {' '}Take Me Home
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
