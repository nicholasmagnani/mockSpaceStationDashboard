import { useState } from 'react';

const MaintenanceTracker = () => {
  const [components, setComponents] = useState([
    { name: 'Life Support', status: 'Good' },
    { name: 'Communications', status: 'Good' },
    { name: 'Power Generator', status: 'Good' },
  ]);

  const scheduleRepair = (index) => {
    const newComponents = components.slice();
    newComponents[index].status = 'Repairing';
    setComponents(newComponents);

    setTimeout(() => {
      newComponents[index].status = 'Good';
      setComponents(newComponents);
    }, 5000);
  };

  return (
    <div>
      <h2>Maintenance Tracker</h2>
      <ul>
        {components.map((component, index) => (
          <li key={index}>
            {component.name} - {component.status}{' '}
            {component.status !== 'Good' ? (
              <button onClick={() => scheduleRepair(index)}>Schedule Repair</button>
            ) : null}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MaintenanceTracker;
