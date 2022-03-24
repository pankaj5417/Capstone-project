
import Home from './routes/Home/Home';
import { Route,Routes } from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import { SignIn } from './routes/SignIn/SignIn';
import { Shop } from './routes/Shop/Shop';
const  App=()=> {
 

  return (
    <div >
     
 <Routes>
   <Route path='/' element={<Navigation/>}>
     <Route index element={<Home/>}></Route>

     <Route path='/shop' element={<Shop/>}></Route>
     <Route path='/sign-in' element={<SignIn/>}></Route>

   </Route>
 </Routes>
 
    </div>
   
  );
}

export default App;
