// E:\programming\Project\ds_blog\frontend\src\components\AddCategory.js


import React, { useState } from 'react';
import { Button, Form, Container } from 'react-bootstrap';


const AddCategory = () => {
    const [name, setName] = useState('');
    const token = localStorage.getItem('token');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/categories', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // トークンをヘッダーに添付
                },
                body: JSON.stringify({ name })
            });
            const data = await response.json();

            if (response.status === 200) {
                console.log("カテゴリー追加成功:", data);
            } else {
                console.error("カテゴリー追加失敗:", data.error);
            }
        } catch (error) {
            console.error("エラー:", error);
        }
    }

    return (
        <Container>
            <h2>カテゴリーの追加</h2>
            <Form onSubmit={handleSubmit}>
                <Form.Group controlId="name">
                    <Form.Label>カテゴリー名</Form.Label>
                    <Form.Control type="text" placeholder="カテゴリー名を入力" value={name} onChange={e => setName(e.target.value)} />
                </Form.Group>

                <Button variant="primary" type="submit">
                    追加
                </Button>
            </Form>
        </Container>
    );
}

export default AddCategory;
