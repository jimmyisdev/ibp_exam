import { FaTiktok, FaDiscord, FaFacebookF, FaXTwitter, FaInstagram, FaYoutube } from "react-icons/fa6";

export default function SNS_sect() {
    return (
        <ul className='flex flex-row w-full justify-around mt-4'>
            <li>
                <a href='https://www.tiktok.com/zh-Hant-TW/'><FaTiktok size={25} /></a>
            </li>
            <li>
                <a href='https://discord.com/'><FaDiscord size={25} /></a>
            </li>
            <li>
                <a href='https://www.facebook.com/'><FaFacebookF size={25} /></a>
            </li>
            <li>
                <a href="https://twitter.com/home"><FaXTwitter size={25} /></a>
            </li>
            <li>
                <a href="https://www.instagram.com/"><FaInstagram size={25} /></a>
            </li>
            <li>
                <a href="https://www.youtube.com/"><FaYoutube size={25} /></a>
            </li>
        </ul>)
}
