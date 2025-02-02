import React from 'react';

    interface DocumentInputProps {
      onDocumentUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const DocumentInput: React.FC<DocumentInputProps> = React.memo(({ onDocumentUpload }) => (
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-md p-4 mb-4">
        <label htmlFor="document-upload" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
          Upload Document
        </label>
        <input
          type="file"
          id="document-upload"
          accept=".pdf,.doc,.docx,.txt,image/*"
          onChange={onDocumentUpload}
          className="hidden"
        />
      </div>
    ));

    export default DocumentInput;
