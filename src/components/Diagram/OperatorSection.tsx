import React from 'react';

interface OperatorSectionProps {
  title: string;
  children: React.ReactNode;
}

export const OperatorSection: React.FC<OperatorSectionProps> = ({ title, children }) => {
  return (
    <div className="border border-dashed border-gray-400 rounded p-3 mb-3">
      <div className="flex justify-between items-center mb-2">
        <h4 className="font-semibold">{title}</h4>
        <code className="bg-gray-100 px-2 rounded">&lt;/&gt;</code>
      </div>
      {children}
    </div>
  );
}