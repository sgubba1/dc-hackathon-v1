import { useState } from "react";

interface NotepadProps {
  title: string;
  children: React.ReactNode;
}

const Notepad = ({ title, children }: NotepadProps) => {
  return (
    <div className="relative">
      {/* Spiral binding */}
      <div className="absolute -left-4 top-0 bottom-0 w-4 spiral-binding rounded-l" />
      
      {/* Notepad paper */}
      <div className="paper-texture notepad-shadow rounded-sm p-6 pl-10 min-w-[300px] max-w-md">
        {/* Red margin line */}
        <div className="absolute left-12 top-0 bottom-0 w-[2px] bg-accent/40" />
        
        {/* Title */}
        <h2 className="font-typewriter text-xl md:text-2xl text-ink uppercase tracking-wide mb-6 border-b-2 border-ink/20 pb-2">
          {title}
        </h2>
        
        {/* Content */}
        <div className="space-y-4">
          {children}
        </div>
      </div>
    </div>
  );
};

export default Notepad;
