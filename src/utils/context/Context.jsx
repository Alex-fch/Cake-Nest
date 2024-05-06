import { useState, createContext } from 'react';
import PropTypes from 'prop-types';

export const ButtonContext = createContext();

export const ButtonProvider = ({ children }) => {
    const [textButton, setTextButton] = useState('Ajouter un produit')

    const buttonValue = {
        textButton,
        setTextButton
    }
    return (
        <ButtonContext.Provider value={ buttonValue }>
            {children}
        </ButtonContext.Provider>
  )
}

export const ThemeContext = createContext()

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false)

    const adminValue = {
        admin,
        setAdmin,
    }
    return (
        <ThemeContext.Provider value={ adminValue }>
            {children}
        </ThemeContext.Provider>
  )
};

AdminProvider.propTypes = {
    children: PropTypes.element.isRequired
};

ButtonProvider.propTypes = {
    children: PropTypes.element.isRequired
}