// E:\programming\Project\ds_blog\frontend\src\components\RichTextEditor.js

import React, { useRef, useEffect } from 'react';
import Quill from 'quill';
import 'quill/dist/quill.snow.css';  // for snow theme

const RichTextEditor = ({ content, setContent }) => {
    const editorRef = useRef(null);
    let quillInstance = null;

    useEffect(() => {
        quillInstance = new Quill(editorRef.current, {
            theme: 'snow'
        });

        quillInstance.on('text-change', () => {
            setContent(quillInstance.root.innerHTML);
        });
    }, []);

    return (
        <div ref={editorRef}></div>
    );
};

export default RichTextEditor;
