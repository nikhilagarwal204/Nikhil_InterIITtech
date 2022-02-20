import React, { useState, useEffect } from "react";
import { Card, Container } from "react-bootstrap";
import Particles from "react-tsparticles";
import Tilt from "react-tilt";
import randomColor from "randomcolor";
import ReactPlayer from 'react-player/lazy';
import Pagination from 'react-bootstrap/Pagination';
import axios from 'axios';

function App() {
  const [search, setSearch] = useState("");
  const [tiltstatus, setTiltStatus] = useState(true);
  const [vdata, setvdata] = useState([]);
  const [tot, setTot] = useState(1);
  setTimeout(() => {
    setTiltStatus(false);
  }, 5000);

  async function paginFunc(num) {
    const res = await axios.get("https://dance-gallery-backend.herokuapp.com/videos?page=" + num);
    setvdata(res.data);
  }

  useEffect(async () => {
    paginFunc(1);
    const res = await axios.get("https://dance-gallery-backend.herokuapp.com/count");
    setTot(res.data);
  }, []);

  function funFilter(s) {
    setSearch(s);
    if(s==="") {
      paginFunc(1);
      setTiltStatus(true);
      setTimeout(() => {
        setTiltStatus(false);
      }, 5000);
    }
    else {
      setvdata(vdata.filter((d) => d.title.toLowerCase().includes(s.toLowerCase())));
      setTiltStatus(true);
      setTimeout(() => {
        setTiltStatus(false);
      }, 5000);
    }
  }

  let items = [];
  for (let number = 1; number <= Math.ceil(tot/6); number++) {
    items.push(
      <Pagination.Item key={number} onClick={()=>paginFunc(number)}>
        {number}
      </Pagination.Item>,
    );
  }

  const paginationBasic = (
    <div style={{display: "flex", justifyContent:"center"}}>
      <Pagination>{items}</Pagination>
    </div>
  );

  return (
    <div style={{marginBottom:"5%"}}>
      <Particles id="tsparticles" url="/particles.json" />
      <br />
      <div style={{ color: "white", textAlign: "center" }}>
        <h1 style={{color: randomColor({luminosity:'bright', format: 'rgb'})}}><em>LYRICAL DANCE GALLERY</em></h1>
        <h4><a rel="noreferrer" target="_blank" style={{textDecoration:"none", color: randomColor({luminosity:'bright', format: 'rgb'})}} href="https://www.linkedin.com/in/nikhil-agarwal-85a203189/">~ Nikhil Agarwal</a></h4>
        <br/>
      </div>
      <div style={{display:"flex", justifyContent:"center"}}>
        <input style={{textAlign:"center", border:"0", borderRadius:"50px", width:"20%", height:"35px", fontSize:"20px", color: randomColor({luminosity:'bright', format: 'rgb'})}} placeholder="Search Title..." value={search} onChange={(e)=> funFilter(e.target.value)} type="search"></input>
      </div>
      <br/><br/>
      <div>{paginationBasic}</div>
      <br/>
      <Container
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "40px",
          justifyContent: "space-evenly",
        }}
      >
        {vdata &&
          vdata.map((item) => (
            <div key={item.id} style={{ width: "48%" }}>
              {tiltstatus===true &&
                <Tilt>
                  <Card
                    style={{
                      background: randomColor({luminosity:'dark', hue: 'black', format: 'hsla'}),
                      color: "white",
                      borderRadius: "5%"
                    }}
                  >
                    <Card.Body style={{ textAlign: "center" }}>
                      <Card.Title><b>{item.name}</b></Card.Title>
                      <Card.Text>
                        <ReactPlayer controls={true} width="100%" height="350px" url={item.url}/>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                </Tilt>
              }
              {tiltstatus===false &&
                <Card
                  style={{
                    background: randomColor({luminosity:'dark', hue: 'black', format: 'hsla'}),
                    color: "white"
                  }}
                >
                  <Card.Body style={{ textAlign: "center" }}>
                    <Card.Title><b>{item.name}</b></Card.Title>
                    <Card.Text>
                      <ReactPlayer controls={true} width="100%" height="350px" url={item.url}/>
                      <p style={{color:"grey", fontWeight:"700", padding:"0", margin:"0", paddingTop:"5px"}}>{item.date}</p>
                    </Card.Text>
                  </Card.Body>
                </Card>
              }
              <br />
            </div>
          ))}
      </Container>
    </div>
  );
}

export default App;