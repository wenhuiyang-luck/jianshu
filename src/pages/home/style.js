import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  padding-top: 30px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  width: 625px;
  margin-left: 15px;
  float: left;
  .banner-img {
    width: 100%;
    height: 270px;
  }
`
export const HomeRight = styled.div`
  width: 280px;
  float: right;
`
export const TopicWrapper = styled.div`
  overflow: hidden;
  margin-left: -18px;
  padding: 20px 0 10px 0;
  border-bottom: 1px solid #f0f0f0;
`
export const TopicItem = styled.div`
  float: left;
  height: 32px;
  line-height: 32px;
  border: 1px solid #dcdcdc;
  font-size: 14px;
  text-align: center;
  background: #f7f7f7;
  border-radius: 4px;
  margin-left: 18px;
  margin-bottom: 10px;
  padding-right: 10px;
  .topic-img {
    width: 32px;
    height: 32px;
    float: left;
    margin-right: 10px;
    border-radius: 4px 0 0 4px;
  }
  &:last-child {
    background: none;
    border: none;
    color: #969696;
    cursor: pointer;
  }
  .topic-link {
    color: #969696; 
    &:link { 
      text-decoration: none; 
    } 
    &:visited { 
      text-decoration: none; 
    } 
    &:hover { 
      text-decoration: underline; 
    }
  }
`
export const ListItem = styled.div`
  padding: 25px 2px 20px 0;
  border-bottom: 1px solid #f0f0f0;
  word-wrap: break-word;
  overflow: hidden;
  .pic {
    display: block;
    width: 150px;
    height: 100%;
    float: right;
    border: none;
    border-redius: 4px;
  }
`

export const ListInfo = styled.div`
  width: 465px;
  float: left;
  .title {
    font-size: 18px;
    line-height: 27px;
    font-weight: 700;
    margin: -7px 0 4px;
  }
  .desc {
    margin: 0 0 8px;
    font-size: 13px;
    line-height: 24px;
    color: #999;
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0;
  text-align: center;
  font-size: 15px;
  border-radius: 20px;
  color: #fff;
  background-color: #a5a5a5;
  cursor: pointer;
`

export const RecommendWrapper = styled.div`
  width: 100%;
  margin-top: -4px;
  padding-bottom: 4px;
`

export const RecommendItem = styled.div`
  width: 100%;
  margin-bottom: 6px;
  cursor: pointer;
  border: 0;
  height: 50px;
  background: url(${(props) => props.imgUrl});
  background-size: contain;
  cursor: pointer;
`
export const Download = styled.div`
  width: 100%;
  margin-top: 12px;
  margin-bottom: 30px;
  padding: 10px 22px;
  width: 100%;
  border: 1px solid #f0f0f0;
  border-radius: 6px;
  background-color: #fff;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-item: center;
  box-sizing: border-box;
  cursor: pointer;
  .qrcode {
    width: 60px;
    height: 60px;
    opacity: .85; 
  }
`
export const DownloadInfo = styled.div`
  width: 164px;
  height: 60px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  .title {
    font-size: 15px;
    color: #333;
    margin-bottom: 6px;
  }
  .desc {
    margin-top: 4px;
    font-size: 13px;
    color: #999;
  }
`
export const WriterRecommendImg = styled.div`
  cursor: pointer;
  position: relative;
  .pic {
    border-radius: 4px;
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    height: 160px;
    width: 100%;
    overflow: hidden;
    background-color: RGB(241, 243, 244);
  }
  > span {
    content: '';
    position: absolute;
    bottom: 2px;
    right: 0;
    color: #fff;
    background-color: #000;
    padding: 0 5px;
    font-size: 12px;
    line-height: 20px;
    opacity: 0.7;
    border-radius: 0 0 4px 0;
  }
`
export const WriterTitle = styled.div`
  font-size: 14px;
  color: #969696;
  margin-top: 20px;
`
export const WriterSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  color: #969696
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s linear;
    transform: rotate(0deg);
  }
`
export const WriterItemWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
`
export const WriterItem = styled.div`
  width: 100%;
  height: 48px;
  line-height: 20px;
  margin-bottom: 15px;
  overflow: hidden;
  cursor: pointer;
  .item-pic {
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: 0;
    margin-right: 10px;
  }
`
export const WriterInfo = styled.div`
  width: 100%;
  .title {
    padding-top: 5px;
    font-size: 14px;
    display: block;
  }
  .desc {
    margin-top: 2px;
    font-size: 12px;
    color: #969696;
  }
`
export const WriterFollow = styled.div`
  float: right;
  padding: 0;
  font-size: 13px;
  color: #42c02e;
  cursor: pointer;
`
export const MoreWriter = styled.div`
  padding: 10px 0;
  width: 100%;
  text-align: center;
  font-size: 13px;
  color: #787878;
  background-color: #f7f7f7;
  border: 1px solid #dcdcdc;
  border-radius: 4px;
  box-sizing: border-box;
`