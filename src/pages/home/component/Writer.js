import React, { Component } from 'react'
import { connect } from 'react-redux'
import { WriterRecommendImg, WriterTitle, WriterSwitch, WriterItemWrapper, WriterItem, WriterInfo, WriterFollow, MoreWriter } from '../style'

class Writer extends Component {
  render() {
    return (
      <div>
        <WriterRecommendImg>
          <img  className="pic" src="//cdn2.jianshu.io/assets/ads/java-62d16127d94c8ca4c8a40ada899c97f4.png" />
          <span>广告</span>
        </WriterRecommendImg>
        <WriterTitle>
          推荐作者
          <WriterSwitch>
            <i ref={(icon) => {this.spinIcon = icon}} className="iconfont spin">&#xe65e;</i>换一批
          </WriterSwitch>
        </WriterTitle>
        <WriterItemWrapper>
          {
            this.props.list.map((item) => (
              <WriterItem key={item.get('id')}>
                <img  className="item-pic" src={item.get('avatarUrl')}/>
                <WriterInfo>
                  <h3 className="title">{item.get('chName')}<WriterFollow>+ 关注</WriterFollow></h3>
                  <p className="desc">{item.get('desc')}</p>
                </WriterInfo>
              </WriterItem>
            ))
          }
          <MoreWriter>查看全部 ></MoreWriter>
        </WriterItemWrapper>
        <WriterRecommendImg>
        <img  className="pic" src="https://oimagec6.ydstatic.com/image?id=8869525919655038784&product=adpublish&w=1280&h=720&sc=0&rm=2&gsb=0&gsbd=60" />
          <span>广告</span>
        </WriterRecommendImg>   
      </div>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'writerList'])
  }
}

export default connect(mapState, null)(Writer)
