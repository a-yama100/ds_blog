// E:\programming\Project\ds_blog\frontend\src\components\ArticleCreate.js

import React, { useState } from 'react';
import RichTextEditor from './RichTextEditor';
import { Button, Form, Container } from 'react-bootstrap';

const ArticleCreate = () => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/articles', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ title, content })
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

                <Button variant="primary" type="submit">
                    投稿
                </Button>
            </Form>
        </Container>
    );
}

export default ArticleCreate;
