import React from 'react';

export default function SignOutButton({ onClick }: { onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      className="py-2 px-4 hover:bg-light-blue hover:text-black text-white h-10 bg-dark-blue rounded-md"
    >
      Sign Out
    </button>
  );
}
