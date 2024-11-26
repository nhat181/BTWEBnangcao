import React from 'react';
// Component con nhận props từ component cha
function UserInfo (props) {
return (
<div>
<p>Name: {props.name}</p>
<p>Age: {props.age}</p>
</div>
);
}
export default UserInfo;