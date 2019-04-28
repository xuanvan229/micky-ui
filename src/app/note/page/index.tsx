import React, {useEffect} from 'react'
import { Row, Col, Table, Card } from 'antd';
import {Link} from 'react-router-dom';
import {fetchAllNote} from '../conf/actions'
import { connect } from 'react-redux';
import {BrowserRouter, Redirect} from 'react-router-dom';
import { Switch, Route } from 'react-router'
import moment from 'moment'

const columns = [{
  title: 'Title',
  dataIndex: 'title',
  key: 'name',
  render: (text:string) => <a href="javascript:;">{text}</a>,
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
      <Row>
          <Col span={12}>
             <Table columns={columns} dataSource={noteState.data}  pagination={{ pageSize: 15 }}/>
          </Col>
          <Col span={12}>
          <BrowserRouter>
            <Switch>
              <Route exact path={`${props.match.path}/view/:id`} component={ViewNote}/>
            </Switch>
          </BrowserRouter>
          </Col>
      </Row>
    </div>
  )
}

const ViewNote =(props:any) => {
  console.log("notestate", props.match.params.id)
  return (
    <Card title="Card title" bordered={false} style={{ width: 300 }}>
      <p>Card content</p>
      <p>Card content</p>
      <p>Card content</p>
    </Card>
  )
}


const mapStateToProps = (state:any) => {
  const {noteState} = state
  return {noteState}
}



export default connect(mapStateToProps, {fetchAllNote})(Note);