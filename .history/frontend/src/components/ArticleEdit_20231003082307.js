// E:\programming\Project\ds_blog\frontend\src\components\ArticleEdit.js

import React, { useState, useEffect } from 'react';
import RichTextEditor from './RichTextEditor';
import { Button, Form, Container } from 'react-bootstrap';

const ArticleEdit = (props) => {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [image, setImage] = useState(null);
    const [categoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const token = localStorage.getItem('token');
    const articleId = props.match.params.id;

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append('title', title);
        formData.append('content', content);
        if (image) formData.append('image', image);
        formData.append('categoryId', categoryId);

        try {
            const response = await fetch(`/articles/${articleId}`, {
                method: 'PUT',
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
        const fetchArticleData = async () => {
            try {
                const response = await fetch(`/articles/${articleId}`, {
                    headers: {
                        'Authorization': `Bearer ${token}`
                    }
                });
                const data = await response.json();
                setTitle(data.title);
                setContent(data.content);
                setCategoryId(data.categoryId);
                setImage(data.image);  // 画像の情報（URLやパス）を設定
            } catch (error) {
                console.error("記事の取得に失敗:", error);
            }
        }
        上記の変更により、取得した記事のデータから画像の情報（URLやパス）をsetImage関数を使用して状態に設定します。ただし、これによって画像自体が表示されるわけではありません。画像を表示するには、適切な場所で<img>タグを使用して、画像のURLやパスをソースとして設定する必要があります。
        
        注意: 画像のアップロードや表示に関する処理は、アプリケーションの全体的な構造や要件によって変わる可能性があります。上記の提案は一般的な方法の一つですが、実際の要件や実装の詳細に応じて調整する必要があるかもしれません。
        
        
        
        
        
        
        fetchArticleData();

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
    }, [token, articleId]);

    return (
        <Container>
            <h2>記事の編集</h2>
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
                    更新
                </Button>
            </Form>
        </Container>
    );
}

export default ArticleEdit;
