import React from 'react';

interface NetworkSelectorProps {
  selectedNetwork?: string;
  onNetworkSelect?: (network: string) => void;
}

const NetworkSelector: React.FC<NetworkSelectorProps> = ({
  selectedNetwork = 'Ethereum',
  onNetworkSelect = () => {},
}) => {
  return (
    <div className="w-full text-[rgba(28,28,28,1)] font-medium">
      <div className="self-stretch flex-1 shrink w-full gap-[-78px] text-xl">
        Choose network
      </div>
      <div className="bg-white flex min-h-16 w-full items-center text-lg whitespace-nowrap justify-between mt-2 px-2.5 py-2 rounded-[20px]">
        <div className="self-stretch flex min-w-60 items-center gap-4 flex-1 shrink basis-[0%] my-auto">
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/b5b214468be0436aa9704971aeb73e67/a6591b3f3167b4cb7ccfcd4ebf5a3cfaa7d7ea02c74f5111e3d3481e2bcd58d9?placeholderIfAbsent=true"
            className="aspect-[1] object-contain w-12 self-stretch shrink-0 my-auto"
            alt="Network icon"
          />
          <div className="self-stretch min-w-60 flex-1 shrink my-auto">
            {selectedNetwork}
          </div>
        </div>
        <div className="self-stretch flex w-7 shrink-0 h-7 my-auto" />
      </div>
    </div>
  );
};

export default NetworkSelector;