import React from 'react';

interface NodeCardProps {
  title: string;
  children: React.ReactNode;
}

export const NodeCard: React.FC<NodeCardProps> = ({ title, children }) => {
  return (
    <div className="border-2 border-black rounded-lg p-4 w-[300px]">
      <h3 className="text-xl font-bold mb-4">{title}</h3>
      {children}
    </div>
  );
}