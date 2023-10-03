E:\programming\Project\ds_blog\frontend\src\components\Register.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Register = () => {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/users/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ username, email, password })
            });
            const data = await response.json();
            if (response.status === 201) {
                console.log("登録成功:", data);
            } else {
                console.error("登録失敗:", data.error);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    }

    return (
        <div className="register-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicUsername">
                    <Form.Label>ユーザー名</Form.Label>
                    <Form.Control type="text" placeholder="ユーザー名を入力" value={username} onChange={e => setUsername(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="メールアドレスを入力" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>
                <Form.Group controlId="formBasicPassword">
                    <Form.Label>パスワード</Form.Label>
                    <Form.Control type="password" placeholder="パスワードを入力" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    登録
                </Button>
            </Form>
        </div>
    );
}

export default Register;
