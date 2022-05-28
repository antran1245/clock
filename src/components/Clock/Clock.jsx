import { Col } from 'react-bootstrap';

export default function Clock(props) {
    const time = props.time;
    return(
        <Col xs={12} sm={3}>
            <p>{time.zone.toUpperCase()}</p>
            <p>{time.time}</p>
        </Col>
    );
}