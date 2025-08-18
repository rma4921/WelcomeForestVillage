import {Menu} from "lucide-react";
import {useState} from "react";
import {Link} from "react-router-dom";

function TopNav() {
    const [hovered, setHovered] = useState<string | null>(null);

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

    return (
        <div className="absolute w-full z-10">
            <div
                className={`flex justify-between items-center h-25 p-5 ${hovered ? "bg-white text-black" : "bg-transparent text-white"}`}>
                {/* 로고 */}
                <div className="text-xl font-bold">
                    모여봐요
                    <br/>
                    이장의숲
                </div>

                <Menu className="w-7 h-7 block md:hidden cursor-pointer"/>

                {menuData.map((item) => (
                    <div
                        key={item.title}
                        className="hidden md:inline text-xl font-bold"
                        onMouseEnter={() => setHovered(item.title)}
                    >
                        <span className="cursor-pointer">{item.title}</span>

                        {hovered === item.title && (
                            <div
                                className="absolute top-25 left-0 w-full h-[150px] bg-white z-0 border-t-2 border-gray-200 flex justify-center items-center"
                                onMouseEnter={() => setHovered(item.title)}
                                onMouseLeave={() => setHovered(null)}
                            >
                                <div className="flex justify-evenly w-full items-center ">
                                    {item.links.map((link) => (
                                        <Link key={link.label} to={link.to}>
                                            <div className="h-25 w-50">
                                                <p className="font-normal text-lg">{link.label}</p>
                                                <p className="pt-2 text-sm border-t border-gray-400 font-normal text-lg">{link.desc}</p>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>
                ))}

                <Link to="/login" className="hidden md:inline text-xl font-bold cursor-pointer">로그인</Link>
            </div>
        </div>
    )
}

export default TopNav;