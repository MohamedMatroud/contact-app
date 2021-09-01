// import React from "react";
// import ContactCard from "./ContactCard";

// const ContactList = (props) => {
//  const renderContactList1 = props.contacts.map((contact) =>{
//      return(
//        <ContactCard contact={contact}></ContactCard>
//      );
//  })
//   return (
//   <div className="ui celled container list">{renderContactList1}</div>
//   );
// };

// export default ContactList;

import React,{useRef} from "react";
import ContactCard from "./ContactCard";
import {Link} from 'react-router-dom';


const ContactList = (props) => {
  console.log(props);
  const inputEL=useRef("");

  const deleteConactHandler = (id) => {
    props.getContactId(id);
  };

  const renderContactList = props.contacts.map((contact) => {
    return (
      <ContactCard
        contact={contact}
        clickHander={deleteConactHandler}
        key={contact.id}
      />
    );
  });

  const getSearchTerm = () =>{
     props.searchKeyword(inputEL.current.value);
  }
  return (
      <div className="main">
          <h2>Contact List
              <Link to="/add"><button className="ui button blue right">Add Contact</button></Link>
              
          </h2>
          <div className="ui search">
            <div className="ui icon input">
              <input type="text" placeholder="search contacts" className="pompt" 
              value={props.term} onChange={getSearchTerm} ref={inputEL}/>
              <i className="search icon"></i>
            </div>
          </div>
           <div className="ui celled list">{renderContactList.length >0 ? renderContactList : "no contacts avaliable"}</div>
      </div>
  );
};

export default ContactList;