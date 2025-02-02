import React from 'react';

    interface TextInputProps {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLTextAreaElement>) => void;
    }

    const TextInput: React.FC<TextInputProps> = React.memo(({ value, onChange }) => (
      <textarea
        value={value}
        onChange={onChange}
        className="w-full h-32 bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter text here..."
      />
    ));

    export default TextInput;
