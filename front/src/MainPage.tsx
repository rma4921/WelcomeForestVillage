import TopNav from "@/TopNav.tsx";
import {useNavigate} from "react-router-dom";

function MainPage() {
    const navigate = useNavigate();

    const buttons = [
        {label: "마을 최근 행사는 뭐야?", to: "/"},
        {label: "마을의 인구 수는?", to: "/"},
        {label: "마을의 장점은 뭐야?", to: "/"}
    ];

    return (
        <div>
            <div className="w-full relative h-[700px] flex justify-center">
                <TopNav/>
                <img src="/이장의숲데스크탑배경.png" alt="배경" className="w-full object-cover hidden md:block"/>
                <img src="/이장의숲모바일배경.png" alt="배경" className="w-full object-cover md:hidden"/>
                <img src="/호이장.png" alt="호이장" className="w-[200px] md:w-[250px] absolute right-4 lg:right-50 bottom-4"/>

                <h2 className="absolute top-55 left-10 lg:left-50 text-xl font-bold">AI 마을이장에게 질문해보세요!</h2>

                {buttons.map((item, idx) => (
                    <button
                        key={idx}
                        className="btn btn-soft absolute left-10 lg:left-50"
                        style={{ top: `${275 + idx * 50}px` }}
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


        </div>
    )
}

export default MainPage;