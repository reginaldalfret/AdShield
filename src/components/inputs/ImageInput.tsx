import React from 'react';

    interface ImageInputProps {
      imageSrc: string | null;
      onImageUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const ImageInput: React.FC<ImageInputProps> = React.memo(({ imageSrc, onImageUpload }) => (
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-md p-4 mb-4">
        {imageSrc ? (
          <img src={imageSrc} alt="Uploaded or Pasted" className="max-h-64 max-w-full mb-4 rounded-md" />
        ) : (
          <p className="text-gray-400">No image selected</p>
        )}
        <label htmlFor="image-upload" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
          Upload Image
        </label>
        <input
          type="file"
          id="image-upload"
          accept="image/*"
          onChange={onImageUpload}
          className="hidden"
        />
      </div>
    ));

    export default ImageInput;
