import React from 'react'

const Banner = () => {
  return (
    <div>
        <div id="carouselExampleIndicators" className="carousel slide m-auto">
        <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
            <div className="carousel-item active">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/Gateway/RDay24/Desktop-Hero-KV-3000x1200-1._CB584441569_.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/12407722031/nss/Rday/story/launchpad/dashboard/1/IP_KV_3000x1200._CB583020642_.jpg" className="d-block w-100" alt="..." />
            </div>
            <div className="carousel-item">
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/12407722031/nss/Rday/story/launchpad/dashboard/1/IP_KV_3000x1200._CB583020642_.jpg" className="d-block w-100" alt="..." />
            </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
        </button>
        </div>
    </div>
  )
}

export default Banner