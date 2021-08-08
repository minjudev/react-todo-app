import React from 'react';
import {MdCheckBox, MdCheckBoxOutlineBlank} from 'react-icons/md';

const TodoItem = ({todo}) => {
    const {id, text, checked} = todo; // 객체 구조 분해
    return <div className="TodoItem">
        <div className={`content ${checked ? 'checked' : ''}`}>
            {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
            <div>{text}</div>
        </div>
    </div>;
}

export default TodoItem;