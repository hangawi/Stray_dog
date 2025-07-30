import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import MyDetail from "../../api/MyAPi"; 

const SidebarContent = () => {
    const [user, setUser] = useState(null);

    useEffect(() => {
        const fetchUser = async () => {
            try {
                const result = await MyDetail();
                setUser(result);
            } catch (err) {
                console.error("사용자 정보를 불러오지 못했습니다", err);
            }
        };
        fetchUser();
    }, []);

    return (
        <div className="p-4">
            <div className="flex items-center gap-3 mb-6">
                <img
                    src="book.png"
                    alt="유저 아바타"
                    className="w-10 h-10 rounded-full border"
                />
                <div>
                    <p className="font-semibold text-sm">
                        {user?.name || user?.email || "게스트님"}
                    </p>
                    <p className="text-xs text-gray-400">
                        {user  ? "환영합니다!" : "로그인이 필요합니다"}
                    </p>
                </div>
            </div>
            <nav className="space-y-2 text-sm">
                <Link to="/mypage" className="block px-2 py-2 hover:bg-gray-100 rounded">📌 내 정보</Link>
                <Link to="/myanimalorder" className="block px-2 py-2 hover:bg-gray-100 rounded">📝 등록 내역</Link>
                <Link to="/myorders" className="block px-2 py-2 hover:bg-gray-100 rounded">⭐ 입양 신청 내역</Link>
                <Link to="/userboards" className="block px-2 py-2 hover:bg-gray-100 rounded">📂 게시물 등록 내역</Link>
                <Link to="/commingsoon" className="block px-2 py-2 hover:bg-gray-100 rounded">⚙️ 추후 등장할 예정</Link>
            </nav>
        </div>
    );
};

export default SidebarContent;
