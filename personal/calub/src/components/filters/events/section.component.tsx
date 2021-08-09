import React from 'react';
import { useSnapshot } from 'valtio';

import { eventsFiltersStore } from '../../../store/filters/events';
import ToggleComponent from '../../ui/toggle/toggle.component';

const EventsFiltersSection: React.FC = (_props) => {
  const eventsFilters = useSnapshot(eventsFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={eventsFilters.showSection}
        toggle={eventsFilters.toggleSection}
      />
    </>
  );
};

export default EventsFiltersSection;
