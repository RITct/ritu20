import React,{Component} from 'react'
import Swiper from 'swiper'

import Arrow from '../utils/arrow-back/arrow'

import deptListPageStyle from './deptListPageStyle.module.css'
import CollegeLogo from '../utils/college-logo/collegeLogo'

const DeptList=['general','ece','cse','mech','eee','arch','civil','mca']

class DeptListPage extends Component{
    componentDidMount(){
      // eslint-disable-next-line no-unused-vars
      const swiper = new Swiper('.swiper-container', {
        effect: 'coverflow',
        grabCursor: true,
        centeredSlides: true,
        slidesPerView: 'auto',
        spaceBetween:50,
        loop:true,
        coverflowEffect: {
          rotate: 30,
          stretch: 0,
          depth: 300,
          modifier: 1,
          slideShadows : true,
        },
        pagination: {
          el: '.swiper-pagination',
          clickable:true,
          renderBullet:(index,className)=>{
            return(`<img src=/depicons/${DeptList[index]}.png class=${className+" "+deptListPageStyle.deptIconIndex}/>`)
          }
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    }
     render(){
      return(
        <div className={deptListPageStyle.container}>
            <Arrow path="/"/>
            <div className="swiper-container">
              <div className="swiper-wrapper">
              {DeptList.map((el)=>{
                return(
                <div className={`swiper-slide ${deptListPageStyle.img_cards}`}
                onClick={()=>{this.props.history.push(`/${this.props.match.params.category}/dept/${el}`)}}
                onSelect={()=>{this.props.history.push(`/${this.props.match.params.category}/dept/${el}`)}}>
                  <div className={deptListPageStyle.imgContainer}>
                      <img src={`/depicons/${el}.png`} alt="images"/>
                  </div> 
                  <div className={deptListPageStyle.textContainer}>
                    {el}
                  </div>   
                </div>
                )
              })}
            </div>
            <div className="swiper-pagination"></div>
            <div className="swiper-button-next" style={{position:"absolute"}}></div>
            <div className="swiper-button-prev"  style={{position:"absolute"}}></div>
          </div>
          <CollegeLogo/>
        </div>
      )
     }
  };
  export default DeptListPage;