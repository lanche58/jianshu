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
    SearchBtn,
    SearchTips,
    SearchTipsList,
    NextTipsBtn
} from './style';
// 静态图片的引入
import logoPic from '../../statics/images/logo.png';
import betaPic from '../../statics/images/beta.png';
// 引入动画
import { CSSTransition } from 'react-transition-group';
import { connect } from 'react-redux';
import { actionCreators } from './store';

class Header extends React.Component{
    getSearchList() {
        const {searchList, page, totalPage, mouseEnterHandle, mouseLeaveHandle, changePage } = this.props;
        const newList = searchList.slice((page-1)*10, page*10);
        return (
            <SearchTips onMouseEnter={mouseEnterHandle} onMouseLeave={mouseLeaveHandle}>
                <div className="clearfix t">
                    <NextTipsBtn onClick={() => changePage(page, totalPage, this.iconSpin)}><i ref={(iconSpin) => {this.iconSpin = iconSpin}} className="icon iconfont iconspin"></i> 换一批</NextTipsBtn>
                    <p className="title">热门搜索</p>
                </div>
                <SearchTipsList className="clearfix">
                {
                    newList.map((item) => 
                        <li key={item}><a href="/">{item}</a></li>
                    )
                }
                </SearchTipsList>
            </SearchTips>
        )
    }
    render() {
        const {focused, mouseIn, searchList, focusHandle, blurHandle} = this.props;
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
                            <SearchInput onFocus={() => focusHandle(searchList)} onBlur={blurHandle}/>
                        </CSSTransition>
                        <SearchBtn className={`icon iconfont iconxiazai17 ${focused ? "focused" : ""}`}></SearchBtn>
                        {/* { focused ?  : null } */}
                        { focused || mouseIn ? this.getSearchList() : null }
                    </HeaderSearch>
                </div>
            </HeaderWrap>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        focused: state.getIn(['header', 'searchFocused']),
        mouseIn: state.getIn(['header', 'mouseIn']),
        searchList: state.getIn(['header', 'list']),
        page: state.getIn(['header', 'page']),
        totalPage: state.getIn(['header', 'totalPage'])
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        focusHandle(list) {
            // 将immutable对象转化为js对象
            const newList = list.toJS();
            newList.length === 0 && dispatch(actionCreators.asyncSearchListDataAction());
            dispatch(actionCreators.focusHandleAction())
        },
        blurHandle() {
            dispatch(actionCreators.blurHandleAction())
        },
        mouseEnterHandle() {
            dispatch(actionCreators.mouseEnterAction())
        },
        mouseLeaveHandle() {
            dispatch(actionCreators.mouseLeaveAction())
        },
        changePage(prevPage, totalPage, spin) { 
            // 改变page
            const newPage = prevPage + 1 > totalPage ? 1 : prevPage + 1;
            dispatch(actionCreators.changePageAction(newPage));
            const originalAngle = parseInt((spin.style.transform || '0').replace(/[^0-9]/ig, ''));
            spin.style.transform = `rotate(${originalAngle+360}deg)`;
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);