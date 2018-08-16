import React, { Component } from 'react'
import { connect } from 'react-redux';

import styled from 'styled-components'

import {icons} from './mapIcons.js'

import {getDistance} from '../../../helpers/getDistance.js'
import { isNull } from 'util';
import { addItemToZerking, removeItemToZerking, getFestivalPois} from '../../../store/actions';

import { addItemToVenues } from '../../../helpers/festivalApiHelper.js';

import { goToAnchor } from 'react-scrollable-anchor'
import { configureAnchors } from 'react-scrollable-anchor'


const  MapIcon = styled.img`
position: relative;
 width:32px;
 height:32px;
 margin:0 auto;
`

const MapIconTitle = styled.div`
padding-top:5px;
font-size:90%;

`

const PoiItem = styled.div`
text-align: center;
background-color:  ${props => props.isToggledForZerkig ? 'rgb(80,100,0)' : 'rgba(22,22,22,0.9)'};  ;
color: rgb(59, 40, 78);
color:#ddd;

margin:8px 10px;
padding: 8px 8px;
box-shadow: 0px 3px 6px 0px rgba(0, 0, 0, 0.5);
border-radius: 3px;
font-weight: 100;
cursor: pointer;
flex: 1 auto;
display:flex;
flex-direction:column;
alig-items:ceter;

`
const PoiContainer= styled.div`
display:flex;
overflow:hidden;
flex-wrap: wrap;

align-content:stretch;
`


export class PoiSelector extends Component {

  componentDidMount() {
    configureAnchors({offset: -250, scrollDuration: 500})
  }

  setItemToZerking=  (e,poiType)=>{
    if (this.isToggledForZerkig(poiType.key)){
      this.props.removeItemToZerking(poiType.key)
      return
    }

    const item = {
      category: poiType.key,
      name:poiType.name,
      festivalId: this.props.festival._id,
      coordinates:{
        lat: this.props.pos.lat,
        lng: this.props.pos.lng
      }
    }
    this.props.addItemToZerking([item])

    if(this.props.noscroll) {goToAnchor('poiList')}
    // setTimeout(()=>window.scrollTo({
		// 	top: 300, 
		// 	left: 0, 
		// 	behavior: 'smooth' 
		// }),50)
		
    return
  }

  isToggledForZerkig=(category)=>{
    let matchedItem =''
    matchedItem = this.props.itemsToZerking.filter(poi=>{
      return (poi.category == category)
    })
    return (matchedItem.length >0)
  }

  renderPoi = (poiType) =>{

    const iconType= poiType.key
      let iconCategory=''
      if (icons[iconType]) {iconCategory = iconType} else { iconCategory ='default' }
      const iconUrl = icons[iconCategory].icon
      
    return (
      <PoiItem isToggledForZerkig={this.isToggledForZerkig(poiType.key)} onClick={(e)=>this.setItemToZerking(e,poiType)} key={poiType.key}>
      <MapIcon src={iconUrl}/><MapIconTitle>{poiType.name}</MapIconTitle>
      </PoiItem>)
  }


  render() {
    const {poiTypes} = this.props
    let poiRender=''
    if (this.props.poiTypes) {
      poiRender= poiTypes.map(this.renderPoi)
    }

    return (
      <PoiContainer>
        {poiRender}
      </PoiContainer>
    )
  }
}

const mapStateToProps = ({zerking}) => {
	return {
    activeFestival: zerking.activeFestival,
    itemsToZerking: zerking.itemsToZerking,
	};
};

const mapDispatchToProps = dispatch => {
	return {
    addItemToZerking: item => dispatch(addItemToZerking(item)),
    removeItemToZerking: category => dispatch(removeItemToZerking(category)),
    getFestivalPois: festivalId => dispatch(getFestivalPois(festivalId)),
	};
};



export default connect(mapStateToProps, mapDispatchToProps)(PoiSelector)
