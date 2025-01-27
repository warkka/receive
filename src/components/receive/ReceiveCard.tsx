import React from 'react';
import NetworkSelector from './NetworkSelector';
import ActionButtons from './ActionButtons';

const ReceiveCard: React.FC = () => {
  const handleShare = () => {
    // Implement share functionality
  };

  const handleCopy = () => {
    // Implement copy functionality
  };

  return (
    <div className="bg-[rgba(245,245,247,1)] flex max-w-[480px] w-full flex-col overflow-hidden items-stretch mx-auto pt-[63px] pb-2 px-5 font-sans">
      <header className="flex items-center gap-[40px_100px] text-xl text-[rgba(28,28,28,1)] font-semibold whitespace-nowrap justify-between">
        <div className="self-stretch my-auto">Receive</div>
        <div className="self-stretch flex w-8 shrink-0 h-8 my-auto" />
      </header>

      <main className="flex flex-col items-center mt-[88px]">
        <div className="w-[278px] max-w-full">
          <div className="bg-[rgba(194,0,0,1)] z-10 flex flex-col items-center justify-center aspect-[1] px-7 rounded-[45px] border-[rgba(38,237,28,1)] border-solid border-[3px]">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/a5199a90d562fdf9ba9188a43638f518a9b498b311c41590c76eaf20a8ce8f59?placeholderIfAbsent=true"
              className="aspect-[0.98] object-contain w-[49px] mb-[-23px]"
              alt="Receive QR code"
            />
          </div>
        </div>

        <div className="w-[278px] max-w-full flex flex-col items-stretch font-semibold text-center mt-8">
          <div className="text-[rgba(17,17,17,1)] text-xl h-[46px] flex items-center justify-center">
            0xd208...452A
          </div>
          <div className="text-[rgba(28,28,28,1)] text-lg mt-2">
            <span className="font-normal">0xd208</span>
            <span className="font-normal text-[rgba(143,143,143,1)]">
              794A04AF9C278EEb73E5331E63377379
            </span>
            <span className="font-normal">452A</span>
          </div>
        </div>
      </main>

      <div className="mt-[75px]">
        <NetworkSelector />
      </div>

      <ActionButtons onShare={handleShare} onCopy={handleCopy} />

      <div className="bg-black self-center flex w-[134px] shrink-0 h-[5px] mt-[37px] rounded-[100px]" />
    </div>
  );
};

export default ReceiveCard;