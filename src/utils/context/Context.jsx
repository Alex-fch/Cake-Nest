import { useState, createContext } from 'react';
import PropTypes from 'prop-types';
import { fakeMenu } from '../data/fakeMenu';

export const ThemeContext = createContext();

export const AdminProvider = ({ children }) => {
    const [admin, setAdmin] = useState(false);

    const adminValue = {
        admin,
        setAdmin,
    };
    return (
        <ThemeContext.Provider value={ adminValue }>
            {children}
        </ThemeContext.Provider>
  );
};

export const FakeMenuContext = createContext();

export const FakeMenuProvider = ({ children }) => {
    const [fakeMenuTable, setFakeMenu] = useState(fakeMenu);

    const fakeMenuValue = {
        fakeMenuTable,
        setFakeMenu,
    };
    return (
        <FakeMenuContext.Provider value={ fakeMenuValue }>
            {children}
        </FakeMenuContext.Provider>
  );
};

export const ProductContext = createContext();

export const ProductProvider = ({ children }) => {
    const [product, setProduct] = useState(null);
    const [isopen, setIsOpen] = useState(false);
    const [label, setLabel] = useState("");

    const productValue = {
        product,
        isopen,
        label,
        setProduct,
        setIsOpen,
        setLabel,
    };
    return (
        <ProductContext.Provider value={ productValue }>
            {children}
        </ProductContext.Provider>
  );
};

AdminProvider.propTypes = {
    children: PropTypes.element.isRequired
};

FakeMenuProvider.propTypes = {
    children: PropTypes.element.isRequired
};

ProductProvider.propTypes = {
    children: PropTypes.element.isRequired
};