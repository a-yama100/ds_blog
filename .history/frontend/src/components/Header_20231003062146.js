// E:\programming\Project\ds_blog\frontend\src\components\Header.js

import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import logo from './logo.svg';

const Header = () => {
    return (
        <Navbar bg="dark" variant="dark" expand="lg">
            <Navbar.Brand href="/">ds_blog</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="/">ホーム</Nav.Link>
                    <Nav.Link href="/articles">記事</Nav.Link>
                    <Nav.Link href="/categories">カテゴリー</Nav.Link>
                    <Nav.Link href="/contact">お問い合わせ</Nav.Link>
                </Nav>
                <Nav className="ml-auto">
                    <Nav.Link href="/login">ログイン</Nav.Link>
                    <Nav.Link href="/dashboard">ダッシュボード</Nav.Link>
                </Nav>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
