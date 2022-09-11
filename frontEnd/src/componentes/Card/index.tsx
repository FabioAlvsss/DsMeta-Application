import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import NotificattionButton from '../notificationButton'
import './styles.css'

function Card() {
    return (
        <div className="dsmeta-card">
            <h2>Vendas</h2>
            <div >
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
                <div className="dsmeta-form-control-container">
                    <DatePicker
                        selected={new Date()}
                        onChange={(date: Date) => { }}
                        className="dsmeta-form-control"
                        dateFormat="dd/MM/yyyy"
                    />
                </div>
            </div>

            <div>
                <table className="dsmeta-table">
                    <thead>
                        <tr>
                            <th className=" ShowInformations">ID</th>
                            <th className=" ShowData">Data</th>
                            <th>Vendedor</th>
                            <th className=" ShowInformations">Visitas</th>
                            <th className=" ShowInformations">Vendas</th>
                            <th>Total</th>
                            <th>Notificar</th>

                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td className=" ShowInformations">#341</td>
                            <td className=" ShowData">07/08/2022</td>
                            <td>Anikin</td>
                            <td className=" ShowInformations">15</td>
                            <td className=" ShowInformations">11</td>
                            <td> R$ 55300.00</td>
                            <td><div className="dsmeta-button-container">
                                <div className="dsmeta-button">
                                    <NotificattionButton></NotificattionButton>
                                </div>
                            </div>

                            </td>
                        </tr>
                        <tr>
                            <td className=" ShowInformations">#341</td>
                            <td className=" ShowData">07/08/2022</td>
                            <td>Anikin</td>
                            <td className=" ShowInformations">15</td>
                            <td className=" ShowInformations">11</td>
                            <td> R$ 55300.00</td>
                            <td><div className="dsmeta-button-container">
                                <div className="dsmeta-button">
                                    <NotificattionButton></NotificattionButton>
                                </div>
                            </div>
                            </td>
                        </tr>
                        <tr>
                            <td className=" ShowInformations">#341</td>
                            <td className=" ShowData">07/08/2022</td>
                            <td>Anikin</td>
                            <td className=" ShowInformations">15</td>
                            <td className=" ShowInformations">11</td>
                            <td> R$ 55300.00</td>
                            <td><div className="dsmeta-button-container">
                                <div className="dsmeta-button">
                                    <NotificattionButton></NotificattionButton>
                                </div>
                            </div>
                            </td>
                        </tr>

                    </tbody>
                </table>

            </div>
        </div>

    )
}
export default Card