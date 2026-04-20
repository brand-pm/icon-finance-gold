import { Studio } from "sanity";
import { sanityConfig } from "@/sanity/config";

const StudioPage = () => {
  return (
    <div style={{ position: "fixed", inset: 0, background: "#fff", zIndex: 50 }}>
      <Studio config={sanityConfig} />
    </div>
  );
};

export default StudioPage;
