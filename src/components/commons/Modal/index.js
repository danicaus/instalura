import React from 'react';
import styled, { css } from 'styled-components';
import PropTypes from 'prop-types';
import { motion } from 'framer-motion';

const ModalWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: stretch;
  background: #0000001a;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  overflow: scroll;
  transition: .3s;
  z-index: 3;

  ${({ isOpen }) => {
    if (isOpen) {
      return css`
        opacity: 1;
        pointer-events: all;
      `;
    }
    return css`
      /* opacity: 0; */
      pointer-events: none;
      visibility: hidden;
    `;
  }}
`;

const ModalContent = styled.div`
  display: flex;
  flex: 1;
  background: white;
  padding-top: 150px;
  padding-right: 85px;
  padding-left: 85px;
  align-self: right;
  box-shadow: -10px 0 24px #070C0E5a;
`;

function Modal({ isOpen, onClose, children }) {
  return (
    <ModalWrapper
      isOpen={isOpen}
      onClick={(e) => {
        if (!e.target.closest('[data-modal-safe-area="true"]')) {
          onClose();
        }
      }}
    >
      <motion.div
        variants={{
          open: {
            x: 0,
          },
          closed: {
            x: '110%',
          },
        }}
        animate={isOpen ? 'open' : 'closed'}
        transition={{
          duration: 0.6,
        }}
        style={{
          display: 'flex',
          flex: 1,
        }}
      >
        <ModalContent>
          {children({
            'data-modal-safe-area': 'true',
          })}
        </ModalContent>
      </motion.div>
    </ModalWrapper>
  );
}

Modal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired,
};

export default Modal;
