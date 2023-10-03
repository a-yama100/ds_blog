// E:\programming\Project\ds_blog\frontend\src\components\RichTextEditor.js

import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';  // for snow theme

const RichTextEditor = ({ content, setContent }) => {
    const editorRef = useRef(null);
    const quillInstance = useRef(null);  // useRefを使用してquillInstanceを定義

    useEffect(() => {
        quillInstance.current = new Quill(editorRef.current, {
            theme: 'snow'
        });

        quillInstance.current.on('text-change', () => {
            setContent(quillInstance.current.root.innerHTML);
        });
    }, [setContent]);

    return (
        <div ref={editorRef}></div>
    );
};

export default RichTextEditor;
