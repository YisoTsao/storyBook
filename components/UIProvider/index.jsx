import React, { createContext, useContext, useState, useMemo } from 'react';
import PropTypes from 'prop-types';
import { Spin } from '@/components/Spin';
import Modal from '@/components/Modal';

import { commonStore } from '@/utils/store/common';

const Context = createContext();

export const UIProvider = ({ children }) => {
  const [modal, setModal] = useState(null);
  const { show, icon } = commonStore((state) => state);

  const state = useMemo(() => ({ setModal }), [setModal]);

  return (
    <Context.Provider value={state}>
      {modal && <Modal modal={modal} unsetModal={setModal} />}
      {children}
      <Spin icon={icon} show={show} />
    </Context.Provider>
  );
};

UIProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

export const uiGlobalContext = () => useContext(Context);
