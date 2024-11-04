import headerNvbar from "../../assets/icons/header_navbar.svg";
import homeIcon from "../../assets/icons/home_icon.svg"
import trendinIcon from "../../assets/icons/trending_icon.svg"
import SubsIcon from "../../assets/icons/subs_icon.svg"
import LibraryIcon from "../../assets/icons/library_icon.svg"
import History from "../../assets/icons/history_icon.svg"
import Watch from "../../assets/icons/watch_icon.svg"
import Favourites from "../../assets/icons/favourites_icon.svg"
import Liked from "../../assets/icons/like_icon.svg"
import Music from "../../assets/icons/music_icon.svg"
import Games from "../../assets/icons/games_icon.svg"
import showMore from "../../assets/icons/show_more_icon.svg"
import ProfileIcon1 from "../../assets/icons/profil_1.svg"
import ProfileIcon2 from "../../assets/icons/profil_2.svg"
import ProfileIcon3 from "../../assets/icons/profil_3.svg"
import ProfileIcon4 from "../../assets/icons/profil_4.svg"
import ProfileIcon5 from "../../assets/icons/profil_5.svg"
import ProfileIcon6 from "../../assets/icons/profil_6.svg"
import SettingIcon from "../../assets/icons/setting_img.svg"
import headericon from "../../assets/images/header_logo.png";
import searchIcon from "../../assets/icons/search_icon.svg";
import videoIcon from "../../assets/icons/video_icon.svg";
import headerNavbar_2 from "../../assets/icons/header_navbar_2.svg";
import notification from "../../assets/icons/notification_icon.svg";
import profil from "../../assets/icons/header_profile.svg";
import { FC, useState } from "react";
import { Button, Drawer, Space, DrawerProps } from 'antd';
import { Link, useNavigate } from "react-router-dom";
import ChannelPage from "../../channelPage/channel";
const Header: FC = () => {
  const [open, setOpen] = useState(false);
  const [placement, setPlacement] = useState<typeDrawerProps['placement']>('left');

  const showDrawer = () => {
    setOpen(true);
  };

  const onClose = () => {
    setOpen(false);
  };

  const [value, setValue] = useState('')
	const navigate = useNavigate()

	const submitHandler = e => {
		e.preventDefault()
		if (value) {
			navigate(`/search/${value}`)
			setValue('')
		}
	}

  return (

    <>
      <div className="pt-5 flex items-center  justify-between">
        <div className="flex items-center gap-8">
          <div className="flex items-center gap-6">
            <a type="link" onClick={showDrawer}>
              <img src={headerNvbar} alt="" />

            </a>
            <Link to="/">
            <img src={headericon} alt="icon" />
            </Link>
          </div>    <div className="flex items-center relative max-w-full">
        <input
  className="py-2 bg-[#ebebeb] pl-10 pr-4 w-[300px] sm:w-[500px] hidden sm:block rounded-xl max-w-full"
  type="text"
  placeholder="Search"
  value={value}
  onChange={(e) => setValue(e.target.value)}
  onKeyDown={(e) => e.key === 'Enter' && submitHandler(e)}
/>

            <img
              src={searchIcon}
              alt="Search Icon"
              className="absolute right-3 w-5 h-5"
            />
          </div>
        </div>

        <div className=" items-center hidden sm:flex gap-12">

          <img src={videoIcon} alt="Video" />
          <img src={headerNavbar_2} alt="Navbar" />
          <div className="relative ">
            <img src={notification} alt="Notification" />
            <h2
              className="absolute   left-2 w-5 h-5 text-[12px] top-[-5px] font-bold text-white bg-red-500 flex items-center justify-center rounded-full"

            >
              3
            </h2>
          </div>


          <img src={profil} alt="Profile" />
        </div>

      </div>
      <Space>


      </Space>
      <Drawer

        placement={placement}
        closable={false}
        onClose={onClose}
        open={open}
        key={placement}
        width={300}
      >


        <div>

          <ul className="flex flex-col gap-[29px]">
            <li className="flex items-center gap-6">
              <Button type="link" onClick={onClose}>
              <img src={headerNvbar} alt="" />

              </Button>
              <img src={headericon} alt="" />
            </li>
            <li className="flex items-center gap-[14px] text-[16px] text-primary hover:text-[red]"><img className="" src={homeIcon} alt="icons" />Home</li>
            <li className="flex items-center gap-[14px] text-[16px] text-primary hover:text-[red] "><img className="hover:filter-red" src={trendinIcon} alt="icons" />Trending</li>
            <li className="flex items-center mb-[31px] gap-[14px] text-[16px] text-primary hover:text-[red] "><img src={SubsIcon} alt="icons" />Subscriptions</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={LibraryIcon} alt="icons" />Library</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={History} alt="icons" />History</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Watch} alt="icons" />Watch later</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Favourites} alt="icons" />Favourites</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Liked} alt="icons" />Liked videos</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Music} alt="icons" />Music</li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={Games} alt="icons" />Games </li>
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={showMore} alt="icons" />Show more</li>

          </ul>
          <ul className="flex flex-col gap-[26px] pt-[58px] pb-[104px]">
            <h1 className="font-bold text-lg mb-1">Subscriptions</h1>
          <Link to="channel">
          <li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon1} alt="icons" />Gussie Singleton</li></Link>
            <li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon2} alt="icons" />Nora Francis</li>
            <li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon3} alt="icons" />Belle Briggs</li>
            <li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon4} alt="icons" />Eunice Cortez</li>
            <li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon5} alt="icons" />Emma Hanson</li>
            <li className="flex items-center gap-2 text-[16px] text-primary hover:text-[red] "><img src={ProfileIcon6} alt="icons" />Leah Berry</li>
          </ul>
          <ul className="pb-10">
            <li className="flex items-center gap-3 text-[16px] text-primary hover:text-[red] "><img src={SettingIcon} alt="icons" />Setting</li>

          </ul>
        </div>
      </Drawer></>
  );
};

export default Header;
