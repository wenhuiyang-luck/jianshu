import React, { Component } from 'react'
import { connect } from 'react-redux'
import { RecommendWrapper, RecommendItem, Download, DownloadInfo } from '../style'

class Recommend extends Component {
  render() {
    return (
      <RecommendWrapper>
        {
          this.props.list.map((item) => (
            <RecommendItem key={item.get('id')} imgUrl={item.get('imgUrl')}></RecommendItem>
          ))
        }
        <Download>
          <img className="qrcode" src="//cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png"/>
          <DownloadInfo>
            <h3 className="title">下载简书手机App ></h3>
            <p className="desc">随时随地发现和创作内容</p>
          </DownloadInfo>
        </Download>
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'recommendList'])
  }
}

export default connect(mapState, null)(Recommend)