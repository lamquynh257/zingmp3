import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getSongs } from "../../redux/songSlice";
import axios from "axios";
import Animation from "../animation";
import AudioPlayer, { RHAP_UI } from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';
import "./home.css";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const chartSong = useSelector((state) => state.Songs.Songs);
  // console.log(chartSong);
  const [currentSong, setCurrentSong] = useState(0)
  useEffect(() => {
    dispatch(getSongs())
    getCurrentSong(currentSong)
  }, []);
  const getCurrentSong = async (idSong) => {
   await axios({
      method: "POST",
      url: "http://localhost:3001/api/getsong",
      data: {
        idSong: chartSong[idSong].encodeId || "ZZDI9B7U",
      },
    })
      .then((res) => {
        // console.log(res.data.data[128])
        localStorage.setItem("encodeId",chartSong[idSong].encodeId)
        localStorage.setItem("title",chartSong[idSong].album.title)
        setCurrentSong(res.data.data[128])
      })
      .catch((e) => {
        // console.log(e.response.data.message)
      });
  }

  const handleClickNext = () => {
    const index = chartSong.findIndex(x => x.encodeId == localStorage.getItem("encodeId"));
   //  console.log(index)
   //  console.log(currentIndex)
    
    if (index == chartSong.length - 1){
     getCurrentSong(0)
    }else{
     getCurrentSong(index + 1)
 
    }
   }
   const handleClickBack = () => {
     const index = chartSong.findIndex(x => x.encodeId == localStorage.getItem("encodeId"));
     // console.log(index)
    //  console.log(currentIndex)
     
     if (index == 0){
      getCurrentSong(chartSong.length - 1)
     }else{
      getCurrentSong(index - 1)
  
     }
    }

  return (
    <>
      <Animation>
  <div className="fh fw row ch cv">
    <div className="ant-row navbar " style={{transform: 'translateY(0px)', opacity: 1, rowGap: 0}}>
      <div id="back" />
      <div className="mobile-navbar" id="content"><img className="logo" src="%PUBLIC_URL%/static/media/logo.0cbf9e63b4a021661126.gif" alt height={100} />
        <div className="f1" /><button className="stroke-white">Sign up</button>
        <div>
          <div className="button m mh-s menu">
            <div><svg xmlns="http://www.w3.org/2000/svg" width={52} height={52} viewBox="0 0 52 52" fill="none" className="injected-svg" data-src="./static/media/menu.06822fb37dcd4f184d4e70803411d8e2.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <rect width={52} height={52} rx={26} fill="white" fillOpacity="0.1" />
                <rect x="0.5" y="0.5" width={51} height={51} rx="25.5" stroke="white" strokeOpacity="0.2" />
                <path d="M36 18H27" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 26L17 26" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
                <path d="M36 34L20 34" stroke="white" strokeWidth={3} strokeLinecap="round" strokeLinejoin="round" />
              </svg></div>
          </div>
        </div>
      </div>
      <div id="content" className="ant-row ant-row-space-between ant-row-middle desktop-navbar" style={{rowGap: 0}}><img src="./static/media/logo.0cbf9e63b4a021661126.gif" alt height={100} />
        <div className="row cv g-m "><button type="button" role="switch" aria-checked="true" className="ant-switch switch mh-s ant-switch-checked">
            <div className="ant-switch-handle" /><span className="ant-switch-inner"><img alt src="./static/media/night.5e06c080aafe377b5acdc9d515f8def6.svg" style={{width: 12, height: 12}} /></span>
          </button>
          <button className="stroke-white signup">Sign up</button><img src="./icons/share.svg" alt className="button s iconsMenu" /><img src="./icons/fullscreen.svg" alt className="button s iconsMenu" />
          <div className="relative iconsMenu"><img src="./icons/menu-3.svg" alt className="button s" />
            <div className="settingsMenu" style={{display: 'none'}}><a href="?auth=login" className="entry">
                <div className="row cv g-m"><img src="./icons/profile.svg" alt className="icon xs" />
                  <p>Login</p>
                </div>
              </a><a href="?pricing=true" className="entry">
                <div className="row cv g-m"><img src="./icons/settings.svg" alt className="icon xs" />
                  <p>Pricing</p>
                </div>
              </a>
              <div className="row cv g-m entry"><img src="./icons/settings_h.svg" alt className="icon xs" />
                <p>General settings</p>
              </div>
              <div className="row cv g-m entry"><img src="./icons/message.svg" alt className="icon xs" />
                <p>Contact us</p>
              </div>
              <div className="row cv g-m entry"><img src="./icons/settings_h.svg" alt className="icon xs" />
                <p>How it works</p>
              </div>
              <div className="row cv g-m entry"><img src="./icons/spotify2.svg" alt className="icon xs" />
                <p>Playlist</p>
              </div>
              <div className="row cv g-m entry"><img src="./icons/playlist.svg" alt className="icon xs" />
                <p>Submit music</p>
              </div>
              <div className="row cv g-m entry"><img src="./icons/info.svg" alt className="icon xs" />
                <p>About us</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="menu-mobile " style={{left: '-100vw'}}>
        <div className="content scrollable"><img className="logo" src="./static/media/logo.0cbf9e63b4a021661126.gif" alt width="80%" />
          <div className="col mv-l"><button className="clear">How it works</button><button className="clear">Pricing</button><button className="clear">About Us</button><button className="clear">Spotify</button><button className="clear">Contact us</button><button className="clear relative">Merch <p className="new-tag">New!</p></button></div>
          <button>Login</button>
          <div className="ant-row ant-row-middle mv-l" style={{rowGap: 0}}>
            <p className="st white">Music by - lofi.co 2021 ©</p>
          </div>
        </div>
        <div>
          <div className="button m m-m exit">
            <div><svg xmlns="http://www.w3.org/2000/svg" width={13} height={12} viewBox="0 0 13 12" fill="none" className="injected-svg" data-src="./static/media/close-popup.e9f520ae48d76f20c814e11d4313563b.svg" xmlnsXlink="http://www.w3.org/1999/xlink">
                <path d="M0.760185 11.7339C0.874895 11.8486 1.01046 11.9242 1.16689 11.9607C1.32331 12.0024 1.47713 12.0024 1.62834 11.9607C1.78476 11.9242 1.92033 11.8512 2.03504 11.7417L6.50093 7.26796L10.9746 11.7417C11.1415 11.9085 11.3501 11.992 11.6003 11.992C11.8506 11.9972 12.0644 11.9111 12.2417 11.7339C12.4137 11.5566 12.4998 11.3428 12.4998 11.0925C12.4998 10.8422 12.4164 10.6337 12.2495 10.4668L7.77578 5.99311L12.2495 1.52722C12.4164 1.36036 12.4998 1.1518 12.4998 0.901521C12.505 0.646029 12.419 0.432251 12.2417 0.260185C12.0644 0.0881186 11.8506 0.00208565 11.6003 0.00208565C11.3501 0.00208565 11.1415 0.0855116 10.9746 0.252363L6.50093 4.72608L2.03504 0.252363C1.92033 0.142867 1.78476 0.0698692 1.62834 0.0333704C1.47713 -0.00834259 1.32331 -0.0109497 1.16689 0.0255492C1.01046 0.062048 0.874895 0.14026 0.760185 0.260185C0.650688 0.374895 0.575083 0.510462 0.53337 0.666886C0.496872 0.82331 0.496872 0.979733 0.53337 1.13616C0.575083 1.28737 0.650688 1.41772 0.760185 1.52722L5.22608 5.99311L0.760185 10.4668C0.650688 10.5763 0.575083 10.7093 0.53337 10.8657C0.491657 11.0169 0.48905 11.1707 0.525549 11.3272C0.567262 11.4888 0.645474 11.6244 0.760185 11.7339Z" fill="white" />
              </svg></div>
          </div>
        </div>
      </div>
    </div>
    <div className="ant-row fh fw oh relative" style={{rowGap: 0}}>
      <div className="background-video video-player" style={{zIndex: 10, opacity: 1, width: 640, height: 360}}><video src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/scenes/book-cafe/Exterior+-+Day.mp4" preload="auto" loop playsInline webkit-playsinline x5-playsinline style={{width: '100%', height: '100%'}} autoPlay /></div>
      <div className="background-video video-player" style={{zIndex: 10, opacity: 0, width: 640, height: 360}} />
      <div className="background-cta">
        <div className="popover-action" style={{left: '6%', top: '40%'}}>
          <div className="circle-hover">
            <div />
          </div>
          <div className="ant-col col ch popover-card white-content">
            <h6 className="mh-m">City Rain</h6>
          </div>
        </div>
        <div className="popover-action" style={{left: '30%', top: '65%'}}>
          <div className="circle-hover">
            <div />
          </div>
          <div className="ant-col col ch popover-card white-content">
            <h6 className="mh-m">City Traffic</h6>
          </div>
        </div>
        <div className="popover-action" style={{left: '60%', top: '60%'}}>
          <div className="circle-hover" style={{opacity: 1}}>
            <div />
          </div>
          <div className="ant-row popover-card white-content" style={{rowGap: 0}}>
            <p className="popover-label sb">Enter</p>
          </div>
        </div>
      </div>
      <div style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/tracks/chill/chill_23.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
    </div>
    <div style={{display: 'none'}}>
      <div id="fire_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/campfire.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="forest_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/forest_night.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="rain_forest_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_forest.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="waves_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/waves.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="fan_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/fan.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="city_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/city_traffic.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="storm_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/summer_storm.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="rain_street_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/rain_city.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="river_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/river.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="birds_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/birds.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="people_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/people_talk_inside.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="wind_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/wind.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="ocean_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/ocean.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="fireplace_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/fireplace.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="snow_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/snow.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="keyboard_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/keyboard.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="underwater_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/underwater.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
      <div id="space_1" style={{width: 640, height: 360}}><audio src="https://s3.us-east-2.amazonaws.com/lofi.co/lofi.co/effects/deepspace.mp3" preload="auto" style={{width: '100%', height: '100%'}} /></div>
    </div>
    <div className="ant-row bottom-bar" style={{transform: 'translateY(0px)', opacity: 1, rowGap: 0}}>
    <AudioPlayer 
    customControlsSection={
      [
        <div className="title--song">{localStorage.getItem("title")}</div>,
        RHAP_UI.ADDITIONAL_CONTROLS,
        RHAP_UI.MAIN_CONTROLS,
        RHAP_UI.VOLUME_CONTROLS,
      ]}
    onClickNext={handleClickNext}
    onClickPrevious={handleClickBack}
    autoPlay 
    className="audioPlay" 
    src={currentSong} 
    showSkipControls={true} 
    showJumpControls={false} 
    layout="stacked-reverse"/>

      <div id="back" />

      {/* <div id="content" className="ant-row ant-row-center ant-row-middle" style={{rowGap: 0}}>
        <div className="ant-row ant-row-middle absolute label-div slide-left a3" style={{rowGap: 0}}>
          <p className="st white">Music by - lofi.co 2021 ©</p>
        </div><img src="./static/media/previous.3b3474665d6b8d95bb081b41d67270fe.svg" className="button m" alt /><img className="button mh-m" src="./static/media/play.18d46dd90ca12db32170bea8b2d46404.svg" alt style={{borderRadius: 100}} /><img src="./static/media/next.9551d6f2d952cb6759a725aac878ab09.svg" className="button m" alt />
      </div> */}
    </div>
    <div className="ant-row ant-row-end ant-row-middle fillh fw absolute popup-container" style={{opacity: 1, rowGap: 0}}>
      <div>
        <div className="ant-col col ch lateral-menu">
          <div className="f1 menu-item top ">
            <div className="lf-player-container">
              <div id="lottie" style={{background: 'transparent', margin: '2px 2px 0px auto', outline: 'none', overflow: 'hidden', transition: 'none 200ms ease 0s', pointerEvents: 'none', opacity: '0.2', filter: 'brightness(2)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={100} height={100} preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
                  <defs>
                    <clipPath id="__lottie_element_2">
                      <rect width={100} height={100} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_2)">
                    <g transform="matrix(1,0,0,1,39.84600067138672,41.6150016784668)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,10.75,1.2039999961853027)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M-9.545000076293945,-0.9549999833106995 C-10.071999549865723,-0.9549999833106995 -10.5,-0.5270000100135803 -10.5,0.0010000000474974513 C-10.5,0.527999997138977 -10.071999549865723,0.9549999833106995 -9.545000076293945,0.9549999833106995 C-9.545000076293945,0.9549999833106995 9.545999526977539,0.9549999833106995 9.545999526977539,0.9549999833106995 C10.072999954223633,0.9549999833106995 10.5,0.527999997138977 10.5,0.0010000000474974513 C10.5,-0.5270000100135803 10.072999954223633,-0.9549999833106995 9.545999526977539,-0.9549999833106995 C9.545999526977539,-0.9549999833106995 -9.545000076293945,-0.9549999833106995 -9.545000076293945,-0.9549999833106995z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,39.84600067138672,48.540000915527344)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,10.75,1.2039999961853027)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M-9.545000076293945,-0.9549999833106995 C-10.071999549865723,-0.9549999833106995 -10.5,-0.5270000100135803 -10.5,0.0010000000474974513 C-10.5,0.527999997138977 -10.071999549865723,0.9549999833106995 -9.545000076293945,0.9549999833106995 C-9.545000076293945,0.9549999833106995 9.545999526977539,0.9549999833106995 9.545999526977539,0.9549999833106995 C10.072999954223633,0.9549999833106995 10.5,0.527999997138977 10.5,0.0010000000474974513 C10.5,-0.5270000100135803 10.072999954223633,-0.9549999833106995 9.545999526977539,-0.9549999833106995 C9.545999526977539,-0.9549999833106995 -9.545000076293945,-0.9549999833106995 -9.545000076293945,-0.9549999833106995z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,39.84600067138672,55.3589973449707)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,10.75,1.2050000429153442)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M-9.545000076293945,-0.9549999833106995 C-10.071999549865723,-0.9549999833106995 -10.5,-0.5270000100135803 -10.5,0.0010000000474974513 C-10.5,0.527999997138977 -10.071999549865723,0.9549999833106995 -9.545000076293945,0.9549999833106995 C-9.545000076293945,0.9549999833106995 9.545999526977539,0.9549999833106995 9.545999526977539,0.9549999833106995 C10.072999954223633,0.9549999833106995 10.5,0.527999997138977 10.5,0.0010000000474974513 C10.5,-0.5270000100135803 10.072999954223633,-0.9549999833106995 9.545999526977539,-0.9549999833106995 C9.545999526977539,-0.9549999833106995 -9.545000076293945,-0.9549999833106995 -9.545000076293945,-0.9549999833106995z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,50.429691314697266,38.909000396728516)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,3.749000072479248,3.75)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M0.004999999888241291,-3.5 C-1.6549999713897705,-3.5 -3.0450000762939453,-2.3450000286102295 -3.4049999713897705,-0.7940000295639038 C-3.4049999713897705,-0.7940000295639038 -3.499000072479248,-0.3059999942779541 -3.4790000915527344,0.18000000715255737 C-3.4570000171661377,0.7170000076293945 -3.313999891281128,1.1150000095367432 -3.313999891281128,1.1150000095367432 C-2.8480000495910645,2.500999927520752 -1.5379999876022339,3.5 0.004999999888241291,3.5 C1.5479999780654907,3.5 2.8580000400543213,2.500999927520752 3.3239998817443848,1.1150000095367432 C3.3239998817443848,1.1150000095367432 3.4609999656677246,0.6269999742507935 3.4839999675750732,0.11999999731779099 C3.499000072479248,-0.2160000056028366 3.4140000343322754,-0.7940000295639038 3.4140000343322754,-0.7940000295639038 C3.055000066757202,-2.3450000286102295 1.6649999618530273,-3.5 0.004999999888241291,-3.5z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,41.76766586303711,45.887001037597656)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,3.749000072479248,3.75)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M0.004999999888241291,-3.5 C-1.6549999713897705,-3.5 -3.0450000762939453,-2.3450000286102295 -3.4049999713897705,-0.7940000295639038 C-3.4049999713897705,-0.7940000295639038 -3.499000072479248,-0.3059999942779541 -3.4790000915527344,0.18000000715255737 C-3.4570000171661377,0.7170000076293945 -3.313999891281128,1.1150000095367432 -3.313999891281128,1.1150000095367432 C-2.8480000495910645,2.500999927520752 -1.5379999876022339,3.5 0.004999999888241291,3.5 C1.5479999780654907,3.5 2.8580000400543213,2.500999927520752 3.3239998817443848,1.1150000095367432 C3.3239998817443848,1.1150000095367432 3.4609999656677246,0.6269999742507935 3.4839999675750732,0.11999999731779099 C3.499000072479248,-0.2160000056028366 3.4140000343322754,-0.7940000295639038 3.4140000343322754,-0.7940000295639038 C3.055000066757202,-2.3450000286102295 1.6649999618530273,-3.5 0.004999999888241291,-3.5z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,50.406497955322266,52.917999267578125)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,3.749000072479248,3.75)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M0.004999999888241291,-3.5 C-1.6549999713897705,-3.5 -3.0450000762939453,-2.3450000286102295 -3.4049999713897705,-0.7940000295639038 C-3.4049999713897705,-0.7940000295639038 -3.499000072479248,-0.3059999942779541 -3.4790000915527344,0.18000000715255737 C-3.4570000171661377,0.7170000076293945 -3.313999891281128,1.1150000095367432 -3.313999891281128,1.1150000095367432 C-2.8480000495910645,2.500999927520752 -1.5379999876022339,3.5 0.004999999888241291,3.5 C1.5479999780654907,3.5 2.8580000400543213,2.500999927520752 3.3239998817443848,1.1150000095367432 C3.3239998817443848,1.1150000095367432 3.4609999656677246,0.6269999742507935 3.4839999675750732,0.11999999731779099 C3.499000072479248,-0.2160000056028366 3.4140000343322754,-0.7940000295639038 3.4140000343322754,-0.7940000295639038 C3.055000066757202,-2.3450000286102295 1.6649999618530273,-3.5 0.004999999888241291,-3.5z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg></div>
            </div>
            <div className="divisor" />
          </div>
          <div className="f1 menu-item ">
            <div className="lf-player-container">
              <div id="lottie" style={{background: 'transparent', margin: '0px 4px 0px auto', outline: 'none', overflow: 'hidden', transition: 'none 200ms ease 0s', pointerEvents: 'none', opacity: '0.2', filter: 'brightness(2)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={100} height={100} preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
                  <defs>
                    <clipPath id="__lottie_element_22">
                      <rect width={100} height={100} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_22)">
                    <g transform="matrix(1,0,0,1,42.48100280761719,42.82899856567383)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,4.78000020980835,3.4019999504089355)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M4.53000020980835,-3.1519999504089355 C4.53000020980835,-3.1519999504089355 4.53000020980835,3.1519999504089355 4.53000020980835,3.1519999504089355 C4.53000020980835,3.1519999504089355 -4.53000020980835,3.1519999504089355 -4.53000020980835,3.1519999504089355 C-3.5739998817443848,0.20399999618530273 -1.1449999809265137,-2.055999994277954 1.9010000228881836,-2.7720000743865967 C2.7669999599456787,-2.9760000705718994 3.6470000743865967,-3.1029999256134033 4.53000020980835,-3.1519999504089355z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,53.21500015258789,42.83000183105469)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,5.14300012588501,6.758999824523926)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M-4.89300012588501,-6.508999824523926 C-4.89300012588501,-6.508999824523926 -4.89300012588501,6.508999824523926 -4.89300012588501,6.508999824523926 C-4.89300012588501,6.508999824523926 4.559999942779541,6.508999824523926 4.559999942779541,6.508999824523926 C4.89300012588501,4.521999835968018 4.828999996185303,2.4860000610351562 4.368000030517578,0.5180000066757202 C3.5959999561309814,-2.7809998989105225 1.0260000228881836,-5.35699987411499 -2.265000104904175,-6.130000114440918 C-3.13100004196167,-6.334000110626221 -4.011000156402588,-6.460000038146973 -4.89300012588501,-6.508999824523926z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,53.215999603271484,57.527000427246094)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,4.7789998054504395,3.4019999504089355)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M4.53000020980835,-3.1519999504089355 C4.53000020980835,-3.1519999504089355 -4.53000020980835,-3.1519999504089355 -4.53000020980835,-3.1519999504089355 C-4.53000020980835,-3.1519999504089355 -4.53000020980835,3.1519999504089355 -4.53000020980835,3.1519999504089355 C-3.6480000019073486,3.1029999256134033 -2.7679998874664307,2.9769999980926514 -1.9019999504089355,2.7730000019073486 C1.1449999809265137,2.056999921798706 3.572999954223633,-0.20399999618530273 4.53000020980835,-3.1519999504089355z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,41.753997802734375,50.8120002746582)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,5.14300012588501,6.758999824523926)">
                        <path fill="rgb(244,176,101)" fillOpacity={1} d=" M4.89300012588501,6.508999824523926 C4.89300012588501,6.508999824523926 4.89300012588501,-6.508999824523926 4.89300012588501,-6.508999824523926 C4.89300012588501,-6.508999824523926 -4.559999942779541,-6.508999824523926 -4.559999942779541,-6.508999824523926 C-4.89300012588501,-4.5229997634887695 -4.828999996185303,-2.4860000610351562 -4.368000030517578,-0.5180000066757202 C-3.5959999561309814,2.7809998989105225 -1.0260000228881836,5.35699987411499 2.265000104904175,6.130000114440918 C3.13100004196167,6.334000110626221 4.010000228881836,6.460000038146973 4.89300012588501,6.508999824523926z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg></div>
            </div>
            <div className="divisor" />
          </div>
          <div className="menu-item ">
            <div className="lf-player-container">
              <div id="lottie" style={{background: 'transparent', margin: '0px 0px 0px auto', outline: 'none', overflow: 'hidden', transition: 'none 200ms ease 0s', pointerEvents: 'none', opacity: '0.2', filter: 'brightness(2)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width={100} height={100} preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
                  <defs>
                    <clipPath id="__lottie_element_36">
                      <rect width={100} height={100} x={0} y={0} />
                    </clipPath>
                  </defs>
                  <g clipPath="url(#__lottie_element_36)">
                    <g transform="matrix(1,0,0,1,33.75,42)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,16.893999099731445,8.536999702453613)">
                        <path fill="rgb(245,175,111)" fillOpacity={1} d=" M0.6179999709129333,8.28600025177002 C0.6179999709129333,8.28600025177002 -0.6179999709129333,8.28600025177002 -0.6179999709129333,8.28600025177002 C-4.830999851226807,8.28600025177002 -8.246999740600586,4.872000217437744 -8.246999740600586,0.6579999923706055 C-8.246999740600586,0.6579999923706055 -8.246999740600586,-0.6579999923706055 -8.246999740600586,-0.6579999923706055 C-8.246999740600586,-4.870999813079834 -4.830999851226807,-8.28600025177002 -0.6179999709129333,-8.28600025177002 C-0.6179999709129333,-8.28600025177002 0.6179999709129333,-8.28600025177002 0.6179999709129333,-8.28600025177002 C4.830999851226807,-8.28600025177002 8.246999740600586,-4.870999813079834 8.246999740600586,-0.6579999923706055 C8.246999740600586,-0.6579999923706055 8.246999740600586,0.6579999923706055 8.246999740600586,0.6579999923706055 C8.246999740600586,4.872000217437744 4.830999851226807,8.28600025177002 0.6179999709129333,8.28600025177002z">
                        </path>
                      </g>
                    </g>
                    <g transform="matrix(1,0,0,1,33.75,42)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,11.303999900817871,14.166000366210938)">
                        <path strokeLinecap="butt" strokeLinejoin="miter" fillOpacity={0} strokeMiterlimit={10} stroke="rgb(245,175,111)" strokeOpacity={1} strokeWidth={2} d=" M0.31200000643730164,6.303999900817871 C0.31200000643730164,6.303999900817871 -0.3109999895095825,6.303999900817871 -0.3109999895095825,6.303999900817871 C-3.621000051498413,6.303999900817871 -6.304999828338623,3.621999979019165 -6.304999828338623,0.31200000643730164 C-6.304999828338623,0.31200000643730164 -6.304999828338623,-0.31200000643730164 -6.304999828338623,-0.31200000643730164 C-6.304999828338623,-3.621999979019165 -3.621000051498413,-6.303999900817871 -0.3109999895095825,-6.303999900817871 C-0.3109999895095825,-6.303999900817871 0.31200000643730164,-6.303999900817871 0.31200000643730164,-6.303999900817871 C3.621999979019165,-6.303999900817871 6.304999828338623,-3.621999979019165 6.304999828338623,-0.31200000643730164 C6.304999828338623,-0.31200000643730164 6.304999828338623,0.31200000643730164 6.304999828338623,0.31200000643730164 C6.304999828338623,3.621999979019165 3.621999979019165,6.303999900817871 0.31200000643730164,6.303999900817871z">
                        </path>
                      </g>
                    </g>
                  </g>
                </svg></div>
            </div>
            <div className="divisor" />
          </div>
          <div className="f1 menu-item bottom ">
            <div className="lf-player-container">
              <div id="lottie" className="adj-size" style={{background: 'transparent', margin: '0px 0px 0px auto', outline: 'none', overflow: 'hidden', transition: 'none 200ms ease 0s', pointerEvents: 'none', opacity: '0.2', filter: 'brightness(2)'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 264 220" width={264} height={220} preserveAspectRatio="xMidYMid meet" style={{width: '100%', height: '100%', transform: 'translate3d(0px, 0px, 0px)'}}>
                  <defs>
                    <clipPath id="__lottie_element_44">
                      <rect width={264} height={220} x={0} y={0} />
                    </clipPath>
                    <mask id="__lottie_element_51" mask-type="alpha">
                      <g transform="matrix(1,0,0,1,132,110)" opacity={1} style={{display: 'block'}}>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0} strokeMiterlimit={4} stroke="rgb(8,12,36)" strokeOpacity={1} strokeWidth={30} d=" M104.5,59 C104.5,59 104.5,59 104.5,59" />
                        </g>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path strokeLinecap="round" strokeLinejoin="miter" fillOpacity={0} strokeMiterlimit={4} stroke="rgb(8,12,36)" strokeOpacity={1} strokeWidth={30} d=" M-105,59.375 C-105,59.375 -105,59.4379997253418 -105,59.4379997253418">
                          </path>
                        </g>
                      </g>
                    </mask>
                  </defs>
                  <g clipPath="url(#__lottie_element_44)">
                    <g transform="matrix(1,0,0,1,132,110)" opacity={1} style={{display: 'block'}}>
                      <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                        <path fill="rgb(243,169,82)" fillOpacity={1} d=" M15.074999809265137,44.36899948120117 C32.41699981689453,32.39400100708008 53.40299987792969,25.358999252319336 76.0459976196289,25.358999252319336 C76.0459976196289,25.358999252319336 76.0459976196289,-85.7229995727539 76.0459976196289,-85.7229995727539 C76.0459976196289,-90.9729995727539 71.77999877929688,-95.27300262451172 66.5510025024414,-94.81500244140625 C40.64799880981445,-92.5459976196289 17.368000030517578,-81.08100128173828 0,-63.70199966430664 C-17.368000030517578,-81.08100128173828 -40.650001525878906,-92.5459976196289 -66.552001953125,-94.81500244140625 C-71.78199768066406,-95.27300262451172 -76.0479965209961,-90.9729995727539 -76.0479965209961,-85.7229995727539 C-76.0479965209961,-85.7229995727539 -76.0479965209961,25.358999252319336 -76.0479965209961,25.358999252319336 C-53.395999908447266,25.358999252319336 -32.41600036621094,32.39400100708008 -15.074000358581543,44.36899948120117 C-15.074000358581543,44.36899948120117 -114.16000366210938,44.625 -114.16000366210938,44.625 C-114.16000366210938,44.625 -114.07099914550781,66.37100219726562 -114.07099914550781,66.37100219726562 C-114.07099914550781,71.60700225830078 -109.79100036621094,75.87899780273438 -104.56600189208984,75.87899780273438 C-104.56600189208984,75.87899780273438 -19.01300048828125,75.87899780273438 -19.01300048828125,75.87899780273438 C-19.01300048828125,86.38800048828125 -10.5,94.88800048828125 0,94.88800048828125 C10.5,94.88800048828125 19.01300048828125,86.38800048828125 19.01300048828125,75.87899780273438 C19.01300048828125,75.87899780273438 104.56700134277344,75.87899780273438 104.56700134277344,75.87899780273438 C109.79100036621094,75.87899780273438 114.07099914550781,71.60700225830078 114.07099914550781,66.37100219726562 C114.07099914550781,66.37100219726562 114.07099914550781,44.5 114.07099914550781,44.5 C114.07099914550781,44.5 15.074999809265137,44.36899948120117 15.074999809265137,44.36899948120117z">
                        </path>
                      </g>
                    </g>
                    <g mask="url(#__lottie_element_51)" style={{display: 'block'}}>
                      <g transform="matrix(1,0,0,1,132,110)" opacity={1}>
                        <g opacity={1} transform="matrix(1,0,0,1,0,0)">
                          <path fill="rgb(243,169,82)" fillOpacity={1} d=" M104.56700134277344,-57.20600128173828 C104.56700134277344,-57.20600128173828 104.56700134277344,-57.20600128173828 104.56700134277344,-57.20600128173828 C99.31600189208984,-57.20600128173828 95.05899810791016,-52.94900131225586 95.05899810791016,-47.698001861572266 C95.05899810791016,-47.698001861572266 95.05899810791016,44.36899948120117 95.05899810791016,44.36899948120117 C95.05899810791016,44.36899948120117 15.074999809265137,44.36899948120117 15.074999809265137,44.36899948120117 C32.41699981689453,32.39400100708008 53.40299987792969,25.358999252319336 76.0459976196289,25.358999252319336 C76.0459976196289,25.358999252319336 76.0459976196289,-85.7229995727539 76.0459976196289,-85.7229995727539 C76.0459976196289,-90.9729995727539 71.77999877929688,-95.27300262451172 66.5510025024414,-94.81500244140625 C40.64799880981445,-92.5459976196289 17.368000030517578,-81.08100128173828 0,-63.70199966430664 C-17.368000030517578,-81.08100128173828 -40.650001525878906,-92.5459976196289 -66.552001953125,-94.81500244140625 C-71.78199768066406,-95.27300262451172 -76.0479965209961,-90.9729995727539 -76.0479965209961,-85.7229995727539 C-76.0479965209961,-85.7229995727539 -76.0479965209961,25.358999252319336 -76.0479965209961,25.358999252319336 C-53.395999908447266,25.358999252319336 -32.41600036621094,32.39400100708008 -15.074000358581543,44.36899948120117 C-15.074000358581543,44.36899948120117 -95.05799865722656,44.36899948120117 -95.05799865722656,44.36899948120117 C-95.05799865722656,44.36899948120117 -95.05799865722656,-47.698001861572266 -95.05799865722656,-47.698001861572266 C-95.05799865722656,-52.94900131225586 -99.31500244140625,-57.20600128173828 -104.56600189208984,-57.20600128173828 C-104.56600189208984,-57.20600128173828 -104.56600189208984,-57.20600128173828 -104.56600189208984,-57.20600128173828 C-109.79100036621094,-57.20600128173828 -114.07099914550781,-52.91699981689453 -114.07099914550781,-47.70100021362305 C-114.07099914550781,-47.70100021362305 -114.07099914550781,66.37100219726562 -114.07099914550781,66.37100219726562 C-114.07099914550781,71.60700225830078 -109.79100036621094,75.87899780273438 -104.56600189208984,75.87899780273438 C-104.56600189208984,75.87899780273438 -19.01300048828125,75.87899780273438 -19.01300048828125,75.87899780273438 C-19.01300048828125,86.38800048828125 -10.5,94.88800048828125 0,94.88800048828125 C10.5,94.88800048828125 19.01300048828125,86.38800048828125 19.01300048828125,75.87899780273438 C19.01300048828125,75.87899780273438 104.56700134277344,75.87899780273438 104.56700134277344,75.87899780273438 C109.79100036621094,75.87899780273438 114.07099914550781,71.60700225830078 114.07099914550781,66.37100219726562 C114.07099914550781,66.37100219726562 114.07099914550781,-47.70100021362305 114.07099914550781,-47.70100021362305 C114.07099914550781,-52.91699981689453 109.79100036621094,-57.20600128173828 104.56700134277344,-57.20600128173828z">
                          </path>
                        </g>
                      </g>
                    </g>
                  </g>
                </svg></div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className="absolute fh fw" style={{zIndex: 2147483647, pointerEvents: 'none'}} />
    <div className="fh fw absolute" style={{zIndex: 2147483647, pointerEvents: 'none'}} />
  </div>
  
 
      </Animation>
    </>
  );
};

export default Home;
