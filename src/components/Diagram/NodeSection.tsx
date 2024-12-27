import React from 'react';

interface NodeSectionProps {
  children: React.ReactNode;
  className?: string;
}

export const NodeSection: React.FC<NodeSectionProps> = ({ children, className = '' }) => {
  return (
    <div className={`border border-dashed border-gray-400 rounded p-3 mb-3 ${className}`}>
      {children}
    </div>
  );
}