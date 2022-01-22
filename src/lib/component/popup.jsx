import React from 'react'
import Button from './button'
export default function popup({
  title = 'Are u sure Remove this?',
  ok = 'yes',
  cancel = 'cancel',
  children,
  dynamicIndex,
  staticIndex,
  visible,
  onCancel,
  onOk,
}) {
  return (
    <div>
      <div className={'popup_full'}>
        {children}
        {dynamicIndex == staticIndex && (
          <div className={visible ? 'popup_box_show' : 'popup_box_none'}>
            <p className={'title_popup'}>{title}</p>
            <div className={'footer_pupup'}>
              <Button
                onClick={onCancel}
                className={'btn_popup'}
                type={'warning'}
              >
                {cancel}
              </Button>
              <Button onClick={onOk} className={'btn_popup'} type={'danger'}>
                {ok}
              </Button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
