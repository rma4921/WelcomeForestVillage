import {Moon, Settings, Sun} from "lucide-react";
import {useEffect} from "react";

interface SettingProps {
    onZoomChange: (zoom: number) => void;
}

function Setting({onZoomChange}: SettingProps) {

    const ZOOM_KEY = "globalZoom";
    const THEME_KEY = "globalTheme";

    useEffect(() => {
        const savedZoom = localStorage.getItem(ZOOM_KEY);
        if (savedZoom) {
            onZoomChange(parseFloat(savedZoom));
        }

        const savedTheme = localStorage.getItem(THEME_KEY) as "light" | "dark" | null;
        if (savedTheme) {
            document.documentElement.setAttribute("data-theme", savedTheme);
        }
    }, [onZoomChange]);

    const handleZoom = (value: number) => {
        localStorage.setItem(ZOOM_KEY, value.toString());
        onZoomChange(value);
    };

    const zoomOptions = [
        {value: 0.9, label: "축소", textSize: "text-sm text-base-content"},
        {value: 1.0, label: "기본", textSize: "text-base text-base-content"},
        {value: 1.1, label: "확대", textSize: "text-xl text-base-content"},
    ];

    const themes = [
        {label: "라이트 모드", icon: Sun, bg: "bg-white", textColor: "", theme: "light"},
        {label: "다크 모드", icon: Moon, bg: "bg-gray-900", textColor: "text-white", theme: "dark"},
    ];

    const handleTheme = (theme: "light" | "dark") => {
        localStorage.setItem(THEME_KEY, theme);
        document.documentElement.setAttribute("data-theme", theme);
    };

    return (
        <div className="dropdown dropdown-top dropdown-end fixed right-5 bottom-5">
            <div tabIndex={0} role="button" className="btn btn-circle btn-lg md:btn-xl m-1">
                <Settings className="w-7 h-7 md:w-9 md:h-9"/>
            </div>
            <div tabIndex={0} className="dropdown-content z-10 w-100 p-5 shadow-lg bg-base-300 rounded-box">
                <h2 className="font-bold text-lg text-base-content mb-2">글씨 크기 조절</h2>
                <div className="flex justify-center">
                    {zoomOptions.map(({value, label, textSize}) => (
                        <div key={label} className="flex flex-col items-center mx-2">
                            <div className="card bg-base-100 w-25 h-25 shadow-sm mb-2"
                                 onClick={() => handleZoom(value)}>
                                <div className="card-body flex justify-center items-center cursor-pointer">
                                    <h2 className={textSize}>가•Aa</h2>
                                </div>
                            </div>
                            <span className="text-base-content">{label}</span>
                        </div>
                    ))}
                </div>
                <div className="w-90 border-1 border-base-100 my-5"/>
                <h2 className="font-bold text-lg text-base-content mb-2">화면 스타일</h2>
                <div className="flex justify-center">
                    {themes.map(({label, icon: Icon, bg, textColor, theme}) => (
                        <div key={label} className="flex flex-col items-center mx-2">
                            <div
                                className={`card ${bg} w-25 h-25 shadow-sm mb-2 justify-center items-center cursor-pointer`}
                                onClick={() => handleTheme(theme as "light" | "dark")}>
                                <Icon className={`w-12 h-12 ${textColor}`}/>
                            </div>
                            <span className="text-base-content">{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Setting;