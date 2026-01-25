import Separator from "@/Components/ui/separator"
import { TypographyH1 } from "@/Components/ui/typographyH1"
import { BLINKIT_LOGO_URL } from "../lib/constants"

export default function Footer() {
    return (
        <div className="flex flex-col px-8 py-4 bg-amber-300">
            <div className="flex justify-between px-40 py-8">
                <div className="rounded-xl pr-2 h-16">
                    <img src={BLINKIT_LOGO_URL} className="h-16 w-24" />
                </div>
                <ul>
                    <li className="font-bold">Company</li>
                    <li>About Us</li>
                    <li>Blinkit Corporate</li>
                    <li>Careers</li>
                    <li>Team</li>
                    <li>Blinkit One</li>
                    <li>Blinkit Instamart</li>
                    <li>Blinkit Dineout</li>
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
                    <li className="font-bold">Life at Blinkit</li>
                    <li>Explore with Swiggy</li>
                    <li>Blinkit News</li>
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
                <TypographyH1 text="For better experience, download the Blinkit app now" h="1.5" color="black" />
            </div>
        </div>
    )
}