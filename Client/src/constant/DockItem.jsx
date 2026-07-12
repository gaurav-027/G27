import { SendIcon } from "../components/ui/send";
import { InstagramIcon } from "../components/ui/instagram";
import { GithubIcon } from "../components/ui/github";
import { LinkedinIcon } from "../components/ui/linkedin";
import { MailCheckIcon } from "../components/ui/mail-check";
import { PhoneIcon } from "../components/ui/phone";
import { FileTextIcon } from "../components/ui/file-text";

const dockItems = [
    {
        name : "WhatsApp",
        icon : <SendIcon/>,
        goto : "https://wa.me/918677830380?text=Hello%20Gaurav%2C%20This%20is%20<Your%20Name>%20here..!"
    },
    {
        name : "Instagram",
        icon : <InstagramIcon/>,
        goto : "https://www.instagram.com/gaurav__27.4/"
    },
    {
        name : "Github",
        icon : <GithubIcon/>,
        goto : "https://github.com/gaurav-027"
    },
    {
        name : "LinkedIn",
        icon : <LinkedinIcon/>,
        goto : "https://www.linkedin.com/in/gaurav-kumar-810857320/"
    },
    {
        name : "Mail",
        icon : <MailCheckIcon/>,
        goto : "mailto:kr.gauravbca7@gmail.com"
    },
    {
        name : "Phone",
        icon : <PhoneIcon/>,
        goto : "tel:+918677830380"
    },
    {
        name : "Resume",
        icon : <FileTextIcon/>,
        goto : "https://drive.google.com/file/d/1jZdaL8lzrkmRxTnlynklYevmvOt4NAb8/view?usp=sharing"
    },

]

export default dockItems;