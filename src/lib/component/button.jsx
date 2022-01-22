import React from 'react'
export default function Button({
  children,
  type = '',
  onClick = () => {},
  className = '',
  loading = false,
  disabled = false,
}) {
  const types = [
    { type: 'primary', bgColor: '#007bff', color: 'white' },
    { type: 'secondary', bgColor: '#6c757d', color: 'white' },
    { type: 'success', bgColor: '#28a745', color: 'white' },
    {
      type: 'danger',
      bgColor: '#dc3545',
      bgLoading: 'rgb(210, 82, 94)',
      color: 'white',
    },
    { type: 'warning', bgColor: '#ffc107', color: '#212529' },
    { type: 'info', bgColor: '#12A3BA', color: 'white' },
    { type: 'light', bgColor: '#f8f9fa', color: '#212529' },
    { type: 'dark', bgColor: '#343a40', color: 'white' },
  ]
  return (
    <div>
      {type ? (
        types.map((i) => {
          if (type == i.type) {
            return (
              <button
                disabled={disabled}
                className={className}
                onClick={onClick}
                className={`button ${className}`}
                style={{
                  backgroundColor: loading ? i.bgLoading : i.bgColor,
                  color: i.color,
                }}
              >
                <span className={'content_btn'}>
                  {loading && <div className={'loading'}></div>}
                  <span>{children}</span>
                </span>
              </button>
            )
          }
        })
      ) : (
        <button
          className={className}
          onClick={onClick}
          className={`button_default ${className}`}
          style={{
            backgroundColor: '#fff',
            color: '#212529',
          }}
        >
          {children}
        </button>
      )}
    </div>
  )
}
