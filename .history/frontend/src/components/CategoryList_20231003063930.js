// E:\programming\Project\ds_blog\frontend\src\components\CategoryList.js

import React, { useState, useEffect } from 'react';
import { Table, Container } from 'react-bootstrap';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/categories');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("エラー:", error);
            }
        }
        fetchCategories();
    }, []);

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
                                <a href={`/categories/${category.id}/edit`}>編集</a> | 
                                <a href={`/categories/${category.id}/delete`}>削除</a>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </Container>
    );
}

export default CategoryList;
