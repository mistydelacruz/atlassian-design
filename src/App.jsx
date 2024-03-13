/***************************************
* Created by: Misty Dela Cruz
* Created on: 2/7/2024
* Last Modified: 3/12/2024
* Updates:
* Added the Button component and coding out the layout of the page
***************************************/

import './App.css'
import '@atlaskit/css-reset';
import Button from '@atlaskit/button';

function App() {

  return (
    <>
      <div className='left-side'>             {/*Divider for the left side of the page*/}
        <div className='left-content'>        {/*Divider for the contents of the left side*/}
          <h1><strong>Welcome!</strong></h1>
          <p><strong>Please <strong>login</strong> to your account</strong></p>
          <div className='register'>                                                        {/*Divider for register*/}
            <p>Don't have an account? <em>Register</em></p>
          </div>
          <div className='first-button'>                                                    {/*Divider for the first button login*/}
            <Button appearance='primary'shouldFitContainer>Login with CAC</Button>
          </div>
          <div className='sec-button'>                                                      {/*Divider for the second button login*/}
            <Button appearance='primary' shouldFitContainer>Login with YubiKey</Button>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
