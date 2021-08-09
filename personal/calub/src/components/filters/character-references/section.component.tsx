import React from 'react';
import { useSnapshot } from 'valtio';

import { characterReferencesFiltersStore } from '../../../store/filters/character-references';
import ToggleComponent from '../../ui/toggle/toggle.component';

const CharacterReferencesFiltersSection: React.FC = (_props) => {
  const characterReferencesFilters = useSnapshot(characterReferencesFiltersStore);

  return (
    <>
      <ToggleComponent
        text="Show Section"
        checked={characterReferencesFilters.showSection}
        toggle={characterReferencesFilters.toggleSection}
      />
    </>
  );
};

export default CharacterReferencesFiltersSection;
