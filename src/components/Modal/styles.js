export const overlayStyles = {
  position: 'fixed',
  top: 0,
  left: 0,
  width: '100vw',
  height: '100vh',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.8)',
  zIndex: '1200',
  inset: 0,
};

export const contentStyles = {
  maxWidth: 'calc(100vw - 48px)',
  maxHeighteight: 'calc(100vh - 24px)',
  background: 'transparent',
  border: 'none',
  objectFit: 'contain',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: 0,
  margin: 0,
  inset: 'auto',
};
