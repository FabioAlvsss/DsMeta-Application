import icon from '../../assets/img/IconNotification.svg'
import './styles.css'
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