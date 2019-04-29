import React, {useEffect} from 'react';
import {Card} from 'antd';
import { connect } from 'react-redux';
import {fetchNote} from '../conf/actions'


const ViewNote =(props:any) => {
  useEffect(()=>{
    const {fetchNote, match} = props
    fetchNote(match.params.id)
  }, props.match.params.id)
  return (
    <Card title={props.itemNote.data.title} bordered={false} style={{ fontSize:"14px" }} headStyle = {{fontSize:"14px"}}>
      <p>{props.match.params.id}</p>
      <p>{props.itemNote.data.title}</p>
      <p>{props.itemNote.data.content}</p>
    </Card>
  )
}



const mapStateToPropsNote = (state:any) => {
  const {itemNote} = state
  return {itemNote}
}

export default connect(mapStateToPropsNote, {fetchNote})(ViewNote);