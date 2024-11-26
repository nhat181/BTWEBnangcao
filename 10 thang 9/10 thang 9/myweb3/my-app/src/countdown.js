import React, { useState, useEffect } from 'react';
function Countdown (props) {
const [timeLeft, setTimeLeft] = useState (props.startTime);
useEffect(() => {
if (timeLeft > 0) {
const timer = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
return () => clearTimeout(timer);
}
}, [timeLeft]);
return (
<div>
{timeLeft > 0 ? <p>Time left: {timeLeft} seconds</p> : <p>Time's up!</p>}
</div>
);
}
export default Countdown;