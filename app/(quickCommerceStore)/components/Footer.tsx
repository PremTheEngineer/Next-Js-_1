import Separator from "../../../components/ui/separator";
import { TypographyH1 } from "../../../components/ui/typographyH1";
import { HEADER_LOGO } from "../../../lib/constants";

export default function Footer() {
  return (
    <div className="flex flex-col px-8 py-4 bg-[#ff5200]">
      <div className="flex justify-between px-40 py-8">
        <div className="rounded-xl pr-2 h-16">
          <img src={HEADER_LOGO} className="h-14 w-38" />
        </div>
        <ul>
          <li className="font-bold">Company</li>
          <li>About Us</li>
          <li>Swiggy Corporate</li>
          <li>Careers</li>
          <li>Team</li>
          <li>Swiggy One</li>
          <li>Swiggy Instamart</li>
          <li>Swiggy Dineout</li>
          <li>Minis</li>
          <li>Pyng</li>
        </ul>
        <ul>
          <li className="font-bold">Contact us</li>
          <li>Help & Support</li>
          <li>Partner with us</li>
          <li>Ride with us</li>
        </ul>
        <ul>
          <li className="font-bold">Life at Swiggy</li>
          <li>Explore with Swiggy</li>
          <li>Swiggy News</li>
          <li>Snackables</li>
        </ul>
        <ul>
          <li className="font-bold">Available in</li>
          <li>Delhi</li>
          <li>Mumbai</li>
          <li>Pune</li>
          <li>Bangalore</li>
        </ul>
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
