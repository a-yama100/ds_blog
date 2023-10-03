import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        // ログイン処理をここに書く（例: APIコールなど）
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
