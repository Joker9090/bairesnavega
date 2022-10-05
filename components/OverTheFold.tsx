import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import Form from './Form';
import styles from '../styles/overTheFold.module.scss';


const OverTheFold = ({ children }: any) => (
  <div className={usw(styles, ['OverTheFold'], ["container-fluid"])}>
    <video className={usc(styles, ["video"])} height="100%" width="100%" autoPlay muted loop >
      <source  src="/video/bg.mp4" type="video/mp4" />
    </video>
    <div className={usc(styles, ["mask"])}>
      <div className={usb(['container', 'm-auto'])}>
        <div className={usw(styles, ["rowContainer"], ["row"])}>
          <div className={usb(["col-md-5", "p-0", "col-12"])}>
            <div className={usc(styles, ['containerOver'])}>
              <div className={usc(styles, ["textOver"])}>
                <h1 className={usc(styles, ["tittleOver"])}>
                  Baires Navega
                </h1>
                <div className={usc(styles, ["paragraphOver"])} >
                  <h2>
                    Experiencias en velero. <br />Viví un viaje único en el Rio de la Plata
                  </h2>
                </div>
                <a href='#form' className={usc(styles, ["arrowButton"])}>
                  <span className='icon-arrow-right'></span>
                </a>
              </div>
            </div>
          </div>
          <div id='form' className={usw(styles, ["formContainer"], ["col-md-7"])} >
            <Form />
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OverTheFold;