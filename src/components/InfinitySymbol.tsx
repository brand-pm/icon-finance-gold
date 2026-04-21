import infinityImg from "../assets/infinity-symbol.png";

const InfinitySymbol = () => (
  <div className="aspect-square bg-[#E8E4DE] w-full flex items-center justify-center relative overflow-hidden">
    <img
      src={infinityImg}
      alt="Infinity symbol - wealth preservation across generations"
      loading="lazy"
      width={1024}
      height={1024}
      className="w-full h-full object-cover"
    />
  </div>
);

export default InfinitySymbol;
