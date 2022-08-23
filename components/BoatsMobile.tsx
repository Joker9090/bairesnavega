import React, { useEffect, useState } from 'react';
import { usb, usc, usw } from "../utils/helpers";
import styles from '../styles/boatsMobile.module.scss';
import Tittles from './Tittles';

type Prop = {
    years: number,
    travels: number,
    passangers: number,
    reversedDrop: boolean
}

const BoatsMobile = ({ years, travels, passangers }: Prop) => {
    return (
        <div className={usw(styles, ["boatsMobileModule"], ["container-fluid", "p-0"])} >
            <div className={usb(["row"])}>
                <div className={usb(["col-12"])}>
                    <div className={usc(styles, ["picContainer"])}>
                        <div className={usc(styles, ["pic"])}>
                        </div>
                    </div>
                    <div className={usc(styles, ["dataContainer"])}>
                        <div className={usb(["row"])}>
                            <div className={usb(["col-12"])}>
                                <div className={usc(styles, ["topData"])}>
                                    <div className={usc(styles, ["data"])}>
                                        <div className={usc(styles, ["dataNumber"])}>{passangers}</div>
                                        <div className={usc(styles, ["dataText"])}>tripulantes</div>
                                    </div>
                                    <div className={usc(styles, ["data"])}>
                                        <div className={usc(styles, ["dataNumber"])}>{travels}</div>
                                        <div className={usc(styles, ["dataText"])}>viajes</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={usb(["row"])}>
                            <div className={usb(["col-12"])}>
                                <div className={usc(styles, ["botData"])} >
                                    <div className={usc(styles, ["data"])}>
                                        <div className={usc(styles, ["dataNumber"])}>{years}</div>
                                        <div className={usc(styles, ["dataText"])}>años viajando</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={usb(["row"])}>
                            <div className={usb(["col-8", "m-auto"])}>
                                <div className={usc(styles, ["text"])}>
                                    <p>
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam dui arcu, elementum tortor ut, fringilla finibus ex.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default BoatsMobile