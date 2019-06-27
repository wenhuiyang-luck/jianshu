import React, { Component } from 'react'
import { connect } from 'react-redux'
import { HomeWrapper, HomeLeft, HomeRight } from './style';
import List from './component/List'
import Recommend from './component/Recommend'
import Topic from './component/Topic'
import Writer from './component/Writer'
import { actionCreators } from './store'

class Home extends Component {
  render() {
    return (
      <div>
        <HomeWrapper>
          <HomeLeft>
            <img className="banner-img" src="//upload.jianshu.io/admin_banners/web_images/4674/674a8ac2283f0ff81f3fb4e37fce606cc474f129.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540"></img>
            <Topic></Topic>
            <List></List>
          </HomeLeft>
          <HomeRight>
            <Recommend></Recommend>
            <Writer></Writer>
          </HomeRight>
        </HomeWrapper>
      </div>
    )
  }

  componentDidMount () {
    this.props.handleHomeList()
  }
}

const mapDispatch = (dispatch) => ({
  handleHomeList() {
    dispatch(actionCreators.getHomeList())
  }
})

export default connect(null, mapDispatch)(Home)