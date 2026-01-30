import Separator from "../../../components/ui/separator";
import { TypographyH1 } from "../../../components/ui/typographyH1";
import { HEADER_LOGO } from "../../../lib/constants";
import FooterOptions from "./FooterOptions";

export default function Footer() {
  return (
    <div className="flex flex-col px-8 py-4 bg-[#ff5200]">
      <div className="flex justify-between px-40 py-8">
        <div className="rounded-xl pr-2 h-16">
          <img src={HEADER_LOGO} className="h-14 w-38" />
        </div>
        <FooterOptions />
      </div>
      <Separator />
      <div className="p-4">
        <TypographyH1
          text="For better experience, download the Swiggy app now"
          h="1.5"
          color="black"
        />
      </div>
    </div>
  );
}
