  import React from 'react';
  import ReactDOM from 'react-dom';

  const Info = (props) => (
      <div>
          <h1>Info</h1>
          <p>The info is: {props.info}</p>
      </div>
  );
  

  const withAdminWaring = ( WrappedComponent ) => {
      return (props) => (
          <div>
            {props.isAdmin && <p> This is private info. please don't share!</p>}
             <WrappedComponent {...props}/>
          </div>
      );
  };


  const requireAuthentican = (WrappedComponent) =>{
    return(props) => (
        <div>
            { props.isAuthenticated ?(
               <WrappedComponent {...props} />
            ) :(
                <p>please login to view the info</p>
            )}
            
        </div>
    );

};
  //const AdminInfo = withAdminWaring(Info);
  const AuthInfo = requireAuthentican(Info);
  

  ReactDOM.render(< AuthInfo isAuthenticated={true} info ='There is new added!!'/>,document.getElementById('app'));