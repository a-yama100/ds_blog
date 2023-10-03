// E:\programming\Project\ds_blog\frontend\src\App.js

import './App.css';
import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import ArticleCreate from './components/ArticleCreate';
import ArticleList from './components/ArticleList';
import CategoryList from './components/CategoryList';
import AddCategory from './components/AddCategory';
import EditProfile from './components/EditProfile';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/create-article" element={<ArticleCreate />} />
        <Route path="/articles" element={<ArticleList />} />
        <Route path="/categories" element={<CategoryList />} />
        <Route path="/add-category" element={<AddCategory />} />
        <Route path="/edit-profile" element={<EditProfile />} />
        {/* 他のルーティングもこちらに追加してください */}
      </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
