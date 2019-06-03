import React from 'react';
import {
    HeaderWrap,
    LogoWrap,
    ToolsRight,
    BtnSignIn,
    BtnCommon,
    ModeSelect,
    BtnBeta,
    NavWrap,
    NavItem
} from './style';
// 静态图片的引入
import logoPic from '../../statics/images/logo.png';
import betaPic from '../../statics/images/beta.png';

class Header extends React.Component {
    render() {
        return (
            <HeaderWrap className="clearfix">
                <LogoWrap><img src={logoPic} alt="简书"/></LogoWrap>
                <ToolsRight>
                    <ModeSelect><i className="icon iconfont iconAa"></i></ModeSelect>
                    <BtnBeta><img src={betaPic} alt="简书钻"/></BtnBeta>
                    <BtnCommon className="btn-sign-in">登录</BtnCommon>
                    <BtnCommon className="btn-register btn-bor">注册</BtnCommon>
                    <BtnCommon className="btn-write btn-bor"><i className="icongangbi1 icon iconfont"></i>写文章</BtnCommon>
                </ToolsRight>
                <div className="container clearfix">
                    <NavWrap>
                        <ul className="clearfix">
                            <li><NavItem href="/" className="home"><i className="iconzhinan icon iconfont"></i>首页</NavItem></li>
                            <li><NavItem><i className="iconshouji1 icon iconfont"></i>下载App</NavItem></li>
                        </ul>
                    </NavWrap>
                </div>
            </HeaderWrap>
        )
    }
}

export default Header;