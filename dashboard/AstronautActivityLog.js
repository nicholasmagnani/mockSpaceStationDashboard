import { useState } from 'react';

const AstronautActivityLog = () => {
  const [activities, setActivities] = useState([]);
  const [activity, setActivity] = useState('');

  const addActivity = () => {
    setActivities([...activities, { text: activity, timestamp: new Date().toLocaleString() }]);
    setActivity('');
  };

  return (
    <div>
      <h2>Astronaut Activity Log</h2>
      <input
        type="text"
        value={activity}
        onChange={(e) => setActivity(e.target.value)}
      />
      <button onClick={addActivity}>Add Activity</button>
      <ul>
        {activities.map((activity, index) => (
          <li key={index}>
            {activity.text} - {activity.timestamp}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AstronautActivityLog;
