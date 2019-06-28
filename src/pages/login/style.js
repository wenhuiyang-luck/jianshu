import styled from 'styled-components'

export const LoginWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 100%;
  min-height: 750px;
  text-align: center;
  background-color: #f1f1f1;
  font-size:14px;
`
export const Logo = styled.div`
  img {
    width: 100px;
    position: absolute;
    top: 56px;
    left: 0;
    margin-left: 50px;
  }
`
export const LoginBox = styled.div`
  width: 400px;
  margin: 160px auto 0;
  padding: 80px 50px 70px;
  background-color: #fff;
  border-radius: 4px;
  box-shadow: 0 0 8px rgba(0,0,0,.1);
  vertical-align: middle;
  display: inline-block;
  box-sizing: border-box;
`
export const Input = styled.input`
  width: 100%;
  height: 50px;
  margin-bottom: 0;
  padding: 4px 12px 4px 35px;
  border: 1px solid #c8c8c8;
  background-color: hsla(0,0%,71%,.1);
  vertical-align: middle;
  box-sizing: border-box;
  text-shadow: none;
  text-decoration: none;
  font-size:15px;
`

export const Button = styled.div`
  margin-top: 30px;
  width: 100%;
  height: 43px;
  line-height: 43px;
  font-size: 18px;
  border: none;
  border-radius: 25px;
  color: #fff;
  background: #3194d0;
  cursor: pointer;
  outline: none;
`