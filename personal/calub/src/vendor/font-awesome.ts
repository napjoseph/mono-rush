import { faBuilding, faCalendarAlt, faEnvelope } from '@fortawesome/free-regular-svg-icons';
import {
  faBars,
  faBriefcase,
  faCertificate,
  faGlobeAsia,
  faGraduationCap,
  faHeart,
  faLayerGroup,
  faMapMarkerAlt,
  faMobileAlt,
  faTimes,
  faPeopleCarry,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// This ensures that the icon CSS is loaded immediately before attempting to render icons.
// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-421580721
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// @fortawesome/free-regular-svg-icons
library.add(faBuilding, faCalendarAlt, faEnvelope);

// @fortawesome/free-solid-svg-icons
library.add(
  faBars,
  faBriefcase,
  faCertificate,
  faGlobeAsia,
  faGraduationCap,
  faHeart,
  faLayerGroup,
  faMapMarkerAlt,
  faMobileAlt,
  faTimes,
  faPeopleCarry,
  faUsers
);

// @fortawesome/free-brands-svg-icons
library.add(faGithub);
