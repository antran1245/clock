import { Row, Col } from 'react-bootstrap';
import '../../sass/style.scss';

export default function Clock(props) {
    const time = props.time;
    const timeArr = time.time.split(/[\s:]/)
    return(
        <Col xs={12} lg={{span: 3}} className="clock">
            <Row className='clock-zone justify-content-center'>
                {time.zone.toUpperCase()}
            </Row>
            <Row className='clock-time justify-content-center align-items-center'>
                <span>{parseInt(timeArr[0]) < 10? '0'+timeArr[0]: timeArr[0]}</span>
                <span>{timeArr[1]}</span>
                <span>{timeArr[2]}</span>
                <span>{timeArr[3]}</span>
            </Row>
        </Col>
    );
}