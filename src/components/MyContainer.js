import React, { useState } from 'react';

import { useTranslation, withTranslation, Trans } from 'react-i18next';
export default function MyContainer() {
  const { t, i18n } = useTranslation();
  return <div className="container">{t('index')}</div>;
}
