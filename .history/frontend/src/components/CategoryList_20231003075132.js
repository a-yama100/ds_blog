// E:\programming\Project\ds_blog\frontend\src\components\CategoryList.js

import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('token'); // トークンを取得

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/categories', {
                    headers: {
                        'Authorization': `Bearer ${token}` // トークンをヘッダーに添付
                    }
                });
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("エラー:", error);
            }
        }
        fetchCategories();
    }, [token]);

    return (
        <Container>
            <h2>カテゴリー一覧</h2>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>カテゴリー名</th>
                        <th>操作</th>
                    </tr>
                </thead>
                <tbody>
                    {categories.map(category => (
                        <tr key={category.id}>
                            <td>{category.name}</td>
                            <td>
                                <Link to={`/categories/${category.id}/edit`}>編集</Link> | 
                                <Link to={`/categories/${category.id}/delete`}>削除</Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default CategoryList;
