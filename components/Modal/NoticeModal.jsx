import React from 'react';
import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';

const NoticeModal = ({
  title,
  buttonName,
  content,
  setModal,
  onClick,
  onlyCheck,
  action,
  cancelButtonName = '取消',
  cancelFunc,
}) => {
  const statusCode = action?.statusCode;

  const actionFunc = () => {
    if (statusCode === 'book_dates') return action?.resetCalendar();
    if (statusCode === 'book_expired') return action?.redirectBook();
    if (statusCode === 'not_registered_2times') return action?.redirectToPay();
    return null;
  };

  const actionName =
    statusCode === 'book_dates' ? action?.resetCalendarName : action?.redirectCalendarName;

  const onlyCheckList = ['points', 'tickets', 'promo_tickets', 'member_group'];

  const onlyCheckAction = onlyCheck || onlyCheckList.includes(statusCode);

  return (
    <div className="px-8 py-9">
      <button className="w-full flex justify-end" type="button" onClick={() => setModal()}>
        <Icon className="text-[#000000]" icon="ic:baseline-close" width="24" height="24" />
      </button>
      <div className="text-[28px] text-gray-700 font-medium min-w-[16rem] pb-2">{title}</div>

      <div className="text-[20px] text-[#5A5A5A] pb-8">
        <div>{content}</div>
      </div>
      <div className="flex items-center text-lg text-base justify-center gap-8">
        {onlyCheckAction ? (
          <button
            type="button"
            className={['px-8 py-3 px-2 text-white bg-[#0C7489] rounded-[10px]'].join(' ')}
            onClick={() => {
              setModal();
            }}
          >
            確認
          </button>
        ) : (
          <>
            <button
              type="button"
              className={[
                'px-6 lg:px-8 py-3 rounded-[10px]',
                'border border-solid border-[#656565] text-[#5A5A5A] bg-[#F5F5F5]',
              ].join(' ')}
              onClick={() => (cancelFunc ? cancelFunc() : setModal())}
            >
              {cancelButtonName}
            </button>
            <button
              type="button"
              className="px-6 lg:px-8 py-3 text-white bg-[#0C7489] rounded-[10px]"
              onClick={statusCode ? actionFunc : onClick}
            >
              {actionName || buttonName}
            </button>
          </>
        )}
      </div>
    </div>
  );
};

NoticeModal.propTypes = {
  setModal: PropTypes.func,
  title: PropTypes.string,
  buttonName: PropTypes.string,
  content: PropTypes.node,
  onClick: PropTypes.func,
  onlyCheck: PropTypes.bool,
  action: PropTypes.shape(),
  cancelButtonName: PropTypes.string,
  cancelFunc: PropTypes.func,
};

export default NoticeModal;
