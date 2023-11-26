"use client"
import styles from './divisor.module.css'


export interface Divisor{
    colorbg: string;
    colordetail: string;
    side: boolean;
}
export default function Divisor({colorbg, colordetail, side} : Divisor )   {

  return (
    <>

        {side ?
        <div className={styles.main} style={{backgroundColor: colorbg}}>
            <div className={styles.divDetail} style={{backgroundColor: colordetail}}>

            </div>
        </div>
        :
        <div className={styles.main} style={{backgroundColor: colorbg}}>
            <div className={styles.divDetail2} style={{backgroundColor: colordetail}}>

            </div>
        </div>
        }
    </>
  )
}
