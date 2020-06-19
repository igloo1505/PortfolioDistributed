import React, { Fragment, useEffect } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
// es-lint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const MobileBtn = () => {
  const closeModal = () => {
    var instance = M.FloatingActionButton.getInstance(
      document.getElementById("floatingBtn")
    );
    instance.close();
  };
  return (
    <Fragment>
      <div className="fixed-action-btn mobileOnlyBtn" id="floatingBtn">
        <Link to="#!" className="btn-floating btn-large blue darken-3 ">
          <i className="large material-icons">compare_arrows</i>
        </Link>
        <ul>
          <li className="btn-floating light-blue lighten-3">
            <Link to="/" onClick={(e) => closeModal()}>
              <i className="material-icons">perm_identity</i>
            </Link>
          </li>
          <li className="btn-floating  light-green accent-3">
            <Link to="/portfolio" onClick={(e) => closeModal()}>
              <i className="material-icons">lightbulb_outline</i>
            </Link>
          </li>
          <li className="btn-floating  green ">
            <Link to="/contact" onClick={(e) => closeModal()}>
              <i className="material-icons">email</i>
            </Link>
          </li>
        </ul>
      </div>
    </Fragment>
  );
};

export default MobileBtn;
