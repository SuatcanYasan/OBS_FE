import React, { useEffect, useState } from "react"
import "devextreme/dist/css/dx.light.css"
import PropTypes from "prop-types"
import { withRouter } from "react-router-dom"
import { withTranslation } from "react-i18next"
import { Carousel, CarouselItem, Progress } from "reactstrap"
import { getTopProductionPowerService } from "../../../services/area/areaService"

const TopProduction = (props) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [TopProduction, setTopProduction] = useState([])
    const handleClick = (index) => {
        props.history.push(`/field?id=${index}`); // Belirli bir URL'e yönlendirme yapmak için
      };
    useEffect(() => {
        getTopProductionPowerService().then((response) => {
            setTopProduction(response)
        })
    }, [])

    const next = () => {
        if (animating) return;
        const nextIndex = activeIndex === TopProduction.length - 1 ? 0 : activeIndex + 1;
        setActiveIndex(nextIndex);
    };

    const previous = () => {
        if (animating) return;
        const nextIndex = activeIndex === 0 ? TopProduction.length - 1 : activeIndex - 1;
        setActiveIndex(nextIndex);
    };
    const slides = TopProduction.map((item) => {
        return (
          <CarouselItem
            onExiting={() => setAnimating(true)}
            onExited={() => setAnimating(false)}
            key={item.src}
          >
              <div className="p-3 bg-white rounded-2">
                  <div className="text-center">
                      <div className="d-flex">
                          <div className="me-auto align-self-center">
                              <i className="bx bx-chevron-left rounded-2 font-size-24 p-2 carousel-button"
                                 onClick={previous}/>
                          </div>
                          <div>
                              <i className="bx bx-map-pin text-primary display-4" />
                          </div>
                          <div className="ms-auto align-self-center">
                              <i className="bx bx-chevron-right rounded-2 font-size-24 p-2 carousel-button"
                                 onClick={next}/>
                          </div>
                      </div>
                      <div className="font-size-16">
                          <span className="fw-semibold">{props.t(item.total_field)}:</span>
                          <span className="ms-2 monserrat fw-semibold">{item.total_value}</span>
                      </div>
                      <p style={{ color: "#02203e" }}>{props.t("Total Regions Count")}: {item?.data.length}</p>
                  </div>

                  <div className="table-responsive mt-4" style={{ maxHeight: "200px" }}>
                      <table className="table align-middle table-nowrap bg-white">
                          <tbody>
                          {
                            (item?.data || []).map((i, index) => (
                                <tr 
                                  key={index} 
                                  className="bg-white" 
                                  onClick={() => handleClick(i.id)} 
                                  style={{ cursor: 'default' }} 
                                  onMouseEnter={(e) => { 
                                    e.currentTarget.style.cursor = 'pointer'; 
                                    e.currentTarget.style.backgroundColor = '#f0f0f0'; 
                                  //  e.currentTarget.querySelector('.mb-0').style.fontSize = '110%'; // Yazı boyutunu artır
                                   // e.currentTarget.querySelector('.mb-0').style.transition = 'font-size 0.2s ease'; // Yumuşak geçiş
                                  }} 
                                  onMouseLeave={(e) => { 
                                    e.currentTarget.style.cursor = 'default'; 
                                    e.currentTarget.style.backgroundColor = 'transparent'; 
                                 //   e.currentTarget.querySelector('.mb-0').style.fontSize = '100%'; // Yazı boyutunu sıfırla
                                  }}
                                >
                                  <td style={{ width: "30%" }} className="bg-white">
                                    <p className="mb-0">{i.name}</p>
                                  </td>
                                  <td style={{ width: "25%" }} className="bg-white">
                                    <h5 className="mb-0">{i.value} {i.unit}</h5>
                                  </td>
                                  <td className="bg-white">
                                    <Progress
                                      value={i.value}
                                      max={item.max}
                                      barClassName="bg-green"
                                      className="bg-transparent progress-sm"
                                      size="sm"
                                    />
                                  </td>
                                </tr>
                              ))
                              
                          
                          }
                          </tbody>
                      </table>
                  </div>
              </div>
          </CarouselItem>
        );
    });
    return (
      <React.Fragment>
          <div>
              <Carousel
                activeIndex={activeIndex}
                next={next}
                previous={previous}
                className="dashboard-carousel"
              >
                  {slides}
              </Carousel>
          </div>
      </React.Fragment>
    )
}

TopProduction.propTypes = {
    location: PropTypes.any,
    t: PropTypes.any
}

export default withRouter(
  withTranslation()(TopProduction)
)