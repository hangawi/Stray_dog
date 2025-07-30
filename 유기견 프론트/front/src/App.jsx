import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './css/index.css';

//메인 화면
import Main from './components/MainPage/Main';
import MainSide from './components/MainsidePage/MainSide';

//로그인
import Login from './components/LoginPage/Login';

//동물
import Dog from './components/DogPage/Dog';
import Cat from './components/CatPage/Cat';
import Cat1 from './components/CatPageSub/Cat1';
import Cat2 from './components/CatPageSub/Cat2';
import Dog1 from './components/DogPageSub/Dog1';
import Dog2 from './components/DogPageSub/Dog2';

//회원가입
import SignUp1 from './components/SignUpPage/SignUp1';
import SignUp2 from './components/SignUpPage/SignUp2';
import SignUp3 from './components/SignUpPage/SignUp3';

// 게시판
import Board1 from './components/BoardPage/Board1';
import Board3 from './components/BoardPage/Board3';
import Board2 from './components/BoardPage/Board2';

// 회사 소개 페이지
import About from './components/About Page/About';

//시설 페이지
import Facility from './components/FacilityPage/Shelter';
import ShelterDetail from "./components/FacilityPage/ShelterDetail";

// 마이 페이지
import MyPage from './components/MyPage/MyPage';
import MyOrdersPage from './components/MyPage/MyOrderPage';
import AnimalOrderDetailForm from './components/MyPage/AnimalOrderDetailForm';
import MyUploadedAnimalOrdersPage from './components/MyPage/MyUploadedAnimalOrdersPage';
import UpdateUserForm from './components/MyPage/UpdateUser';
import UserBoardList from './components/MyPage/UserBoardList';
import Goodbye from './components/MyPage/GoodBye';

// 퀴즈
import DogQuizPage from './components/QuizPage/DogQuizPage';
import CatQuizPage from './components/QuizPage/CatQuizPage';

//미정
import CommingSoon from './components/PublicPage/CommingSoon';




function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <>
            <Main />
            <MainSide />

          </>
        }
        />
        {/* 회사소개 */}
        <Route path="/about" element={<About />} />

        {/* 퀴즈 */}
        <Route path="/dogquizpage" element={<DogQuizPage />} />
        <Route path="/catquizpage" element={<CatQuizPage />} />

        {/* 강아지 고양이 */}
        <Route path="/dog" element={<Dog />} />
        <Route path="/cat" element={<Cat />} />

        <Route path="/cats/:id" element={<Cat1 />} />
        <Route path="/newcats" element={<Cat2 />} />

        <Route path="/dogs/:id" element={<Dog1 />} />
        <Route path="/newdogs" element={<Dog2 />} />

        {/* 커뮤니티 */}
        <Route path="/board" element={<Board1 />} />
        <Route path="/newboard" element={<Board2 />} />
        <Route path="/board/:id" element={<Board3 />} />

        {/* 시설 */}
        <Route path="/facility" element={<Facility />} />
        <Route path="/shelter-detail/:id" element={<ShelterDetail />} />

        {/* 로그인 */}
        <Route path='/login' element={<Login />} />

        {/* 회원가입 */}
        <Route path="/signup" element={<SignUp1 />} />
        <Route path="/signup2" element={<SignUp2 />} />
        <Route path="/signup3" element={<SignUp3 />} />

        {/*마이페이지*/}
        <Route path="/mypage" element={<MyPage />} />
        <Route path="/userupdate" element={<UpdateUserForm />} />
        <Route path="/myanimalorder" element={<MyUploadedAnimalOrdersPage />} />
        <Route path="/myanimalorder/:animalId" element={<AnimalOrderDetailForm />} />
        <Route path="/myorders" element={<MyOrdersPage />} />
        <Route path="/userboards" element={<UserBoardList />} />
        <Route path="/goodbye" element={<Goodbye />} />

        {/*미정 페이지*/}
        <Route path="/commingsoon" element={<CommingSoon />} />
        
        

      </Routes>
    </Router>
  );
}

export default App;
