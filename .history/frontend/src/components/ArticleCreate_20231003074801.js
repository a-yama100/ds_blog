// E:\programming\Project\ds_blog\frontend\src\components\ArticleCreate.js

import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';
import { Button, Form, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const ArticleCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [categoryId, setCategoryId] = useState('');
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
                        {/* カテゴリーのデータはAPIから取得する必要があります */}
                        <option value="1">カテゴリー1</option>
                        <option value="2">カテゴリー2</option>
                        {/* ... */}
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
