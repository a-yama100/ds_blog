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
import { Link } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Router>
      <Link to="/">ホーム</Link>
        <Switch>
          <Route path="/" exact component={ArticleList} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
          <Route path="/create-article" component={ArticleCreate} />
          <Route path="/articles" component={ArticleList} />
          <Route path="/categories" component={CategoryList} />
          <Route path="/add-category" component={AddCategory} />
          <Route path="/edit-profile" component={EditProfile} />
          {/* 他のルーティングもこちらに追加してください */}
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
