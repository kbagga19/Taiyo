import Contacts from '../components/Contacts';
import Charts from './Charts';
import EditContact from '../components/EditContact';
import ContactForm from '../components/ContactForm';
import {Route, Routes} from 'react-router-dom';

export default function Routing() {
  return (
      <Routes>
        <Route exact path='/' element={<Contacts/>}></Route>
        <Route exact path='/Charts' element={<Charts/>}></Route>
        <Route exact path='/ContactForm' element={<ContactForm/>}></Route>
        <Route path="/edit/:id" element={<EditContact/>}/>
      </Routes>
  );
}

// export default App;
