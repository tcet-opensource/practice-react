import "typeface-inter";
import { partners1 } from "./data";

function Partner() {
  return (
    <section className="font-inter">
      <div>
        <img
          className="absolute left-0 -top-14"
          alt="Middle left png"
          src="/partnerSection/middle-left-2.png.svg"
        />
        <div className="hidden pr-8 md:block">
          <img
            className="absolute top-80 left-20"
            alt="Solana png"
            src="/partnerSection/solana.png.svg"
          />
          <img
            className="absolute top-1/4 left-32"
            alt="Near png"
            src="/partnerSection/near.png.svg"
          />
          <img
            className="absolute top-64 left-52"
            alt="Mena png"
            src="/partnerSection/mena.png.svg"
          />
        </div>
      </div>

      <div className="flex flex-col items-center justify-between gap-x-16 lg:flex-row lg:mt-20 sm:p-20 ">
        <h1 className="z-10 px-10 my-10 text-4xl font-bold text-white basis-1/3 max-lg:text-center md:text-6xl sm:font-normal lg:mt-28 sm:px-0">
          Our Partners & Friends
        </h1>
        <div className="flex flex-col gap-8">
          <div className="relative flex-col justify-center hidden mt-8 border border-solid rounded-md lg:flex w-52 h-28 lg:w-40 lg:h-20 lg:p-10 xl:w-48 xl:h-28 gap-y-4 PartnersBG p-14 opacity-5 ">
            <img
              className="w-24 h-24 "
              alt="Bithumb"
              src="/partnerSection/bithumb@2x.png.svg"
            />
            <h3 className="text-xs text-center text-custom-gray whitespace-nowrap">
              Bithumb
            </h3>
          </div>
          <div className="flex flex-col gap-8 sm:flex-row max-lg:mt-10">
            <div className="grid grid-cols-2 even:mt-20 gap-x-8 gap-y-4">
              {partners1.map((partner, index) => (
                <div
                  key={index}
                  className="relative flex flex-col justify-center w-48 h-48 border border-solid rounded-md lg:w-40 lg:h-40 xl:w-48 xl:h-48  gap-y-4 PartnersBG p-14 lg:p-10 even:mt-6"
                >
                  <img
                    className="w-24 h-24 "
                    alt={`${partner.name} png`}
                    src={`${partner.image}.svg`}
                  />
                  <h3 className="text-xs text-center text-custom-gray whitespace-nowrap">
                    {partner.name}
                  </h3>
                </div>
              ))}
            </div>
          </div>
          <div className="relative flex-col self-end justify-center hidden mt-8 border border-solid rounded-md lg:flex w-52 h-28 lg:w-40 lg:h-20 lg:p-10 xl:w-48 xl:h-28 bottom-6 gap-y-4 PartnersBG p-14 opacity-5">
            <img
              className="w-24 h-24 "
              alt="Bithumb"
              src="/partnerSection/bitfinex@2x.png.svg"
            />
            <h3 className="text-xs text-center text-custom-gray whitespace-nowrap">
              Bitfinex
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Partner;
