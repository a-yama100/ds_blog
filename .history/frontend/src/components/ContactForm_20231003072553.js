// E:\programming\Project\ds_blog\frontend\src\components\ContactForm.js

import React, { useState } from 'react';
import axios from 'axios';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const token = localStorage.getItem('token'); // トークンを取得

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/backend/contact', formData, {
                headers: {
                    'Authorization': `Bearer ${token}` // トークンをヘッダーに添付
                }
            });
            alert('問い合わせが送信されました。');
            setFormData({
                name: '',
                email: '',
                message: ''
            });
        } catch (error) {
            alert('問い合わせの送信に失敗しました。');
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="お名前" required />
            <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="メールアドレス" required />
            <textarea name="message" value={formData.message} onChange={handleChange} placeholder="メッセージ" required></textarea>
            <button type="submit">送信</button>
        </form>
    );
};

export default ContactForm;
