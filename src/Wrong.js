import React from 'react';

const Wrong = ({onRouteChange}) => {
  return(
    <article className="br2 ba white b--white-10 mv4 w-100 w-50-m w-25-l mw6 shadow-5 center">
      <main className="pa4 black-80">
        <div className="measure">
          <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
            <legend className="f2 gold fw6 ph0 mh0 center">Invalid Credentials</legend>
          </fieldset>
          <div className="">
            <input onClick={() => onRouteChange('signin')} className="b gold ph3 pv2 input-reset ba b--mid-gray bg-transparent bg-animate hover-bg-mid-gray grow pointer f4 dib" type="submit" value="Retry"/>
          </div>
        </div>
      </main>
    </article>
  );
}

export default Wrong;
