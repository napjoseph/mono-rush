import { faEnvelope, faBuilding } from '@fortawesome/free-regular-svg-icons';
import {
  faMobileAlt,
  faGlobeAsia,
  faMapMarkerAlt,
  faBriefcase,
  faCertificate
} from '@fortawesome/free-solid-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// This ensures that the icon CSS is loaded immediately before attempting to render icons.
// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-421580721
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// @fortawesome/free-regular-svg-icons
library.add(faEnvelope, faBuilding);

// @fortawesome/free-solid-svg-icons
library.add(faMobileAlt, faGlobeAsia, faMapMarkerAlt, faBriefcase, faCertificate);
