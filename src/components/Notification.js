const Notification = ({showNotification}) => {
  return (
    <>
    <div style={{display:"flex"}}>
        <div className={`notification-container ${showNotification? 'show' : "" }`}>
        <p>You have already tried this letter!</p>
      </div>
    </div>
      
    </>
  );
};

export default Notification;
