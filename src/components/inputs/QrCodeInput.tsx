import React, { useState } from 'react';

    interface QrCodeInputProps {
      onQrCodeRead: (text: string) => void;
      imageSrc: string | null;
      onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const QrCodeInput: React.FC<QrCodeInputProps> = ({ onQrCodeRead, imageSrc, onImageUpload }) => {
      const handleQrCodeRead = () => {
        // Simulate QR code reading
        const simulatedQrCodeValue = prompt('Simulate QR Code Read. Enter the value:') || '';
        onQrCodeRead(simulatedQrCodeValue);
      };

      return (
        <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-md p-4 mb-4">
          {imageSrc ? (
            <img src={imageSrc} alt="Uploaded or Pasted" className="max-h-64 max-w-full mb-4 rounded-md" />
          ) : (
            <p className="text-gray-400 mb-4">No image selected</p>
          )}
          <label htmlFor="qr-code-upload" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
            Upload QR Code
          </label>
          <input
            type="file"
            id="qr-code-upload"
            accept="image/*"
            onChange={onImageUpload}
            className="hidden"
          />
        </div>
      );
    };

    export default QrCodeInput;
