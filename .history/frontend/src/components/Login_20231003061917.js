// E:\programming\Project\ds_blog\frontend\src\components\Login.js

import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/users/login', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email, password })
            });
            const data = await response.json();

            if (response.status === 200) {
                console.log("ログイン成功:", data);
                // ここでセッションやトークンを保存する処理を追加
            } else {
                console.error("ログイン失敗:", data.error);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    }

    return (
        <div className="login-form">
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>メールアドレス</Form.Label>
                    <Form.Control type="email" placeholder="メールアドレスを入力" value={email} onChange={e => setEmail(e.target.value)} />
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>パスワード</Form.Label>
                    <Form.Control type="password" placeholder="パスワードを入力" value={password} onChange={e => setPassword(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    ログイン
                </Button>
            </Form>
        </div>
    );
}

export default Login;
