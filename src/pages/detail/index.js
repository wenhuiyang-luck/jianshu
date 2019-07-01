import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { actionCreators } from './store'
import { withRouter } from 'react-router-dom'
import {
  DetailWrapper,
  Header,
  DetailItemWrapper,
  DetailInfo,
  DetailFollow,
  Desc,
  Content,
  AdContainer,
  Close
} from './style'

class Detail extends PureComponent {
  render() {
    const { title, content, writerInfo } = this.props
    return (
      <DetailWrapper>
        <Header>{title}</Header>
        <DetailItemWrapper>
          <img alt='' className="item-pic" src={writerInfo.get('img')}/>
          <DetailInfo>
            <h3 className="title">{writerInfo.get('chName')}</h3>
            <DetailFollow>+ 关注</DetailFollow>
            <Desc>
              <span className="desc">{writerInfo.get('time')}</span>
              <span className="desc">字数{writerInfo.get('count')}</span>
              <span className="desc">阅读{writerInfo.get('read')}</span>
              <span className="desc">评论{writerInfo.get('comment')}</span>
              <span className="desc">喜欢{writerInfo.get('like')}</span>
            </Desc>
          </DetailInfo>
        </DetailItemWrapper>
        <Content dangerouslySetInnerHTML={{__html: content}}></Content>
        <AdContainer>
          <img alt='' />
          <Close>×</Close>
        </AdContainer>
      </DetailWrapper>
    )
  }

  componentDidMount () {
    this.props.getDetail(this.props.match.params.id)
  }
}

const mapState = (state) => ({
  title : state.getIn(['detail', 'title']),
  content : state.getIn(['detail', 'content']),
  writerInfo: state.getIn(['detail', 'writerInfo'])
})

const mapDipatch = (dispatch) => ({
  getDetail (id) {
    dispatch(actionCreators.getDetail(id))
  }
})

export default connect(mapState, mapDipatch)(withRouter(Detail))