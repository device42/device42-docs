import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import styles from './icon.module.css';

library.add(fab, fas, far);

export default function Icon({ fa, sz="3x", cn = styles.iconStyle }) {
  return (
    <FontAwesomeIcon className={cn} icon={fa} size={sz}/>
  )
}
