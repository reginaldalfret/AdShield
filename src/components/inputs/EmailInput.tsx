import React from 'react';

    interface EmailInputProps {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const EmailInput: React.FC<EmailInputProps> = React.memo(({ value, onChange }) => (
      <input
        type="email"
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter email here..."
      />
    ));

    export default EmailInput;
