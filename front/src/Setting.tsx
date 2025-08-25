import {Settings} from "lucide-react";
import {useEffect} from "react";

interface SettingProps {
    onZoomChange: (zoom: number) => void;
}

function Setting({onZoomChange}: SettingProps) {

    const ZOOM_KEY = "globalZoom";

    useEffect(() => {
        const savedZoom = localStorage.getItem(ZOOM_KEY);
        if (savedZoom) {
            onZoomChange(parseFloat(savedZoom));
        }
    }, [onZoomChange]);

    const handleZoom = (value: number) => {
        localStorage.setItem(ZOOM_KEY, value.toString());
        onZoomChange(value);
    };

    const zoomOptions = [
        {value: 0.9, label: "축소", textSize: "text-sm"},
        {value: 1.0, label: "기본", textSize: "text-base"},
        {value: 1.1, label: "확대", textSize: "text-xl"},
    ];

    return (
        <div className="dropdown dropdown-top dropdown-end fixed right-5 bottom-5">
            <div tabIndex={0} role="button" className="btn btn-circle btn-lg md:btn-xl m-1">
                <Settings className="w-7 h-7 md:w-9 md:h-9"/>
            </div>
            <div tabIndex={0} className="dropdown-content z-10 w-100 p-5 shadow-lg bg-base-100 rounded-box">
                <h2 className="font-bold text-lg mb-2">글씨 크기 조절</h2>
                <div className="flex justify-center">
                    {zoomOptions.map(({value, label, textSize}) => (
                        <div key={label} className="flex flex-col items-center mx-2">
                            <div className="card bg-base-100 w-25 h-25 shadow-sm mb-2"
                                 onClick={() => handleZoom(value)}>
                                <div className="card-body flex justify-center items-center cursor-pointer">
                                    <h2 className={textSize}>가•Aa</h2>
                                </div>
                            </div>
                            <span>{label}</span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Setting;