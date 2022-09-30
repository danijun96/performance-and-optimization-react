import React, { memo, useCallback, Profiler } from 'react';
import { v4 as uuidv4 } from 'uuid';

function onRenderCallback(
    id,
    phase,
    actualDuration,
    baseDuration,
    startTime,
    commitTime,
    interactions,
) {
    console.log({
        id,
        phase,
        actualDuration,
        baseDuration,
        startTime,
        commitTime,
        interactions,
    })
}

const CallBack = () => {
    console.log('Render: App');
    const [users, setUsers] = React.useState([
        { id: 'a', name: 'Bob' },
        { id: 'b', name: 'Gosho' },
    ]);

    const [text, setText] = React.useState('');

    const handleText = (event) => {
        setText(event.target.value);
    };

    const handleAddUser = () => {
        setUsers(users.concat({ id: uuidv4(), name: text }));
    };

    const handleRemove = useCallback((id) => {
        setUsers(users.filter((user) => user.id !== id));
    }, [users]);

    return (
        <div style={{ display: 'block', textAlign: 'center', marginTop: '50px' }}>
                <input type="text" value={text} onChange={handleText} />
                <button type="button" onClick={handleAddUser}>
                    Add User
                </button>

                <List list={users} handleRemove={handleRemove} />
        </div>
    );
};

const List = memo(({ list, handleRemove }) => {
    console.log('Render: List');
    return (
        <div>
            {list.map((item) => (
                <ListItem key={item.id} item={item} onRemove={handleRemove} />
            ))}
        </div>
    );
});

const ListItem = ({ item, onRemove }) => {
    console.log('Render: ListItem');
    return (
        <li>
            {item.name}
            <button type="button" onClick={() => onRemove(item.id)}>
                Remove
            </button>
        </li>
    );
};

export default CallBack;
