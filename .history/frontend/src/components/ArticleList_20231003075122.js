// E:\programming\Project\ds_blog\frontend\src\components\ArticleList.js

import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);
    const token = localStorage.getItem('token'); // トークンを取得

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/articles', {
                    headers: {
                        'Authorization': `Bearer ${token}` // トークンをヘッダーに添付
                    }
                });
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error("エラー:", error);
            }
        }
        fetchArticles();
    }, [token]);

    return (
        <Container>
            <h2>投稿記事一覧</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>タイトル</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {articles.map(article => (
                        <tr key={article.id}>
                            <td>{article.title}</td>
                            <td>
                            <Link to={`/articles/${article.id}/edit`}>編集</Link> | 
                            <Link to={`/articles/${article.id}/delete`}>削除</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default ArticleList;
