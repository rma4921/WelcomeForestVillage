import TopNav from "@/TopNav.tsx";
import {Link, useNavigate} from "react-router-dom";
import Setting from "@/Setting.tsx";
import {useState} from "react";

function MainPage() {
    const navigate = useNavigate();
    const [zoom, setZoom] = useState(1);

    const buttons = [
        {label: "마을 최근 행사는 뭐야?", to: "/"},
        {label: "마을의 인구 수는?", to: "/"},
        {label: "마을의 장점은 뭐야?", to: "/"}
    ];

    type CustomPolicyData = {
        title: string;
        imgUrl: string;
        content: string;
        to: string;
    }

    type NewPolicyData = {
        title: string;
        imgUrl: string;
        content: string;
        to: string;
    }

    const customPolicyData: CustomPolicyData[] = [
        {
            title: "Custom Title 1",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "1 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        },
        {
            title: "Custom Title 2",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "2 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        },
        {
            title: "Custom Title 3",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "3 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        },
        {
            title: "Custom Title 4",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "3 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        }
    ]

    const NewPolicyData: NewPolicyData[] = [
        {
            title: "New Title 1",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "1 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        },
        {
            title: "New Title 2",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "2 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        },
        {
            title: "New Title 3",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "3 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        },
        {
            title: "New Title 4",
            imgUrl: "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
            content: "3 A card component has a figure, a body part, and inside body there are title and actions parts",
            to: "/"
        }
    ]

    return (
        <div style={{zoom}} className="bg-base-100">
            <div className="w-full relative h-[700px] flex justify-center mb-15">
                <TopNav/>
                <img src="/이장의숲데스크탑배경.png" alt="배경" className="w-full object-cover hidden md:block"/>
                <img src="/이장의숲모바일배경.png" alt="배경" className="w-full object-cover md:hidden"/>
                <img src="/호이장.png" alt="호이장" className="w-[200px] md:w-[250px] absolute right-4 lg:right-50 bottom-4"/>

                <h2 className="absolute top-55 left-10 lg:left-50 text-xl font-bold">AI 마을이장에게 질문해보세요!</h2>

                {buttons.map((item, idx) => (
                    <button
                        key={idx}
                        className="btn btn-soft absolute left-10 lg:left-50"
                        style={{top: `${275 + idx * 50}px`}}
                        onClick={() => navigate(item.to)}
                    >
                        {item.label}
                    </button>
                ))}

                <button
                    className="btn btn-success absolute top-150 left-10 lg:left-50"
                >
                    챗봇 바로가기
                </button>
            </div>
            <div className="mx-15 mb-15">
                <span className="font-semibold text-lg text-base-content">맞춤 추천 정책</span>
                <div className="flex justify-center flex-wrap m-10">
                    {customPolicyData.map((customPolicy) => (
                        <Link key={customPolicy.title} to={customPolicy.to}>
                            <div
                                className="card bg-base-300 w-80 h-90 shadow-sm flex flex-col mx-5 mb-10 md:w-56 md:h-68">
                                <figure className="flex-[2]">
                                    <img
                                        src={customPolicy.imgUrl}
                                        alt={customPolicy.title}
                                        className="object-cover w-full h-full"/>
                                </figure>
                                <div className="card-body flex-[1]">
                                    <h2 className="card-title line-clamp-1 text-base-content">
                                        {customPolicy.title}
                                    </h2>
                                    <p className="line-clamp-2 text-base-content">
                                        {customPolicy.content}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <div className="mx-15 mb-15">
                <span className="font-semibold text-lg text-base-content">새로운 정책</span>
                <div className="flex justify-center flex-wrap m-10">
                    {NewPolicyData.map((NewPolicy) => (
                        <Link key={NewPolicy.title} to={NewPolicy.to}>
                            <div
                                className="card bg-base-300 w-80 h-90 shadow-sm flex flex-col mx-5 mb-10 md:w-56 md:h-68">
                                <figure className="flex-[2]">
                                    <img
                                        src={NewPolicy.imgUrl}
                                        alt={NewPolicy.title}
                                        className="object-cover w-full h-full"/>
                                </figure>
                                <div className="card-body flex-[1]">
                                    <h2 className="card-title line-clamp-1 text-base-content">
                                        {NewPolicy.title}
                                    </h2>
                                    <p className="line-clamp-2 text-base-content">
                                        {NewPolicy.content}
                                    </p>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
            <Setting onZoomChange={setZoom}/>
        </div>
    )
}

export default MainPage;