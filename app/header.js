import React from "react";

export default class Header extends React.Component {
  render() {
    return(
      <div className="header row">
        <div className="col-lg-10">
          <h1 className="logo"> gotMovies </h1>
          <ul className="nav">
            <li className="link browse pull-left">Browse</li>
            <li className="link kids pull-left">Kids</li>
          </ul>
        </div>
        <div className="col-lg-2 user text-right">
          <span className="notifications">
            <i className="fa fa-bell"></i>
          </span>
          <span className="user-icon">SS</span>
        </div>
      </div>
    );
  }
}
