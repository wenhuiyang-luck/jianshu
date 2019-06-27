import React, { PureComponent } from 'react'
import { TopicWrapper, TopicItem } from '../style'
import { connect } from 'react-redux'

class Topic extends PureComponent {
  render() {
    return (
      <TopicWrapper>
        {this.props.list.map((item) => {
          return (
            <TopicItem key={item.get('id')}>
              <img alt='' className="topic-img" src={item.get('imgUrl')} />
              {item.get('title')}
            </TopicItem>
          )
        })}
        <TopicItem>
          <a className="topic-link" target="_blank" href="/recommendations/collections?utm_medium=index-collections&amp;utm_source=desktop">更多热门专题 ></a>
        </TopicItem>
      </TopicWrapper>
    )
  }
}

const mapState = (state) => {
  return {
    list: state.getIn(['home', 'topicList'])
  }
}

export default connect(mapState, null)(Topic)