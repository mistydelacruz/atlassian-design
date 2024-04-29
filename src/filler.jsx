<div className='left-side'>             {/*Divider for the left side of the page*/}
        <div className='logo'>                {/*Divider for the logo */}
          <img src={img1} alt='logo'/>
        </div>
        <div className='left-content'>        {/*Divider for the contents of the left side*/}
          <h1><strong>Welcome!</strong></h1>
          <p className='sub'><strong>Please <strong>login</strong> to your account</strong></p>
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