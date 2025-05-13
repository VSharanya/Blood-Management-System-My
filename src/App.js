import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';
import LoginForm from './components/LoginForm';
import DonorDashboard from './components/DonorDashboard';
import HomePage from './components/HomePage';
import SearchPage from './components/SearchPage';
import EmergencyRequest from './components/EmergencyRequest';
import AdminPanel from './components/AdminPanel';
import DonorStatistics from './components/DonorStatistics';
import FeedbackForm from './components/FeedbackForm';
import RealTimeUpdates from './components/RealTimeUpdates';
import LoginForm1 from './components/LoginForm1';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function App() {
  return (
    <Router>
      <div>
        <Switch>
          {/* Apply container-fluid only for HomePage */}
          <Route
            path="/"
            exact
            render={() => (
              <div className="container-fluid"> {/* Apply container-fluid for HomePage */}
                <HomePage />
              </div>
            )}
          />
          {/* Apply container for all other pages */}
          <Route
            path="/register"
            render={() => (
              <div className="container"> {/* Apply container for all other pages */}
                <RegistrationForm />
              </div>
            )}
          />
          <Route
            path="/login"
            render={() => (
              <div className="container">
                <LoginForm />
              </div>
            )}
          />
          <Route
            path="/dashboard"
            render={() => (
              <div className="container">
                <DonorDashboard />
              </div>
            )}
          />
          <Route
            path="/search"
            render={() => (
              <div className="container">
                <SearchPage />
              </div>
            )}
          />
          <Route
            path="/emergency"
            render={() => (
              <div className="container">
                <EmergencyRequest />
              </div>
            )}
          />
          <Route
            path="/admin"
            render={() => (
              <div className="container">
                <AdminPanel />
              </div>
            )}
          />
          <Route
            path="/statistics"
            render={() => (
              <div className="container">
                <DonorStatistics />
              </div>
            )}
          />
          <Route
            path="/feedback"
            render={() => (
              <div className="container">
                <FeedbackForm />
              </div>
            )}
          />
          <Route
            path="/updates"
            render={() => (
              <div className="container">
                <RealTimeUpdates />
              </div>
            )}
          />
          <Route
            path="/login1"
            render={() => (
              <div className="container">
                <LoginForm1 />
              </div>
            )}
          />
        </Switch>
      </div>
    </Router>
  );
}

export default App;