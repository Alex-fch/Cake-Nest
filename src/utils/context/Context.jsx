import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const UserNameContext = createContext()

export const UserNameProvider = ({ children }) => {
    const [userName, setUserName] = useState('')
    
    return (
        <UserNameContext.Provider value={{ userName, setUserName }}>
            {children}
        </UserNameContext.Provider>
  )
};

UserNameProvider.propTypes = {
    children: PropTypes.isRequired
};