import { useState } from "react";

interface CaseInputProps {
  label: string;
  placeholder: string;
  value: string;
  onChange: (value: string) => void;
}

const CaseInput = ({ label, placeholder, value, onChange }: CaseInputProps) => {
  return (
    <div className="space-y-2">
      <label className="font-typewriter text-sm text-ink/80 uppercase tracking-wide">
        {label}
      </label>
      <input
        type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className="w-full bg-transparent border-b-2 border-dashed border-ink/30 
                   font-typewriter text-ink placeholder:text-ink/40
                   px-1 py-2 focus:outline-none focus:border-ink/60
                   transition-colors duration-200"
      />
    </div>
  );
};

export default CaseInput;
