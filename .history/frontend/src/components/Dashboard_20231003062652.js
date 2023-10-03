import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';

const Dashboard = () => {
    return (
        <Container>
            <h2>管理者ダッシュボード</h2>
            <Row className="mt-5">
                <Col md={4}>
                    <Button href="/create-article" variant="primary" size="lg" block>記事の投稿</Button>
                    <Button href="/articles" variant="primary" size="lg" block>投稿記事一覧</Button>
                </Col>
                <Col md={4}>
                    <Button href="/categories" variant="primary" size="lg" block>カテゴリー一覧</Button>
                    <Button href="/add-category" variant="primary" size="lg" block>カテゴリーの追加</Button>
                </Col>
                <Col md={4}>
                    <Button href="/upload-ebook" variant="primary" size="lg" block>電子書籍アップロード</Button>
                    <Button href="/ebooks" variant="primary" size="lg" block>アップロード済み一覧</Button>
                </Col>
            </Row>
            <Row className="mt-5">
                <Col md={6}>
                    <Button href="/edit-profile" variant="secondary" size="lg" block>管理者情報の変更</Button>
                </Col>
                <Col md={6}>
                    <Button href="/logout" variant="danger" size="lg" block>ログアウト</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
