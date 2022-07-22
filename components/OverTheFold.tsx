import React from 'react';
import { usc, usb, usw } from '../utils/helpers';
import styles from '../styles/overTheFold.module.scss';

const OverTheFold = ({ children }: any) => (
  <div className={usw(styles, ['OverTheFold'], ["container-fluid"])}>
    <div className={usb(['container', 'm-auto'])}>
      <div className={usb(["row"])}>
        <div className={usb(["col-l-12"])}>
          <div className={usc(styles, ['containerOver'])}>
            <div className={usc(styles, ["textOver"])}>
              <span className={usc(styles, ["tittleOver"])}>
                Baires Navega
              </span>
              <div className={usc(styles, ["paragraphOver"])} >
                <p>
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. <br /> Lorem Ipsum  has been the industry standard dummy text ever <br /> since the 1500s, when an unknown printer took
                </p>
              </div>
              <a href='#' className={usc(styles, ["buttonOver"])} >Reserva tu lugar</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default OverTheFold;