import React, { ReactNode } from 'react';

interface TailwindButtonProps {
    children: ReactNode;
    fileContent: string; // Add a prop for the file content
    fileName: string;   // Add a prop for the file name
}

function TailwindButton({ children, fileContent, fileName }: TailwindButtonProps) {
    const handleButtonClick = () => {
        // Create a Blob from the fileContent string
        const blob = new Blob([fileContent], { type: 'text/plain' });

        // Create a URL for the Blob
        const blobUrl = window.URL.createObjectURL(blob);

        // Create a hidden anchor element
        const anchor = document.createElement('a');
        anchor.href = blobUrl;
        anchor.download = fileName; // Specify the file name
        anchor.style.display = 'none';

        // Append the anchor element to the document
        document.body.appendChild(anchor);

        // Trigger a click event on the anchor to initiate the download
        anchor.click();

        // Remove the anchor and revoke the Blob URL
        document.body.removeChild(anchor);
        window.URL.revokeObjectURL(blobUrl);
    };

    return (
        <button
            onClick={handleButtonClick}
            className="block w-100 text-white hover:text-white bg-[#00000020] p-3"
        >
            {children}
        </button>
    );
}

export default TailwindButton;
