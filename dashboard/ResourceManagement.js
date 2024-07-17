import { useState, useEffect } from 'react';

const ResourceManagement = () => {
  const [resources, setResources] = useState({
    oxygen: 100,
    water: 100,
    power: 100,
  });

  useEffect(() => {
    const interval = setInterval(() => {
      setResources((prevResources) => ({
        oxygen: prevResources.oxygen - Math.random() * 0.5,
        water: prevResources.water - Math.random() * 0.3,
        power: prevResources.power - Math.random() * 0.4,
      }));
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <h2>Resource Management</h2>
      <p>Oxygen: {resources.oxygen.toFixed(2)}%</p>
      <p>Water: {resources.water.toFixed(2)}%</p>
      <p>Power: {resources.power.toFixed(2)}%</p>
    </div>
  );
};

export default ResourceManagement;
