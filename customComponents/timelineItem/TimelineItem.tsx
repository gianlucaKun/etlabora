import React from 'react';
import { Location } from '../../model/Types';

interface TimelineItemProps {
  location: Location;
  onClick: () => void;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ location, onClick }) => {
  return (
    <div className="timeline-item" onClick={onClick}>
      <h3>{location.name}</h3>
      <p>{location.description}</p>
    </div>
  );
};

export default TimelineItem;
