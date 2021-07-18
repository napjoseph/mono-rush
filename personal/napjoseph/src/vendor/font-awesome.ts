import { faGithub, faKeybase } from '@fortawesome/free-brands-svg-icons';
import { library } from '@fortawesome/fontawesome-svg-core';

// This ensures that the icon CSS is loaded immediately before attempting to render icons.
// https://github.com/FortAwesome/react-fontawesome/issues/134#issuecomment-421580721
import '@fortawesome/fontawesome-svg-core/styles.css';
import { config } from '@fortawesome/fontawesome-svg-core';
config.autoAddCss = false;

// @fortawesome/free-regular-svg-icons

// @fortawesome/free-solid-svg-icons

// @fortawesome/free-brands-svg-icons
library.add(faGithub, faKeybase);
