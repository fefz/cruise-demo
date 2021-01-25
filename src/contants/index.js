import { topBarStyle, leftMenuStyle } from "./style";
import { mockData } from "./mock";
import cent_os from "../images/ASSETS/os icons/cent_os.png";
import debian from "../images/ASSETS/os icons/debian.png";
import suse from "../images/ASSETS/os icons/suse.png";
import ubuntu from "../images/ASSETS/os icons/ubuntu.png";
import windows from "../images/ASSETS/os icons/windows.png";

const AllowOpenModelClass = ['add-tool', 'cruise-model'];
const menu = [
    {
        "id": 0,
        "lable": "DASHBOARD",
        "icon": "icon-dashboard",
        "link": "dashborad"
    },
    {
        "id": 1,
        "lable": "AGENT",
        "icon": "icon-sitemap"
    },
    {
        "id": 2,
        "lable": "MY CRUISE",
        "icon": "icon-boat"
    },
    {
        "id": 3,
        "lable": "HELP",
        "icon": "icon-life-bouy"
    }
];

const iconList = {
    centos: cent_os,
    debian: debian,
    suse: suse,
    ubuntu: ubuntu,
    windows: windows
}
export { topBarStyle, leftMenuStyle, mockData, menu, AllowOpenModelClass, iconList };