import { Col } from 'react-bootstrap';
import '../../sass/style.scss';

export default function Clock(props) {
    const time = props.time;
    return(
        <Col xs={12} sm={{span: 2}} className="clock">
            <p className='clock-zone'>{time.zone.toUpperCase()}</p>
            <p className='clock-time'>{time.time}</p>
        </Col>
    );
}