import React from 'react';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon
} from 'mdb-react-ui-kit';

const Footer = () => { 
    return (
        <>
        <MDBFooter className='bg-info text-center text-white'>
      <MDBContainer className=' pb-0'>
        <section className='mb-2'>
          <a className='btn btn-outline-danger btn-floating m-1' href='https://www.linkedin.com/in/bisrat-menberu/' role='button'>
            <MDBIcon fab icon='google' />
          </a>
          <a className='btn btn-outline-primary btn-floating m-1'  href="https://www.linkedin.com/in/bisrat-menberu/" role='button'>
            <MDBIcon fab icon='linkedin-in' />
          </a>
          <a className='btn btn-outline-dark btn-floating m-1' href='https://github.com/BISrat3/' role='button'>
            <MDBIcon fab icon='github' />
          </a>
        </section>
      </MDBContainer>
      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2022 Copyright:
        <a className='text-white' href='https://www.linkedin.com/in/bisrat-menberu/'>
          Bisrat Amtataw
        </a>
      </div>
        </MDBFooter>
        </>
    )
}

export default Footer