import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Clock from './Clock';

export default function Time() {
    const [time, setTime] = useState([])
    
    useEffect(() => {
        const interval = setInterval(() => {
            const date = new Date();
            const pst = date.toLocaleTimeString('en-US', {
                timeZone: 'America/Los_Angeles'
            })
            const mst = date.toLocaleTimeString('en-US', {
                timeZone: 'America/Denver'
            })
            const cst = date.toLocaleTimeString('en-US', {
                timeZone: 'America/Chicago'
            })
            const est = date.toLocaleTimeString('en-US', {
                timeZone: 'America/New_York'
            })
            const arr = [{zone:"pst", time:pst}, {zone:"mst", time: mst}, {zone:"cst", time:cst}, {zone:"est", time:est}]
            setTime(arr)
        }, 1000)
        return () => clearInterval(interval)
    }, [])
    return(
        <Container fluid>
            <Row className='d-flex justify-content-center'>
                {
                    time.map((element, i) => {
                        return <Clock key={i} time={element}/>
                    })
                }
            </Row>
        </Container>
    );
}