import React from 'react';

const TodoItem = ({todo}) => {
    const {text} = todo; // 객체 구조 분해
    return <div>{text}</div>;
}

export default TodoItem;