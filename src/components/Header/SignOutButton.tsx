import React from 'react';
import { useTranslation } from 'react-i18next';

export default function SignOutButton({ onClick }: { onClick: () => void }) {
  const { t } = useTranslation();
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md"
    >
      {t('header.signOutButton')}
    </button>
  );
}
