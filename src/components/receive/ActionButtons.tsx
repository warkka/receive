import React from 'react';

interface ActionButtonsProps {
  onShare?: () => void;
  onCopy?: () => void;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({
  onShare = () => {},
  onCopy = () => {},
}) => {
  return (
    <div className="flex min-h-14 w-full items-stretch gap-2 text-xl text-[rgba(28,28,28,1)] font-medium whitespace-nowrap text-center leading-[1.2] mt-4">
      <button
        onClick={onShare}
        className="bg-white flex items-center gap-2 justify-center h-full flex-1 shrink basis-[0%] py-2 rounded-3xl"
      >
        <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
        <div className="self-stretch my-auto">Share</div>
      </button>
      <button
        onClick={onCopy}
        className="bg-white flex items-center gap-2 justify-center h-full flex-1 shrink basis-[0%] py-2 rounded-3xl"
      >
        <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
        <div className="self-stretch my-auto">Copy</div>
      </button>
    </div>
  );
};

export default ActionButtons;