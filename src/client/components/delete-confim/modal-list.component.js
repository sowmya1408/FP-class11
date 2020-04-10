import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Button from '../button/button.component';

const ModalList = ({ setIsShowing, onDelete }) => {
  return ReactDOM.createPortal(
    <div>
      <div className="modal-overlay" />
      <div
        className="modal-wrapper"
        aria-modal
        aria-hidden
        tabIndex={-1}
        role="dialog"
      >
        <div className="modal-header">
          <span
            type="button"
            className="modal-close-button"
            aria-label="Close"
            onClick={() => setIsShowing(false)}
            aria-hidden="true"
          >
            &times;
          </span>
        </div>
        <div className="modal">
          <h4 className="text-headline">DELETE CROP</h4>
          <p className="p1">Are you sure?</p>
          <p className="p2">Do you really want to delete the crop?</p>
          <div className="buttons-wrapper">
            <Button type="danger" size="large" onClick={onDelete}>
              Delete
            </Button>
            <Button
              type="secondary"
              size="large"
              onClick={() => setIsShowing(false)}
            >
              Cancel
            </Button>
          </div>
        </div>
      </div>
    </div>,
    document.body,
  );
};
ModalList.propTypes = {
  setIsShowing: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
};

export default ModalList;