import styled from 'styled-components';
import logoPic from '../../statics/nav-logo.png'

export const HeaderWrapper = styled.div`
  position: relative;
  height: 58px;
  border-bottom: 1px solid #f0f0f0;
`
export const Logo = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  display: block;
  width: 100px;
  height: 56px;
  background: url(${logoPic});
  background-size: contain;
`
export const Nav = styled.div`
  width: 960px;
  height: 100%;
  box-sizing: border-box;
  line-height: 56px;
  margin: 0 auto;
`
export const NavItem = styled.div`
  &.left {
    float: left;
  }
  &.right {
    float: right;
    color: #969696;
  }
  &.active {
    color: #ea6f5a;
  }
  height: 56px;
  padding: 0 15px;
  font-size: 17px;
  color: #333;
`

export const SearchWrapper = styled.div`
  position: relative;
  float: left;
  height: 38px;
  padding-left: 20px;
  .zoom {
    position: absolute;
    top: 14px;
    right: 4px;
    width: 30px;
    line-height: 30px;
    border-radius: 15px;
    text-align: center;
    color: #969696;
    &.focused {
      background: #969696;
      color: #fff;
    }
  }
`

export const SearchInfo = styled.div`
  position: absolute;
  left: 20px;
  top: 56px;
  width: 250px;
  margin-top: 9px;
  padding: 0 20px;
  background-color: #fff;
  box-shadow: 0 0 8px rgba(0,0,0,.2);
  border-radius: 4px;
  color: #969696;
  box-sizing: border-box;
`

export const SearchInfoTitle = styled.div`
  font-size: 14px;
`

export const SearchInfoSwitch = styled.span`
  float: right;
  font-size: 13px;
  cursor: pointer;
  .spin {
    display: block;
    float: left;
    font-size: 12px;
    margin-right: 2px;
    transition: all .2s linear;
    transform: rotate(0deg);
  }
`

export const SearchInfoItem = styled.a`
  font-size: 12px;
  float: left;
  margin-right: 10px;
  margin-bottom: 10px;
  display: inline-block;
  line-height: 16px;
  padding: 2px 6px;
  font-size: 12px;
  color: #787878;
  border: 1px solid #ddd;
  border-radius: 3px;
`

export const SearchInfoList = styled.div`
  overflow: hidden;
`

export const NavSearch = styled.input.attrs({
  placeholder: '搜索'
})`
  width: 160px;
  height: 38px;
  padding: 0 36px 0 20px;
  border: none;
  outline: none;
  border-radius: 19px;
  background: #eee;
  font-size: 14px;
  color: #777;
  &::placeholder {
    color: #999;
  }
  &.focused {
    width: 240px;
  }
  &.enter {
    transition: all .5s ease-in;
  }
  &.enter-active {
    width: 240px;
  }
  &.exit {
    transition: all .5s ease-in;
  }
  &.exit-active {
    width: 160px;
  }
`
export const Addtion = styled.div`
  position: absolute;
  top: 0;
  right: 0;
`
export const Button = styled.div`
  float: right;
  line-height: 38px;
  margin-top: 9px;
  margin-right: 20px;
  padding: 0 20px;
  border-radius: 19px;
  border: 1px solid rgba(236,97,73,.7);
  font-size: 15px;
  &.reg {
    color: #ea6f5a;
  }
  &.write {
    background: #ea6f5a;
    color: #fff;
  }
`