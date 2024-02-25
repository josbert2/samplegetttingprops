export function TooltipCustomAnimation() {
  return (
    <>
      <button
        data-ripple-light="true"
        data-tooltip-target="tooltip-animation"
        className="select-none rounded-lg bg-gray-900 py-3 px-6 text-center align-middle font-sans text-xs font-bold uppercase text-white shadow-md shadow-gray-900/10 transition-all hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
      >
        {`Show Tooltip`}
      </button>
      <div
        data-tooltip="tooltip-animation"
        data-tooltip-mount="opacity-100 scale-100"
        data-tooltip-unmount="opacity-0 scale-0 pointer-events-none"
        data-tooltip-transition="transition-all duration-200 origin-bottom"
        className="absolute z-50 whitespace-normal break-words rounded-lg bg-black py-1.5 px-3 font-sans text-sm font-normal text-white focus:outline-none"
      >
        {`Material Tailwind`}
      </div>
    </>
  );
}
