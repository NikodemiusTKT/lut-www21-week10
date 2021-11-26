import React, { useState } from 'react';
import MyHOC from './MyHOC';

import { useTranslation, withTranslation, Trans } from 'react-i18next';
const Component = ({ name }) => {
  return <div>Hello {name}!</div>;
};
const wrappedWithName = MyHOC(Component, { name: 'Kalle' });
export default function MyContainer() {
  const { t, i18n } = useTranslation();
  return (
    <div className="container">
      {t('index')}
      {wrappedWithName}
    </div>
  );
}
