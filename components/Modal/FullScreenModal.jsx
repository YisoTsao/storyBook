import { useEffect } from 'react';
import PropTypes from 'prop-types';

const FullScreenModal = ({ overHidden, isOpen, children }) => {
  useEffect(() => {
    if (overHidden) return;
    // 在 Modal 打開時，禁止滾動
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      // 在 Modal 關閉時，啟用滾動
      document.body.style.overflow = 'visible';
    }

    // 在組件卸載時清除樣式
    // eslint-disable-next-line consistent-return
    return () => {
      document.body.style.overflow = 'visible';
    };
  }, [isOpen]);

  return (
    <div
      className={`fixed top-0 left-0 w-full h-full overflow-hidden flex items-center justify-center z-[9999] bg-black bg-opacity-10 ${
        isOpen ? 'block' : 'hidden'
      }`}
    >
      <div className="modal-content bg-white p-[30px] rounded-lg relative">{children}</div>
    </div>
  );
};

FullScreenModal.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  overHidden: PropTypes.bool,
};

export default FullScreenModal;
