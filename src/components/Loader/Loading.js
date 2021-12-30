import React from "react";
import Loader from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import s from './Loading.module.css'
export default function Loading(){
    return(
        <Loader
          className={s.Loader}
          type="ThreeDots"
          color="rgb(37, 131, 131)"
          height={80}
          width={80}
          timeout={5000}
        />
    )
}