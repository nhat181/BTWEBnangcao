import React, { useState } from 'react';
import UserInfo from './UserInfo';
function UserInput() {
    const [name, setName] = useState ('');
    const [age, setAge] = useState('');
    // Hàm cập nhật state khi người dùng nhập tên
    const handleNameChange = (event) => {
    setName(event.target.value);
    };
    // Hàm cập nhật state khi người dùng nhập tuổi
    const handleAgeChange = (event) => {
    setAge(event.target.value);
    };
    return (
    <div>
    <input
    type="text"
    placeholder="Enter your name"
    value={name}
    onChange={handleNameChange}
    />
    <input
    type="text"
    placeholder="Enter your age"
    value={age}
    onChange={handleAgeChange}
    />
    <UserInfo name={name} age={age} />
</div>
);
}
export default UserInput;