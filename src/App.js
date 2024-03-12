import RootNavigation from "./components/common/RootNavigation";
import { Routes, Route } from "react-router-dom";
import ProductsList from "./pages/shoppingmall/ProductsList";
import MyCart from "./pages/shoppingmall/MyCart";
import Landing from "./pages/Landing";
import TodoList from "./pages/todolist/TodoList";
import styled from "styled-components";
import TodolistRoute from "./routes/TodolistRoute";
import ShoppingmallRoute from './routes/ShoppingmallRoute'
import ProgressInqury from "./pages/todolist/ProgressInqury";

function App() {
  return (
    <StyledParentWrapper>
        {/*<RootNavigation/>*/}
        <Routes>
            {/*<Route path="/" element={<Landing/>}/>*/}
            <Route element={<ShoppingmallRoute/>}>
                <Route path="/" element={<ProductsList/>}/>
                <Route path="/cart" element={<MyCart/>}/>
            </Route>
            {/*<Route element={<TodolistRoute/>}>*/}
            {/*    <Route path="/todos" element={<TodoList/>}/>*/}
            {/*    <Route path="/progress" element={<ProgressInqury/>}/>*/}
            {/*</Route>*/}
        </Routes>
    </StyledParentWrapper>
  );
}

const StyledParentWrapper = styled.div`
    width: 35rem;
    margin: 0 auto;
`;

export default App;
