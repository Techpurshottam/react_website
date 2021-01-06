import React  from 'react';
import {Route , Switch} from 'react-router-dom';
import './App.css';

import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';
import About from './components/About';
import Terms from './components/Terms';
import Advantage from './components/Advantage';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Contact from './components/Contact';
import Faq from './components/Faq';
import Privacy from './components/Privacy';
import SingleProduct from './components/SingleProduct';
import Wellness from './components/Wellness';

function App() {
  return (
   
    <>
       

       <Switch>

         <Route exact path="/" component={Home}/>
         <Route path="/login" component={Login} />
         <Route path="/register" component={Register} />
         <Route path="/about" component={About} />
         <Route path="/terms" component={Terms} />
         <Route path="/advantage" component={Advantage} />
         <Route path="/cart" component={Cart} />
         <Route path="/checkout" component={Checkout} />
         <Route path="/contact" component={Contact} />
         <Route path="/faq" component={Faq} />
         <Route path="/privacy" component={Privacy} />
         <Route path="/singleproduct" component={SingleProduct} />
         <Route path="/wellness" component={Wellness} />

       </Switch>
    
      
   </>
  
  );
}

export default App;
