import { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import './App.css';
import Time from './components/Clock/Time';
import { WrapperContext } from './components/Context/WrapperContext';

function App() {
  const [blue, setBlue] = useState(0)
  const [yellow, setYellow] = useState(0)
  const [black, setBlack] = useState(0)
  const [zone, setZone] = useState('')
  const [switching, setSwitch] = useState(true)

  
  const date = new Date();
  const pst = date.toLocaleString('en-GB', {
      timeZone: 'America/Los_Angeles'
  })

  const backgroundStyle = {
    background: `linear-gradient(180deg, rgba(2,0,36,1) ${black}%, rgba(138,152,1,0.50) ${yellow}%, rgba(0,177,157,0.82) ${blue}%)`
  }

  useEffect(() => {
    setZone(pst)
    initialPercent()
  }, [zone])


  useEffect(() => {
    let timing;
    if(zone !== ""){
      const timeArr = zone.split(/[\s:]/);
      let time = `${timeArr[1]}.`
      for(let i = 2; i < timeArr.length; i++) {
        if(parseInt(timeArr[i]) < 10) {
          time += `0${timeArr[i]}`
        } else {
          time += timeArr[i]
        }
      }
      time = parseFloat(time)
      timing = setInterval(() => {
        backgroundPercent(time)
      }, 1000)
    }
    return () => clearInterval(timing)
  }, [zone, blue, yellow, black, switching])

  const initialPercent = () => {
    if(zone !== "") {
      const timeArr = zone.split(/[\s:]/);
      let time = `${timeArr[1]}.`
      for(let i = 2; i < timeArr.length; i++) {
        if(parseInt(timeArr[i]) < 10) {
          time += `0${timeArr[i]}`
        } else {
          time += timeArr[i]
        }
      }
      time = parseFloat(time)
      console.log(time)
      if(time > 6 && time <= 10){
        time -= 6
        setBlue(((time*60)/240)*100)
      } else if (time > 10 && time <= 14) {
        time -= 10
        setBlue(((time*60)/240)*100)
        setYellow(((time*60)/240)*100)
      } else if (time > 14 && time <=18 ) {
        time -= 14
        setBlue(100)
        setBlack(((time*60)/240)*100)
        setYellow(((time*60)/240)*100)
      } else if (time > 18 && time <= 22) {
        setBlack(((time*60)/240)*100)
        setBlue(100)
        setYellow(100)
      } else if (time > 22) {
        setBlack(100)
        setBlue(100)
        setYellow(100)
      }
    }
  }

  const backgroundPercent = (time) => {
    if(switching){
      if (blue < 100) {
        setBlue(blue+1/144)
      } else if (blue >= 100 && yellow < 100) {
        setYellow(yellow + 1/144)
      } else if (yellow >= 100 && black < 100) {
        setBlack(black + 1/144)
      } else if (black >= 100) {
        setSwitch(false)
      }
    }
    if (!switching) {
      if (black >= 0) {
        setBlack(black - 1/144)
      } else if (yellow >= 0) {
        setYellow(yellow - 1/144)
      } else if (blue >= 0) {
        setBlue(blue - 1/144)
      } else if (blue <= 0) {
        setSwitch(true)
      }
    }
    
  }

  return (
    <WrapperContext.Provider value={{zone, setZone}}>
      <Container fluid className='App' style={backgroundStyle}>
        <Row>hi</Row>
        <Time/>
      </Container>
    </WrapperContext.Provider>
  );
}


export default App;
