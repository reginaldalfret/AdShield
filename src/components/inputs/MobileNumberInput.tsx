import React from 'react';

    interface MobileNumberInputProps {
      value: string;
      onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const MobileNumberInput: React.FC<MobileNumberInputProps> = React.memo(({ value, onChange }) => (
      <input
        type="tel"
        value={value}
        onChange={onChange}
        className="w-full bg-gray-800 text-white p-2 rounded-md mb-4 focus:outline-none focus:ring-2 focus:ring-blue-500"
        placeholder="Enter mobile number here..."
      />
    ));

    export default MobileNumberInput;
