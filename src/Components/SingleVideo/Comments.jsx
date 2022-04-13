import React from 'react';
import { Comment, Form, Button, List, Input } from 'antd';
import moment from 'moment';
import styled from "styled-components";





const InputComment = styled.input`
width: 90%;
height: 36px ;
border-radius: 120px;
background-color: rgb(245,245,249);
outline: none;
border: none;
position: relative;
top: 17px;
right: 90px;

::placeholder {
    color: #D5DAE8;
    padding: 10px;
  }


`;

const SendIcon = styled.img`
position: relative;
width: 16px;
height: 16px;
top: 20px;
right: 60px;

cursor: pointer;




`;

const Box = styled.div`

display: flex;



`;





const { TextArea } = Input;

const CommentList = ({ comments }) => (
  <List style={{position:"relative",top:"60px"}}
    dataSource={comments}
    itemLayout="vertical"
    renderItem={props => <Comment {...props} />}
    

  />
);

const Editor = ({ onChange, onSubmit, submitting, value }) => (
  <>
    <Form.Item>
        <InputComment placeholder='دیدگاه خود را وارد کنید...' onChange={onChange} value={value} />
        <SendIcon src="https://www.uplooder.net/img/image/30/1a137839485abb6aba23fbbdcb701fa7/svgexport-42.svg" htmlType="submit" loading={submitting} onClick={onSubmit}/>
    </Form.Item>
    <Form.Item>
      
    </Form.Item>
  </>
);

class Comments extends React.Component {
  state = {
    comments: [],
    submitting: false,
    value: '',
  };

  handleSubmit = () => {
    if (!this.state.value) {
      return;
    }

    this.setState({
      submitting: true,
    });

    setTimeout(() => {
      this.setState({
        submitting: false,
        value: '',
        comments: [
          ...this.state.comments,
          {
            content: <p>{this.state.value}</p>,
            
          },
        ],
      });
    }, 1000);
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  render() {
    const { comments, submitting, value } = this.state;

    return (
      <>
     
        
        
        
        <Comment 
        
              

          content={
            <Editor
              onChange={this.handleChange}
              onSubmit={this.handleSubmit}
              submitting={submitting}
              value={value}
            />
            
          }
         
        />
        <div>

  
        {comments.length > 0 && <CommentList comments={comments} />}
        </div>
       
       
      </>
      
    );
  }
}
export default Comments;
