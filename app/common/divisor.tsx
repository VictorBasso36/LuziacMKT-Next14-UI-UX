"use client"
import styles from './divisor.module.css'


export interface Divisor{
    colorbg: string;
    colordetail: string;
    side: boolean;
    id?: string;
}
export default function Divisor({colorbg, colordetail, side, id} : Divisor )   {

  return (
    <>

        {side ?
        <div id={id} className={styles.main} style={{backgroundColor: colorbg}}>
            <div className={styles.divDetail} style={{backgroundColor: colordetail}}>

            </div>
        </div>
        :
        <div id={id} className={styles.main} style={{backgroundColor: colorbg}}>
            <div className={styles.divDetail2} style={{backgroundColor: colordetail}}>

            </div>
        </div>
        }
    </>
  )
}
