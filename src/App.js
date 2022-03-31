import "./App.css";
import React from "react";
import Headerbar from "./components/Headerbar";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

import Register from "./pages/Register";
import PageNotFound from "./pages/PageNotFound";
import Posthandle from "./pages/Posthandle";
import Dashboard from "./pages/Dashboard";
import Table from "./pages/Table";
import Form from "./pages/Form";

import Loginbar from "./components/Loginbar";
import useToken from "./components/useToken";
import SignIn from "./pages/Signin";
import Errordummypage from "./pages/Errordummypage";
import BooksList from "./components/BooksList";
import useLocalStorage from "./components/useLocalStorage";
import AddBook from "./components/AddBook";
import EditBook from "./components/EditBook";
import { Navigate } from "react-router";
import Box from "@mui/material/Box";
import Welcome from "./pages/Welcome.jpg"

function App() {
  const [books, setBooks] = useLocalStorage("books", []);
  const { token, setToken } = useToken();

  if (!token) {
    return (
      <React.Fragment>
        <Loginbar />
        <Routes>
          <Route
            exact
            path="/signin"
            element={<SignIn setToken={setToken} />}
          />
          <Route exact path="/register" element={<Register />} />
          <Route
            exact
            path="/"
            element={
              <div>
                <Box
                  sx={{
                    width: 300,
                    height: 300,
                  }}
                >
                  <h1>Kindly Log-in </h1>
                </Box>
              </div>
            }
          />
          <Route exact path="/errordummy" element={<Errordummypage />} />
          <Route exact path="/pagenotfound" element={<PageNotFound />} />
        </Routes>
      </React.Fragment>
    );
  }

  return (
    <React.Fragment>
      <Headerbar> </Headerbar>
      <Routes>
        <Route exact path="/pagenotfound" element={<PageNotFound />} />
        <Route
          exact
          path="/"
          element={
            <div>
              <Box
                sx={{
                  width: 300,
                  height: 300,
                }}
              >
                <img src={Welcome} height="670" width="1535" />
              </Box>
            </div>
          }
        />
        <Route exact path="/post" element={<Posthandle />} />
        <Route exact path="/dashboard" element={<Dashboard />} />
        <Route exact path="/table" element={<Table />} />
        <Route exact path="/editform/:id" element={<Form />} />
        <Route
          eaxct
          path="/userlist"
          element={<BooksList books={books} setBooks={setBooks} />}
        />
        <Route
          eaxct
          path="/add"
          element={<AddBook books={books} setBooks={setBooks} />}
        />
        <Route
          exact
          path="/edit/:id"
          element={<EditBook books={books} setBooks={setBooks} />}
        />
        <Route component={() => <Navigate to="/booklist" />} />
      </Routes>
    </React.Fragment>
  );
}

export default App;
