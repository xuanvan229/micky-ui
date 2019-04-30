import React from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';
import {Row, Col, Form, Input, Button} from 'antd';
import {connect} from 'react-redux';
import {changeTitle, changeContent} from '../conf/actions'
const NoteEdit = (props:any) => {
  const {getFieldDecorator} = props.form
  return (
    <div>
      <Row>
        <Col span={24}>
          <Form>
              <Form.Item
                label="Title"
              >
                {getFieldDecorator('title', {
                  rules: [{
                    required: true, message: 'Please input your E-mail!',
                  }],
                })(
                  <Input />
                )}
            </Form.Item>
          </Form>
          <div>
            <label>
              Content
            </label>
            <div className="m-t-15">
              <ReactQuill value={props.newNote.note.content}
                  onChange={props.changeContent} />
            </div>
          </div>
          <div className="flex-space-between m-t-20">
            <Button type="primary">Submit</Button>
            <Button type="danger">Dismiss</Button>
          </div>
        </Col>
      </Row>
    </div>
  )
}

const WrappedNormalLoginForm = Form.create({ 
  name: 'new_note', 
  onFieldsChange(props:any, changedFields:any) {
    if(changedFields.title) {
      props.changeTitle(changedFields.title.value)
    }
  },
  mapPropsToFields(props:any) {
    return {
      title: Form.createFormField({
        value: props.newNote.note.title
      })
    };
  },
  onValuesChange(_, values) {
    console.log(values);
  },
 })(NoteEdit);



 const mapStatetoProps = (state:any) => {
   const {newNote} = state
   return {newNote}
 }

export default connect(mapStatetoProps,{changeTitle, changeContent})(WrappedNormalLoginForm);