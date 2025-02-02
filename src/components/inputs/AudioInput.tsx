import React from 'react';

    interface AudioInputProps {
      onAudioUpload: (e: React.ChangeEvent<HTMLInputElement>) => void;
    }

    const AudioInput: React.FC<AudioInputProps> = ({ onAudioUpload }) => (
      <div className="flex flex-col items-center justify-center border-2 border-dashed border-gray-600 rounded-md p-4 mb-4">
        <label htmlFor="audio-upload" className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-md cursor-pointer">
          Upload Audio File
        </label>
        <input
          type="file"
          id="audio-upload"
          accept="audio/*"
          onChange={onAudioUpload}
          className="hidden"
        />
      </div>
    );

    export default AudioInput;
