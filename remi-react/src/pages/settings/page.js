import React from 'react';
import { browserHistory } from 'react-router';
import firebase from 'firebase';
import {PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import {FormControl} from 'react-bootstrap';
export default class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: {}
    };
    firebase.initializeApp({
      databaseURL: "https://remi-b28c1.firebaseio.com"
    });
    var db = firebase.database();
    var ref = db.ref("/u0");
    ref.on("value", function(snapshot) {
      this.setState({user: snapshot.val()});
      console.log(snapshot.val());
    }.bind(this));
  }
  
//<div className={styles['circle-percentage']}>82%</div><img className={styles['replace-me-circle']} height="150" sizes="(max-width: 479px) 65vw, 150px" src="assets/Circle.png" srcSet="assets/Circle.png 500w, assets/Circle.png 800w, assets/Circle.png 1080w, assets/Circle.png 1421w"/>

  render() {
    return (
      <div>
      <div className="left-side-bar">
        <div className="logo-div">
          <div className="logo-container w-container">
            <a className="logo-link-block w-inline-block" href="/prescriptions"><img className="remi-logo" sizes="(max-width: 479px) 23vw, (max-width: 991px) 15vw, 120px" src="assets/Remi%20Logo%202.png" srcSet="assets/Remi%20Logo%202-p-500x209.png 500w, assets/Remi%20Logo%202-p-800x334.png 800w, assets/Remi%20Logo%202-p-1080x450.png 1080w, assets/Remi%20Logo%202.png 1093w" width="120"/>
            </a>
          </div>
        </div>
        <div className="w-container">
          <div className="account-container"><img className="account-holder-image" sizes="(max-width: 479px) 31vw, 15vw" src="assets/Person%20Icon.png" srcSet="assets/Person%20Icon-p-500x500.png 500w, assets/Person%20Icon-p-800x800.png 800w, assets/Person%20Icon.png 1040w"/>
            <h3 className="user-name">Calum</h3>
          </div>
        </div>
        <div className="dash-break"><img className="break-line" height="10" src="assets/Break Line.png"/>
        </div>
        <div className="nav-div w-clearfix">
          <a className="dashboard-link-block w-clearfix w-inline-block" href="/prescriptions"><img className="nav-icon" src="assets/Dashboard1.png" width="20"/>
            <div className="side-nav-text">Dashboard</div>
          </a>
        </div>
        <div className="nav-div w-clearfix">
          <a className="dashboard-link-block w-clearfix w-inline-block" href="/doses"><img className="nav-icon" src="assets/Doses.png" width="20"/>
            <div className="side-nav-text">Doses</div>
          </a>
        </div>
        <div className="nav-div w-clearfix">
          <a className="dashboard-link-block w-clearfix w-inline-block" href="/pharmacy"><img className="nav-icon" src="assets/Pharmacy.png" width="20"/>
            <div className="side-nav-text">Pharmacy</div>
          </a>
        </div>
        <div className="nav-div w-clearfix">
          <a className="dashboard-link-block w-clearfix w-inline-block" href="/doctors"><img className="nav-icon" src="assets/Doctors.png" width="20"/>
            <div className="side-nav-text">Doctors</div>
          </a>
        </div>
        <div className="nav-div w-clearfix">
          <a className="dashboard-link-block w-clearfix w-inline-block" href="/settings"><img className="nav-icon" src="assets/Insurance.png" width="20"/>
            <div className="side-nav-text">Insurance</div>
          </a>
        </div>
        <div className="nav-div w-clearfix">
          <a className="dashboard-link-block w-clearfix w-inline-block" href="/logout"><img className="nav-icon" src="assets/Log%20Out%20Button.png" width="20"/>
            <div className="side-nav-text">Log Out</div>
          </a>
        </div>
      </div>
      <div className="main">
        <div className="top-nav-bar w-clearfix"><a className="emergency-button w-button" href="#">Emergency</a>
          <div className="page-header">Welcome to Remi</div>
        </div>
        <div className="first-section w-clearfix"><img className="pharmacy-image" height="50" src="assets/Insurance.png"/>
          <h2 className="main-header">Insurance</h2>
        </div>
        <div className="first-section">
          <div className="w-row">
            <div className="w-col w-col-4">
              <div className="box-design">
                <div className="w-container">
                  <h1 className="box-heading">Health Insurance</h1>
                </div>
                <div className="insurance-information-container w-container">
                  <div className="provider-text">Blue Cross Blue Shield</div>
                  <div className="doses-section insurance w-clearfix">
                    <div className="enrolle-id-text">Enrollee ID</div>
                    <div className="enrolle-id-text number">DZW10022300000</div>
                  </div>
                  <div className="doses-section insurance w-clearfix">
                    <div className="enrolle-id-text">Issuer</div>
                    <div className="enrolle-id-text number">890300989</div>
                  </div>
                  <div className="doses-section insurance w-clearfix">
                    <div className="enrolle-id-text">RxBIN</div>
                    <div className="enrolle-id-text number">004366</div>
                  </div>
                  <div className="doses-section insurance w-clearfix">
                    <div className="enrolle-id-text">RxGRP</div>
                    <div className="enrolle-id-text number">RX4655</div>
                  </div>
                  <div className="doses-section insurance w-clearfix">
                    <div className="enrolle-id-text">Vision</div>
                    <div className="enrolle-id-text number">Yes</div>
                  </div>
                  <div className="doses-section insurance w-clearfix">
                    <div className="enrolle-id-text">Dental</div>
                    <div className="enrolle-id-text number">No</div>
                  </div>
                </div>
              </div><a className="edit-your-pharmacy w-button" href="#">Edit Health Insurance</a>
            </div>
            <div className="w-col w-col-8">
              <div className="box-design">
                <div className="_10-days-container w-container">
                  <h3 className="box-heading">Find Doctors On My Insurance</h3>
                </div>
              </div>
              <div className="remi-div"><img className="insurance remi" data-ix="bounce-on-load" src="assets/Remi.png"/>
              </div>
              <div className="_2 insurance-page speech-bubble">
                <div className="w-clearfix">
                  <h4 className="greeting-text" data-ix="fade-in-header">Hey Calum!</h4><a className="exit-remi w-button" data-ix="exit-remy" href="#">X</a>
                </div>
                <div className="welcome-text" data-ix="fade-in-header-2">Check out the Find Doctors section. It'll automatically load doctors in your area on your Insurance.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}