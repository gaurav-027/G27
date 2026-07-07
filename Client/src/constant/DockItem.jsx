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
        goto : ""
    },
    {
        name : "Instagram",
        icon : <InstagramIcon/>,
        goto : ""
    },
    {
        name : "Github",
        icon : <GithubIcon/>,
        goto : ""
    },
    {
        name : "LinkedIn",
        icon : <LinkedinIcon/>,
        goto : ""
    },
    {
        name : "Mail",
        icon : <MailCheckIcon/>,
        goto : ""
    },
    {
        name : "Phone",
        icon : <PhoneIcon/>,
        goto : ""
    },
    {
        name : "Resume",
        icon : <FileTextIcon/>,
        goto : ""
    },

]

export default dockItems;