import React from 'react';
import { useSelector } from 'react-redux';

import Initial from '../routes';

export default function _App_() {
  const signed = useSelector(state => state.user.signed);

  return <Initial isSigned={signed} />;
}