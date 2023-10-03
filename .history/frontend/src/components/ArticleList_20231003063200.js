E:\programming\Project\ds_blog\frontend\src\components\ArticleList.js

import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';

const ArticleList = () => {
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        const fetchArticles = async () => {
            try {
                const response = await fetch('/articles');
                const data = await response.json();
                setArticles(data);
            } catch (error) {
                console.error("エラー:", error);
            }
        }
        fetchArticles();
    }, []);

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
                                <a href={`/articles/${article.id}/edit`}>編集</a> | 
                                <a href={`/articles/${article.id}/delete`}>削除</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default ArticleList;
