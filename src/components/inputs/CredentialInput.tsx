import React from 'react';

    interface CredentialInputProps {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const CredentialInput: React.FC<CredentialInputProps> = React.memo(({ value, onChange }) => (
      <input
        type="text"
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter credential here..."
      />
    ));

    export default CredentialInput;
