import icon from '../../src/assets/img/IconNotification.svg'
import '../componentes/notificationButton/styles.css'
function NotificattionButton() {
    return(
        <div  className="dsmeta-button-container">
        <div className="dsmeta-button">
            <img src= {icon} alt="notificar"/>
        </div>
    </div>
    )
  }
  
  export default NotificattionButton