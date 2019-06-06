import React from 'react';
import {
    HeaderWrap,
    LogoWrap,
    ToolsRight,
    BtnCommon,
    ModeSelect,
    BtnBeta,
    NavWrap,
    NavItem,
    HeaderSearch,
    SearchInput,
    SearchBtn
} from './style';
// 静态图片的引入
import logoPic from '../../statics/images/logo.png';
import betaPic from '../../statics/images/beta.png';
// 引入动画
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

function Header(props) {
    const {focused, focusHandle, blurHandle} = props;
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
                <HeaderSearch>
                    <CSSTransition
                        in={focused}
                        timeout={300}
                        classNames="slide"
                    >
                        <SearchInput onFocus={focusHandle} onBlur={blurHandle}/>
                    </CSSTransition>
                    <SearchBtn className={`icon iconfont iconxiazai17 ${focused ? "focused" : ""}`}></SearchBtn>
                </HeaderSearch>
            </div>
        </HeaderWrap>
    )
}

const mapStateToProps = (state) => {
    return {
        focused: state.header.searchFocused
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        focusHandle() {
            dispatch(actionCreators.focusHandleAction())
        },
        blurHandle() {
            dispatch(actionCreators.blurHandleAction())
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);