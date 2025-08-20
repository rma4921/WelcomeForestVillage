import {Menu} from "lucide-react";
import {useEffect, useState} from "react";
import {Link} from "react-router-dom";

function TopNav() {
    const [hovered, setHovered] = useState<string | null>(null);
    const [scrolled, setScrolled] = useState(false);

    type MenuLink = {
        label: string;
        desc: string;
        to: string;
    };

    type MenuData = {
        title: string;
        links: MenuLink[];
    };

    const menuData: MenuData[] = [
        {
            title: "공공 서비스",
            links: [
                {label: "정책", desc: "사용자에게 맞는 정책을 보여줍니다", to: "/"},
                {label: "민생 지원금 안내", desc: "민생 지원금 사용처를 쉽게 볼 수 있습니다", to: "/"},
            ],
        },
        {
            title: "마을 서비스",
            links: [
                {label: "마을 행사", desc: "마을의 행사를 날짜에 맞게 표시해줍니다", to: "/"},
                {label: "자유 게시판", desc: "마을의 자유 게시판을 볼 수 있습니다", to: "/"},
                {label: "공지 사항", desc: "마을의 공지사항을 볼 수 있습니다", to: "/"},
            ],
        },
    ];

    useEffect(() => {
        const scrollY0 = () => {
            setScrolled(window.scrollY < 0);
        }
        scrollY0();
        window.addEventListener("scroll", scrollY0);

        return () => {
            window.removeEventListener("scroll", scrollY0);
        }
    }, [])

    return (
        <div className="fixed top-0 left-0 w-full z-10">
            <div
                className={`flex justify-between items-center h-25 p-5 transition-colors duration-300
                ${hovered || scrolled ? "bg-white text-black border-b-2 border-gray-200" : "bg-transparent text-white"}`}>
                <Link to="/" className="w-[100px]">
                    <img src="/모여봐요이장의숲.png" alt="로고"/>
                </Link>

                <div className="dropdown dropdown-end md:hidden">
                    <Menu tabIndex={0} role="button" className="w-7 h-7 block cursor-pointer"/>

                    <ul tabIndex={0}
                        className="dropdown-content menu bg-white text-black rounded-box z-10 w-52 p-2 shadow-sm">

                        {menuData.map((menu) => (
                            <li key={menu.title}>
                                <h2 className="menu-title">{menu.title}</h2>
                                <ul>
                                    {menu.links.map((link) => (
                                        <li key={link.label}>
                                            <Link to={link.to}>{link.label}</Link>
                                        </li>
                                    ))}
                                </ul>
                            </li>
                        ))}
                    </ul>
                </div>

                {menuData.map((menu) => (
                    <div
                        key={menu.title}
                        className="hidden md:inline text-xl font-bold"
                        onMouseEnter={() => setHovered(menu.title)}
                    >
                        <span className="cursor-pointer">{menu.title}</span>

                            <div
                                className={`absolute top-25 left-0 w-full h-[150px] bg-white z-0 transition-opacity duration-300 flex justify-center items-center
                                ${hovered === menu.title ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"}`}
                                onMouseEnter={() => setHovered(menu.title)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="flex justify-evenly w-full items-center ">
                                    {menu.links.map((link) => (
                                        <Link key={link.label} to={link.to}>
                                            <div className="h-25 w-50">
                                                <p className="font-normal text-lg">{link.label}</p>
                                                <p className="pt-2 text-sm border-t border-gray-400 font-normal text-lg">{link.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                    </div>
                ))}

                <Link to="/login" className="hidden md:inline text-xl font-bold cursor-pointer">로그인</Link>
            </div>
        </div>
    )
}

export default TopNav;