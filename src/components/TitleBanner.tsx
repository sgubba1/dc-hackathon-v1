interface TitleBannerProps {
  title: string;
}

const TitleBanner = ({ title }: TitleBannerProps) => {
  return (
    <div className="relative inline-block">
      {/* Tape pieces on corners */}
      <div className="absolute -left-3 -top-2 w-8 h-4 tape-effect rotate-[-15deg] opacity-80" />
      <div className="absolute -right-3 -top-2 w-8 h-4 tape-effect rotate-[15deg] opacity-80" />
      
      {/* Main banner */}
      <div className="tape-effect px-8 py-3 transform rotate-[-2deg]">
        <h1 className="font-typewriter text-3xl md:text-4xl tracking-wider text-ink uppercase">
          {title}
        </h1>
      </div>
    </div>
  );
};

export default TitleBanner;
