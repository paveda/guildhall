import React from 'react'
import { useTranslation } from 'react-i18next'

export function App() {
  const { t } = useTranslation()

  return <div>{t('app.hello')}</div>
}
