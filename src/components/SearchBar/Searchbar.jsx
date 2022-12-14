// import React, { Component } from 'react';
import { FcSearch } from 'react-icons/fc';
import { SearchBarHeader, SearchForm, SearchFormButton, SearchFormInput } from './SearchBar.styled.jsx'
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import { useState } from 'react';


export function SearchBar( { onSubmit }) {
 const [query, setQuery] = useState('');

  const handleChange = ({ target: { value } }) => {
    setQuery(value);
    console.log(value);
  };

  const handleSubmit = e => {
    e.preventDefault();

    if (query.trim() === '') {
    return toast('Please, enter query!');
   }
 onSubmit(query);
  
  };

      return (
      <SearchBarHeader>
          <SearchForm onSubmit={handleSubmit}>
          <SearchFormButton type="submit">
            <FcSearch size="2rem" />
          </SearchFormButton>
          <SearchFormInput
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
            onChange={handleChange}
            value={query}
          />
        </SearchForm>
      </SearchBarHeader>
    );
};


// export class SearchBar extends Component {
//   state = {
//     query: '',
//   };
//   handleChange = e => {
//     const { target } = e;
//     this.setState({
//       query: target.value.toLowerCase(),
//     });
//   };

//   handleSubmit = e => {
//     e.preventDefault();
//     if (this.state.query.trim() === '') {
//       this.notify();
//       alert('Please, enter query!');
//       return;
//     }
//     this.props.onSubmit(this.state.query);
    
//   };

 
//   notify = () => {
//     toast.warn('Please, enter query!', {
//       position: toast.POSITION.TOP_RIGHT,
//     });
//   };
//   render() {
//     const { query } = this.state;
//     return (
//       <SearchBarHeader>
//         <SearchForm onSubmit={this.handleSubmit}>
//           <SearchFormButton type="submit">
//             <FcSearch size="2rem" />
//           </SearchFormButton>
//           <SearchFormInput
//             type="text"
//             autoComplete="off"
//             autoFocus
//             placeholder="Search images and photos"
//             onChange={this.handleChange}
//             value={query}
//           />
//         </SearchForm>
//       </SearchBarHeader>
//     );
//   }
// }

