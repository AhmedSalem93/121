import React , {useState} from 'react'
import "./Qualification.css";

const Qualification = () => {
  const [toggle, setToggle] = useState(1);
  const toggleTape = (index) => {
    setToggle(index);
  };

  return (
    <section className="qualification section" id='portfolio'>
      <h2 className="sectionTitle">Qualification</h2>
      <span className="sectionSubtitle">My personal journey</span>
      <div className="qualificationContainer container">
        <div className="qualificationTabs">
          <div
            className={
              toggle === 1
                ? "qualificationBtn btnFlex qualificationActive"
                : "qualificationBtn btnFlex "
            }
            onClick={() => setToggle(1)}
          >
            <i className="uil uil-graduation.cop qualificationIcon"></i>
            Education
          </div>

          <div
            className={
              toggle === 2
                ? "qualificationBtn btnFlex qualificationActive"
                : "qualificationBtn btnFlex "
            }
            onClick={() => setToggle(2)}
          >
            <i className="uil uil-briefcase-alt qualificationIcon"></i>
            Experience
          </div>
        </div>

        <div className="qualificationSection">
          <div
            className={
              toggle === 1
                ? "qualificationContent qualificationContentActive"
                : "qualificationContent"
            }
          >
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">Web Design</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>

              <div>
                <h3 className="qualificationTitle">Web Development</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>

              <div>
                <h3 className="qualificationTitle">ux exp</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
              <div>
                <h3 className="qualificationTitle">Art Director</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>
            </div>
          </div>

          <div
            className={
              toggle === 2
                ? "qualificationContent qualificationContentActive"
                : "qualificationContent"
            }
          >
            <div className="qualificationData">
              <div>
                <h3 className="qualificationTitle">Web Design</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>

              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>

              <div>
                <h3 className="qualificationTitle">Web Development</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>

              <div>
                <h3 className="qualificationTitle">ux exp</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
            </div>

            <div className="qualificationData">
              <div></div>
              <div>
                <span className="qualificationRounder"></span>
                <span className="qualificationLine"></span>
              </div>
              <div>
                <h3 className="qualificationTitle">Art Director</h3>
                <span className="qualificationSubtitle">Spain-Institute</span>
                <div className="qualificationCalender">
                  <i className="uil uil-calender-alt"></i>
                  2021- present
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Qualification;