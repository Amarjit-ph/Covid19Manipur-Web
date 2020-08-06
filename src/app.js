import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';

import './styles/style.scss';
import Layout from './components/Layout'


const App = () => {
    let Data;

    var d = new Date();
    const [Confirm, setConfirm] = useState('');
    const [Recovered, setRecovered] = useState('');
    const [Active, setActive] = useState('');
    const [Tested, setTested] = useState('');
    const [Dead, setDead] = useState('')

    const [Tconfirm, setTconfrim] = useState(0)
    const [Trecovered, setTrecovered] = useState(0)
    const [Tdead, setTdead] = useState(0)
    const [Ttested, setTtested] = useState("No Data")
    const [update, setupdate] = useState('')

    const [Delta, setDelta] = useState(false)

    //Bishnupur
    const [BSpop, setBSpop] = useState('')
    const [BSrec, setBSrec] = useState('')
    const [BScon, setBScon] = useState('')

    //Chandel
    const [CHpop, setCHpop] = useState('')
    const [CHrec, setCHrec] = useState('')
    const [CHcon, setCHcon] = useState('')

    //Churachandpur
    const [CHUpop, setCHUpop] = useState('')
    const [CHUrec, setCHUrec] = useState('')
    const [CHUcon, setCHUcon] = useState('')

    //Imphal East
    const [IEpop, setIEpop] = useState('')
    const [IErec, setIErec] = useState('')
    const [IEcon, setIEcon] = useState('')

    //Imphal West
    const [IWpop, setIWpop] = useState('')
    const [IWrec, setIWrec] = useState('')
    const [IWcon, setIWcon] = useState('')

    //Jiribam
    const [Jpop, setJpop] = useState('')
    const [Jrec, setJrec] = useState('')
    const [Jcon, setJcon] = useState('')

    //Kakching KAK
    const [KAKpop, setKAKpop] = useState('')
    const [KAKrec, setKAKrec] = useState('')
    const [KAKcon, setKAKcon] = useState('')

    //Kamjong KAM
    const [KAMpop, setKAMpop] = useState('')
    const [KAMrec, setKAMrec] = useState('')
    const [KAMcon, setKAMcon] = useState('')

    //Kangpokpi KANG
    const [KANGpop, setKANGpop] = useState('')
    const [KANGrec, setKANGrec] = useState('')
    const [KANGcon, setKANGcon] = useState('')

    //Noney NON
    const [NONpop, setNONpop] = useState('')
    const [NONrec, setNONrec] = useState('')
    const [NONcon, setNONcon] = useState('')

    //Pherzawl PHER
    const [PHERpop, setPHERpop] = useState('')
    const [PHERrec, setPHERrec] = useState('')
    const [PHERcon, setPHERcon] = useState('')

    //Senapati SEN
    const [SENpop, setSENpop] = useState('')
    const [SENrec, setSENrec] = useState('')
    const [SENcon, setSENcon] = useState('')

    //Tamenglong TAM
    const [TAMpop, setTAMpop] = useState('')
    const [TAMrec, setTAMrec] = useState('')
    const [TAMcon, setTAMcon] = useState('')

    //Tengnoupal TEN
    const [TENpop, setTENpop] = useState('')
    const [TENrec, setTENrec] = useState('')
    const [TENcon, setTENcon] = useState('')

    //Thoubal THOU
    const [THOUpop, setTHOUpop] = useState('')
    const [THOUrec, setTHOUrec] = useState('')
    const [THOUcon, setTHOUcon] = useState('')

    //Ukhrul UKH
    const [UKHpop, setUKHpop] = useState('')
    const [UKHrec, setUKHrec] = useState('')
    const [UKHcon, setUKHcon] = useState('')


    useEffect(() => {
        fetch("https://api.covid19india.org/v4/data.json")
            .then(res => res.json())
            .then(data => Data = data)
            .then(data => {
                //console.log(Data);

                setConfirm(Data.MN.total.confirmed);
                setRecovered(Data.MN.total.recovered);
                setActive(Data.MN.total.confirmed - Data.MN.total.recovered);
                setTested(Data.MN.total.tested);
                setDead(Data.MN.total.deceased);

                try {
                    if (Data.MN.delta.confirmed) {
                        setTconfrim(Data.MN.delta.confirmed)
                    }

                    if (Data.MN.delta.recovered) {
                        setTrecovered(Data.MN.delta.recovered)

                    }
                    if (Data.MN.delta.tested) {
                        setTtested(Data.MN.delta.tested)

                    }
                    if (Data.MN.delta.deceased) {
                        setTdead(Data.MN.delta.deceased)
                    }
                    setDelta(true);
                } catch (exception) {
                    setDelta(false);
                    // do something else
                }



                setupdate(Data.MN.meta.tested.last_updated)

                //Bishnupur BS
                setBScon(Data.MN.districts.Bishnupur.total.confirmed);
                setBSrec(Data.MN.districts.Bishnupur.total.recovered);
                //setBSpop(Data.MN.districts.Bishnupur.meta.population);

                //Chandel CH
                setCHcon(Data.MN.districts.Chandel.total.confirmed);
                setCHrec(Data.MN.districts.Chandel.total.recovered);
                //setCHpop(Data.MN.districts.Chandel.meta.population);

                //Churachandpur CHU
                setCHUcon(Data.MN.districts.Churachandpur.total.confirmed);
                setCHUrec(Data.MN.districts.Churachandpur.total.recovered);
                //setCHUpop(Data.MN.districts.Churachandpur.meta.population);

                //Imphal East IE
                setIEcon(Data.MN.districts['Imphal East'].total.confirmed);
                setIErec(Data.MN.districts['Imphal East'].total.recovered);
                //setIEpop(Data.MN.districts['Imphal East'].meta.population);

                //Imphal West IW
                setIWcon(Data.MN.districts['Imphal West'].total.confirmed);
                setIWrec(Data.MN.districts['Imphal West'].total.recovered);
                //setIWpop(Data.MN.districts['Imphal West'].meta.population);

                //Jiribam J
                setJcon(Data.MN.districts.Jiribam.total.confirmed);
                setJrec(Data.MN.districts.Jiribam.total.recovered);
                //setJpop(Data.MN.districts.Jiribam.meta.population);

                //Kakching KAK
                setKAKcon(Data.MN.districts.Kakching.total.confirmed);
                setKAKrec(Data.MN.districts.Kakching.total.recovered);
                //setKAKpop(Data.MN.districts.Kakching.meta.population);

                //Kamjong KAM
                setKAMcon(Data.MN.districts.Kamjong.total.confirmed);
                setKAMrec(Data.MN.districts.Kamjong.total.recovered);
                //setKAMpop(Data.MN.districts.Kamjong.meta.population);

                //Kangpokpi KANG
                setKANGcon(Data.MN.districts.Kangpokpi.total.confirmed);
                setKANGrec(Data.MN.districts.Kangpokpi.total.recovered);
                //setKANGpop(Data.MN.districts.Kangpokpi.meta.population);

                //Noney NON
                setNONcon(Data.MN.districts.Noney.total.confirmed);
                setNONrec(Data.MN.districts.Noney.total.recovered);
                //setNONpop(Data.MN.districts.Noney.meta.population);

                //Pherzawl PHER
                setPHERcon(Data.MN.districts.Pherzawl.total.confirmed);
                setPHERrec(Data.MN.districts.Pherzawl.total.recovered);
                //setPHERpop(Data.MN.districts.Pherzawl.meta.population);

                //Senapati SEN
                setSENcon(Data.MN.districts.Senapati.total.confirmed);
                setSENrec(Data.MN.districts.Senapati.total.recovered);
                //setSENpop(Data.MN.districts.Senapati.meta.population);

                //Tamenglong TAM
                setTAMcon(Data.MN.districts.Tamenglong.total.confirmed);
                setTAMrec(Data.MN.districts.Tamenglong.total.recovered);
                //setTAMpop(Data.MN.districts.Tamenglong.meta.population);

                //Tengnoupal TEN
                setTENcon(Data.MN.districts.Tengnoupal.total.confirmed);
                setTENrec(Data.MN.districts.Tengnoupal.total.recovered);
                //setTENpop(Data.MN.districts.Tengnoupal.meta.population);

                //Thoubal THOU
                setTHOUcon(Data.MN.districts.Thoubal.total.confirmed);
                setTHOUrec(Data.MN.districts.Thoubal.total.recovered);
                //setTHOUpop(Data.MN.districts.Thoubal.meta.population);

                //Ukhrul UKH
                setUKHcon(Data.MN.districts.Ukhrul.total.confirmed);
                setUKHrec(Data.MN.districts.Ukhrul.total.recovered);
                //setUKHpop(Data.MN.districts.Ukhrul.meta.population);
            }
            );
    }, [])

    return (
        <div>

            <div className='Header'>

                <img src="https://res.cloudinary.com/dfpnwhdht/image/upload/v1596191016/virus_dcthhk.svg" />
                <div>
                    <p className='T' style={{ marginBottom: '5px' }}><b>COVID <span>19</span></b></p>
                    <p className='S' style={{ marginBottom: 0 }}><b>MANIPUR</b></p>
                </div>
            </div>
            <div className='Description'>
                <p><b>Corona Virus Tracker for Manipur is Developed using data from Directorate of Information & Public Relations Manipur.</b></p>
            </div>

            <Layout>
                <div className='state'>
                    <div className='A'>
                        <span className='N1'><b>{Active - Dead}</b></span>
                        <span className='T1'><b>Active</b></span>
                    </div>

                    <div>
                        <span className='N2'><b>{Confirm}</b></span>
                        <span className='T2'><b>Confirmed</b></span>
                    </div>

                    <div>
                        <span className='N3'><b>{Recovered}</b></span>
                        <span className='T3'><b>Recovered</b></span>
                    </div>

                    <div>
                        <span className='N5'><b>{Dead}</b></span>
                        <span className='T5'><b>Deaths</b></span>
                    </div>

                    <div>
                        <span className='N4'><b>{Tested}</b></span>
                        <span className='T4'><b>Tested</b></span>
                    </div>

                    <br />
                </div>
            </Layout>



            {
                Delta ?
                    <div>
                        <div className='district_head'>
                            <p><b>DATE<br />{d.getDate()}-{d.getMonth() + 1}-{d.getFullYear()}</b></p>
                        </div>
                        <Layout>
                            <div className='today'>
                                <div>
                                    <span className='N2'><b>{Tconfirm}</b></span>
                                    <span className='T2'><b>Confirmed</b></span>
                                </div>

                                <div>
                                    <span className='N3'><b>{Trecovered}</b></span>
                                    <span className='T3'><b>Recovered</b></span>
                                </div>

                                <div>
                                    <span className='N5'><b>{Tdead}</b></span>
                                    <span className='T4'><b>Deaths</b></span>
                                </div>
                            </div>
                        </Layout>
                    </div>
                    :
                    <div></div>
            }





            <div className='district_head'>
                <p><b>DISTRICT<br />LEVEL</b></p>
            </div>

            <Layout>
                <div className='District_level'>
                    <div>
                        <p><b>Bishnupur</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{BScon}</b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{BSrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Chandel</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{CHcon} </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{CHrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Churachandpur</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{CHUcon} </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{CHUrec}</b> </p>
                    </div>
                    <div>
                        <p><b>Imphal East</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{IEcon} </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{IErec}</b> </p>
                    </div>
                    <div>
                        <p><b>Imphal West</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{IWcon} </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{IWrec}</b> </p>
                    </div>
                    <div>
                        <p><b>Jiribam</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{Jcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{Jrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Kakching</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{KAKcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{KAKrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Kamjong</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{KAMcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{KAMrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Kangpokpi</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{KANGcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{KANGrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Noney</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{NONcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{NONrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Pherzawl</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{PHERcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{PHERrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Senapati</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{SENcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{SENrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Tamenglong</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{TAMcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{TAMrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Tengnoupal</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{TENcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{TENrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Thoubal</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{THOUcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{THOUrec}</b> </p>
                    </div>

                    <div>
                        <p><b>Ukhrul</b></p>
                        <p><span style={{ color: '#BF1D1D' }}>C</span> <b>{UKHcon}
                        </b>  <span style={{ color: '#1DAA1D' }}>R</span> <b>{UKHrec}</b> </p>
                    </div>

                </div>
            </Layout>

            <div className='Footer'>
                <p><b>DESIGN & DEVELOPED</b></p><br />
                <a href='https://www.instagram.com/amarjit_pheiroijam' >Amarjit Pheiroijam</a>
            </div >

        </div >
    )
}


//console.log(process.env.APIKEY1);
//console.log(process.env.APIKEY2);
ReactDOM.render(<App />, document.getElementById('app'));