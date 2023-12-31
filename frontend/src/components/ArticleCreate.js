// E:\programming\Project\ds_blog\frontend\src\components\ArticleCreate.js

import React, { useState, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';
import { Button, Form, Container } from 'react-bootstrap';

const ArticleCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) formData.append('image', image);
        formData.append('categoryId', categoryId);

        try {
            const response = await fetch('/articles', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${token}`, // トークンをヘッダーに添付
                },
                body: formData
            });
            const data = await response.json();
            if (response.status === 200) {
                console.log("記事投稿成功:", data);
            } else {
                console.error("記事投稿失敗:", data.error);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    }

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('/categories', {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error("カテゴリーの取得に失敗:", error);
            }
        }
        fetchCategories();
    }, [token]);

    return (
        <Container>
            <h2>記事の投稿</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="title">
                    <Form.Label>タイトル</Form.Label>
                    <Form.Control type="text" placeholder="タイトルを入力" value={title} onChange={e => setTitle(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="content">
                    <Form.Label>内容</Form.Label>
                    <RichTextEditor content={content} setContent={setContent} />
                </Form.Group>

                <Form.Group>
                    <Form.Label>画像</Form.Label>
                    <Form.Control type="file" onChange={e => setImage(e.target.files[0])} />
                </Form.Group>

                <Form.Group controlId="categoryId">
                    <Form.Label>カテゴリー</Form.Label>
                    <Form.Control as="select" value={categoryId} onChange={e => setCategoryId(e.target.value)}>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Form.Control>
                </Form.Group>

                <Button variant="primary" type="submit">
                    投稿
                </Button>
            </Form>
        </Container>
    );
}

export default ArticleCreate;
