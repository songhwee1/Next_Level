import {
    HomeIcon,
    SearchIcon,
    UserIcon,
    CubeIcon,
    MailIcon
} from "@heroicons/react/outline"
import HeaderItem from "./HeaderItem"

function Header() {
    return (
        <header className="flex flex-col sm:flex-row m-5 justify-between items-center">
            <div className="flex cursor-pointer transform hover:scale-105">
                <CubeIcon className="h-20" />
                <p className="text-7xl font-extrabold" >HINT</p>
            </div>
            <div className="flex flex-grow justify-evenly max-w-sm">
                <HeaderItem title='HOME' Icon={HomeIcon} />
                <HeaderItem title='MAIL' Icon={MailIcon} />
                <HeaderItem title='SEARCH' Icon={SearchIcon} />
                <HeaderItem title='ACCOUNT' Icon={UserIcon} />
            </div>
        </header>
    )
}

export default Header