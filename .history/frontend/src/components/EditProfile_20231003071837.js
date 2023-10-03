// E:\programming\Project\ds_blog\frontend\src\components\EditProfile.js

import React, { useState } from 'react';
import { Form, Button, Container } from 'react-bootstrap';

const token = localStorage.getItem('token');

const EditProfile = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/users/edit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // トークンをヘッダーに添付
                },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();

            if (response.status === 200) {
                console.log("情報更新成功:", data);
            } else {
                console.error("情報更新失敗:", data.error);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    }

    return (
        <Container>
            <h2>管理者情報の変更</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="username">
                    <Form.Label>ユーザー名</Form.Label>
                    <Form.Control type="text" placeholder="ユーザー名を入力" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="email">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="メールアドレスを入力" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="password">
                    <Form.Label>新しいパスワード</Form.Label>
                    <Form.Control type="password" placeholder="新しいパスワードを入力" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    更新
                </Button>
            </Form>
        </Container>
    );
}

export default EditProfile;
