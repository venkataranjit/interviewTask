import { Link, Route, Routes } from "react-router-dom";
import "./App.css";
import { lazy, Suspense } from "react";

function App() {
  const Home = lazy(() => import("./components/Home"));
  const NotFound = lazy(() => import("./components/NotFound"));
  const Counter = lazy(() => import("./components/Counter"));
  const Search = lazy(() => import("./components/Search"));
  const Radio = lazy(() => import("./components/Radio"));
  const CheckBox = lazy(() => import("./components/CheckBox"));
  const CheckBox2 = lazy(() => import("./components/CheckBox2"));
  const Todo = lazy(() => import("./components/Todo"));
  const ToggleBtn = lazy(() => import("./components/ToggleBtn"));
  const FetchApi = lazy(() => import("./components/FetchApi"));
  const Dropdown = lazy(() => import("./components/Dropdown"));
  const Tabs = lazy(() => import("./components/Tabs"));
  const Modal = lazy(() => import("./components/Modal"));
  const Slider = lazy(() => import("./components/Slider"));
  const StarRating = lazy(() => import("./components/StarRating"));
  const MultiStep = lazy(() => import("./components/MultiStep"));
  const VirtualizedList = lazy(() => import("./components/VirtualizedList"));
  const CountDown = lazy(() => import("./components/CountDown"));
  const CustomeHook = lazy(() => import("./components/CustomeHook"));
  const Timer = lazy(() => import("./components/Timer"));
  const Form = lazy(() => import("./components/Form"));
  const Formik = lazy(() => import("./components/Formik"));
  const UseRef = lazy(() => import("./components/UseRef"));
  const ReactMemo = lazy(() => import("./components/ReactMemo"));
  const ChildCounterContext = lazy(() =>
    import("./components/ChildCounterContext")
  );
  const SamplePage = lazy(() => import("./components/SamplePage"));

  return (
    <>
      <Link to="/" className="stickyhome">
        Home
      </Link>
      <Suspense fallback={<h6>Loading</h6>}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/counter" element={<Counter />} />
          <Route path="/search" element={<Search />} />
          <Route path="/radio" element={<Radio />} />
          <Route path="/checkbox" element={<CheckBox />} />
          <Route path="/checkbox2" element={<CheckBox2 />} />
          <Route path="/todo" element={<Todo />} />
          <Route path="/btntoggle" element={<ToggleBtn />} />
          <Route path="/fetchapi" element={<FetchApi />} />
          <Route path="/dropdown" element={<Dropdown />} />
          <Route path="/tabs" element={<Tabs />} />
          <Route path="/modal" element={<Modal />} />
          <Route path="/slider" element={<Slider />} />
          <Route path="/starrating" element={<StarRating />} />
          <Route path="/multistep" element={<MultiStep />} />
          <Route path="/starrating" element={<StarRating />} />
          <Route path="/virtuallist" element={<VirtualizedList />} />
          <Route path="/countdown" element={<CountDown />} />
          <Route path="/cusomehook" element={<CustomeHook />} />
          <Route path="/timer" element={<Timer />} />
          <Route path="/form" element={<Form />} />
          <Route path="/formik" element={<Formik />} />
          <Route path="/useref" element={<UseRef />} />
          <Route path="/reactmemo" element={<ReactMemo />} />
          <Route path="/usecontext" element={<ChildCounterContext />} />
          <Route path="/sample" element={<SamplePage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
