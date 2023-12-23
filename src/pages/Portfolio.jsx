import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

import { Row, Col } from "antd";

import PortfolioBar from "../components/PortfolioBar"
import PortfolioSidemenu from "../components/PortfolioSidemenu";
import PortfolioFilter from "../components/PortfolioFilter";
import PortfolioWork from "../components/PortfolioWork";

import Loading from "../components/Loading"

function Portfolio() {

    const { school } = useParams();

    const navigate = useNavigate(); // 沒有刷新網頁的情況下更新連結

    const [ schoolIndex, setSchoolIndex ] = useState( school==="NTUT"? 1 : 0 ); // 0=NTUE 1=NTUT

    return (
        <>
            <header id='port-header'>

                < PortfolioBar getIndex={ schoolIndex } 
                    updateNTUE={ () => {setSchoolIndex(0); navigate('/portfolio/NTUE', { replace: true });} } 
                    updateNTUT={ () => {setSchoolIndex(1); navigate('/portfolio/NTUT', { replace: true });} }
                />
            
            </header>

            <body id='port-content'>

                    <PortfolioSidemenu />

                    <PortfolioFilter />

                    <div className='portright'>
                        <Row gutter={[32,32]} justify={"center"}>
                            <Col
                                key={1}
                                sm={{span:24}}
                                md={{span:12}}
                                xl={{span:8}}
                            >
                                <PortfolioWork getSchoolIndex={ schoolIndex } />
                            </Col>
                            <Col
                                key={2}
                                sm={{span:24}}
                                md={{span:12}}
                                xl={{span:8}}
                            >
                                <PortfolioWork getSchoolIndex={ schoolIndex }/>
                            </Col>
                            <Col
                                key={3}
                                sm={{span:24}}
                                md={{span:12}}
                                xl={{span:8}}
                            >
                                <PortfolioWork getSchoolIndex={ schoolIndex }/>
                            </Col>
                            <Col
                                key={4}
                                sm={{span:24}}
                                md={{span:12}}
                                xl={{span:8}}
                            >
                                <PortfolioWork getSchoolIndex={ schoolIndex }/>
                            </Col>
                            <Col
                                key={5}
                                sm={{span:24}}
                                md={{span:12}}
                                xl={{span:8}}
                            >
                                <PortfolioWork getSchoolIndex={ schoolIndex }/>
                            </Col>
                        </Row>
                    </div>

            </body>
        </>
    )
}

export default Portfolio