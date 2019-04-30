import React, {useEffect} from 'react'
import { Row, Col, Table, Button } from 'antd';
import {Link} from 'react-router-dom';
import {fetchAllNote, fetchNote} from '../conf/actions'
import ViewNote from '../com/View';
import NoteEdit from '../com/New';
import { connect } from 'react-redux';
import {BrowserRouter, Redirect} from 'react-router-dom';
import { Switch, Route } from 'react-router'
import moment from 'moment'

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'name',
  render: (text:string, record:any) => <Link to={`/note/view/${record.id}`}>{text}</Link>,
}, {
  title: 'Content',
  dataIndex: 'content',
  key: 'content',
}, {
  title: 'Created',
  dataIndex: 'created',
  key: 'created',
  render: (text:number) => <>{moment.unix(text).format('l')}</>,
},];

const Note = (props:any) => {
  useEffect(()=>{
    const {fetchAllNote} = props
    fetchAllNote()
  }, [])
  const {noteState} = props
  return (
    <div>
       <BrowserRouter>
        <Row className="panel">
            <Col span={12} className="right-line panel">
                <div className="flex-right m-b-10">
                  <Link to={`${props.match.path}/edit`}>
                    <Button icon="edit" className="btn-success" >New</Button>
                  </Link>
                </div>
                <Table columns={columns} dataSource={noteState.data} className={"mk-table"} pagination={{ pageSize: 15 }}/>
            </Col>
            <Col span={12} className="panel">
                <Switch>
                  <Route  path={`${props.match.path}/view/:id`} component={ViewNote}/>
                  <Route  path={`${props.match.path}/edit`} component={NoteEdit}/>
                </Switch>
            </Col>
        </Row>
      </BrowserRouter>
    </div>
  )
}

const mapStateToProps = (state:any) => {
  const {noteState} = state
  return {noteState}
}



export default connect(mapStateToProps, {fetchAllNote})(Note);