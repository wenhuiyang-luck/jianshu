import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Redirect } from 'react-router-dom'
import { LoginWrapper, LoginBox, Input, Button, Logo } from './style'
import { actionCreators } from './store';

class Home extends PureComponent {
  render() {
    const { login, loginStatus } = this.props
    console.log(loginStatus)
    if (!loginStatus) {
      return (
        <LoginWrapper>
          <Logo>
            <img alt='' src="//cdn2.jianshu.io/assets/web/logo-58fd04f6f0de908401aa561cda6a0688.png"/>
          </Logo>
          <LoginBox>
            <Input placeholder="手机号或邮箱" ref={(input) => {this.account = input}}/>
            <Input type="password" placeholder="密码" ref={(input) => {this.password = input}}/>
            <Button onClick={() => login(this.account, this.password)}>登录</Button>
          </LoginBox>
        </LoginWrapper>
      )
    } else {
      return <Redirect to="/" />
    }
  }
}

const mapState = (state) => ({
  loginStatus: state.getIn(['login', 'login'])
})

const mapDispatch = (dispatch) => ({
  login (accountEle, passwordEle) {
    dispatch(actionCreators.handleLogin(accountEle.value, passwordEle.value))
  }
})

export default connect(mapState, mapDispatch)(Home)