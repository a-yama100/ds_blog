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

function App() {
  return (
    <div className="App">
      <Header />
      <Login />
      <Dashboard />
      <ArticleCreate />
      <ArticleList />
      <CategoryList />
      <AddCategory />
      <Footer />
    </div>
  );
}

export default App;
