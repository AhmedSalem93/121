import React ,{useState} from 'react'
import'./services.css'
const Services = () => {

    const [toggle , setToggle]= useState(0)
    const toggleTape= (index) => {
        setToggle(index);
    }
  return (
    <section className="services section " id="services">
      <h2 className="sectionTitle">Services</h2>
      <span className="sectionSubtitle">What i offer</span>

      <div className="servicesContainer container grid">
        <div className="servicesContent">
          <i className="uil uil-web-grid servicesIcon"></i>
          <h3 className="servicesTitle">
            Product <br /> Designer
          </h3>

          <span className="servicesBtn" onClick={() => toggleTape(1)}>
            View More<i className="uil uil-arrow-right servicesBtnIcon"></i>
          </span>
          <div
            className={
              toggle === 1 ? " servicesModel activeModel" : "servicesModel"
            }
          >
            <div className="servicesModelContent">
              <i
                className="uil uil-times servicesModelClass"
                onClick={() => toggleTape(0)}
              ></i>
              <h3 className="servicesModelTitle">Designer</h3>
              <p className="servicesModelDescription">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="servicesModelServices grid">
                <li className="servicesModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I develop the user interface.
                  </p>
                </li>

                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I position your company brand.
                  </p>
                </li>

                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="servicesContent">
          <i className="uil uil-arrow servicesIcon"></i>
          <h3 className="servicesTitle">
            Ui/Ux <br /> Designer
          </h3>

          <span className="servicesBtn" onClick={() => toggleTape(2)}>
            View More<i className="uil uil-arrow-right servicesBtnIcon"></i>
          </span>
          <div
            className={
              toggle === 2 ? " servicesModel activeModel" : "servicesModel"
            }
          >
            <div className="servicesModelContent">
              <i
                className="uil uil-times servicesModelClass"
                onClick={() => toggleTape(0)}
              ></i>
              <h3 className="ServicesModelTitle">Ui/Ux</h3>
              <p className="ServicesModelDescription">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="servicesModelServices grid">
                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I develop the user interface.
                  </p>
                </li>

                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I position your company brand.
                  </p>
                </li>

                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="servicesContent">
          <i className="uil uil-edit servicesIcon"></i>
          <h3 className="servicesTitle">
            Visual <br /> Designer
          </h3>

          <span className="servicesBtn" onClick={() => toggleTape(3)}>
            View More<i className="uil uil-arrow-right servicesBtnIcon"></i>
          </span>
          <div
            className={
              toggle === 3 ? " servicesModel activeModel" : "servicesModel"
            }
          >
            <div className="servicesModelContent">
              <i
                className="uil uil-times servicesModelClass"
                onClick={() => toggleTape(0)}
              ></i>
              <h3 className="ServicesModelTitle">Visual Designer</h3>
              <p className="ServicesModelDescription">
                Service with more than 3 years of experience.Providing quality
                work to clients and companies.
              </p>
              <ul className="servicesModelServices grid">
                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I create ux element interactions.
                  </p>
                </li>
                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I develop the user interface.
                  </p>
                </li>

                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    I position your company brand.
                  </p>
                </li>

                <li className="servicerModelService">
                  <i className="uil uil-check-circle servicesModelIcon"></i>
                  <p className="servicesModelInfo">
                    Design and mockups of products for companies.
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Services