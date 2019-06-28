import styled from 'styled-components'

export const DetailWrapper = styled.div`
  margin: 0 auto;
  padding-top: 20px;
  padding-bottom: 40px;
  width: 620px;
`
export const Header = styled.div`
  word-break: break-word !important;
  margin: 20px 0 0;
  font-family: -apple-system,SF UI Display,Arial,PingFang SC,Hiragino Sans GB,Microsoft YaHei,WenQuanYi Micro Hei,sans-serif;
  font-size: 34px;
  font-weight: 700;
  line-height: 1.3;
`
export const Content = styled.div`
  width: 100%;
  > img {
    width: 100%;
    padding: 20px;
    transition: all .15s linear;
    z-index: 100;
    box-sizing: border-box;
  }
  > p {
    color: #2f2f2f;
    font-size: 16px;
    font-weight: 400;
    line-height: 1.7;
    margin: 0 0 25px;
    word-break: break-word !important;
  }
`
export const AdContainer = styled.div`
  position: fixed;
  top: 80px;
  right: 50%;
  margin-right: -560px;
  width: 180px;
  img {
    display: block;
    width: 100%;
    height: 260px;
    background: url(http://cdn2.jianshu.io/assets/web/web-note-ad-side-banner-22096669b4c4b91c3b9266894e951aef.png);
    background-repeat: no-repeat;
    background-size: contain;
    background-position: 50%;
    margin-bottom: 15px;
  }
`
export const Close = styled.span`
  display: block;
  width: 20px;
  height: 20px;
  color: #999;
  position: absolute;
  right: 10px;
  top: 10px;
`
export const DetailItemWrapper = styled.div`
  width: 100%;
  height: auto;
  margin: 20px 0;
  .item-pic {
    float: left;
    width: 48px;
    height: 48px;
    border-radius: 24px;
    border: 0;
    margin-right: 10px;
  }
`
export const DetailInfo = styled.div`
  width: 100%;
  height: 48px;
  .title {
    display: inline-block;
    font-size: 16px;
    margin-right: 10px;
    font-size: 16px;
    vertical-align: middle;
    color: #333;
  }
`
export const Desc = styled.div`
  margin-top: 6px;
  .desc {
    margin-top: 10px;
    font-size: 12px;
    color: #969696;
    margin-right: 10px;
  }
`
export const DetailFollow = styled.div`
  display: inline-block;
  width: 52px;
  height: 19px;
  margin-top: 5px;
  line-height: 19px;
  text-align: center;
  border-radius: 40px;
  color: #fff;
  font-size: 12px;
  background-color: #42c02e;
  cursor: pointer;
`