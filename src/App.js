import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthProvider from "./AuthContext/AuthContext";
import Header from "./common/Header/Header";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";
import Login from "./components/Login/Login";
import Details from "./components/Details/Details";
import WorkDetails from "./components/WorkDetails/WorkDetails";
import Register from "./components/Register/Register";
import RegisterEmployee from "./components/RegisterEmployee/RegisterEmployee";
import DisplayQuestion from "./components/DisplayQuestion/DisplayQuestion";
import TypeScriptQuestion from "./components/Question/TypeScriptQuestion/TypeScriptQuestion";
import ReactQuestion from "./components/Question/ReactQuestion/ReactQuestion";
import JavaScriptQuestion from "./components/Question/JavaScriptQuestion/JavaScriptQuestion";
import HTMLQuestion from "./components/Question/HTMLQuestion/HTMLQuestion";
import CSSQuestion from "./components/Question/CSSQuestion/CSSQuestion";
import AngularQuestion from "./components/Question/AngularQuestion/AngularQuestion";
import NodeQuestion from "./components/Question/NodeQuestion/NodeQuestion";
import ExpressQuestion from "./components/Question/ExpressQuestion/ExpressQuestion";
import MongoDBQuestion from "./components/Question/MongoDBQuestion/MongoDBQuestion";
import JiraQuestion from "./components/Question/JiraQuestion/JiraQuestion";
import GitQuestion from "./components/Question/GitQuestion/GitQuestion";
import DesignQuestion from "./components/Question/DesignQuestion/DesignQuestion";
import NextJSQuestion from "./components/Question/NextJSQuestion/NextJSQuestion";
import VueJSQuestion from "./components/Question/VueJSQuestion/VueJSQuestion";
import MysqlQuestion from "./components/Question/MysqlQuestion/MysqlQuestion";
const App = () => {
  return (
    <AuthProvider>
      <div className="flex flex-col min-h-screen">
        <Router>
          <Header />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Login />} />
              <Route
                path="/details"
                element={
                  <ProtectedRoute>
                    <Details />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/work-details"
                element={
                  <ProtectedRoute>
                    <WorkDetails />
                  </ProtectedRoute>
                }
              />

              <Route
                path="/register"
                element={
                  <ProtectedRoute>
                    <Register />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/list-employee"
                element={
                  <ProtectedRoute>
                    <RegisterEmployee />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-typescript"
                element={
                  <ProtectedRoute>
                    <TypeScriptQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-javascript"
                element={
                  <ProtectedRoute>
                    <JavaScriptQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-html"
                element={
                  <ProtectedRoute>
                    <HTMLQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-css"
                element={
                  <ProtectedRoute>
                    <CSSQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-angular"
                element={
                  <ProtectedRoute>
                    <AngularQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-react"
                element={
                  <ProtectedRoute>
                    <ReactQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-node"
                element={
                  <ProtectedRoute>
                    <NodeQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-mongodb"
                element={
                  <ProtectedRoute>
                    <MongoDBQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-express"
                element={
                  <ProtectedRoute>
                    <ExpressQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-nextjs"
                element={
                  <ProtectedRoute>
                    <NextJSQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-vuejs"
                element={
                  <ProtectedRoute>
                    <VueJSQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-git"
                element={
                  <ProtectedRoute>
                    <GitQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-jira"
                element={
                  <ProtectedRoute>
                    <JiraQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-design"
                element={
                  <ProtectedRoute>
                    <DesignQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/questions-mysql"
                element={
                  <ProtectedRoute>
                    <MysqlQuestion />
                  </ProtectedRoute>
                }
              />
              <Route
                path="/list-question"
                element={
                  <ProtectedRoute>
                    <DisplayQuestion />
                  </ProtectedRoute>
                }
              />
            </Routes>
          </main>
        </Router>
      </div>
    </AuthProvider>
  );
};

export default App;
