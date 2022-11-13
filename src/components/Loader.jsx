// import { ImBinoculars } from "react-icons/im";


// const Loader = ({handleimageCount}) => {
// return(
//         <div className="Loader-button-container">
//             <button className="Button" type="button" onClick={()=>{handleimageCount()}}> LoadMore
//                 <ImBinoculars style={{width:40, fill:"white",transform: 'scale(1.7)',
//                 marginLeft: 10}}/>
//             </button>{' '}
//         </div>
//     )}

// export default Loader

import PropTypes from 'prop-types';
import { Circles } from 'react-loader-spinner';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 auto;
`;

export const Loader = () => {
  return (
    <Wrapper>
      <Circles
        height="60"
        width="60"
        color="#076bf7"
        ariaLabel="circles-loading"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
      />
    </Wrapper>
  );
};
Loader.propTypes = {
    handleimageCount : PropTypes.func
}

