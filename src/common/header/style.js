import styled from 'styled-components';

export const HeaderWrap = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1030;
    height: 57px;
    background: #fff;
    border-bottom: 1px solid #f0f0f0;
    line-height: 38px;
`;

export const LogoWrap = styled.a.attrs({
    href: '/'
})`
    float: left;
    width: 100px;
    img{
        display: block;
        width: 100%;
    }
`;

export const ToolsRight = styled.div`
    float: right;
    padding: 9px 12px 0 0;
    font-size: 15px;
    color: #999;
`;

export const BtnCommon = styled.a`
    float: left;
    height: 38px;
    &.btn-sign-in{
        margin-left: 38px;
    }
    &.btn-bor{
        border-radius: 20px;  
        text-align: center;
    }
    &.btn-register{
        margin-left: 35px;
        width: 80px;
        border: 1px solid #ea6f5a;
        line-height: 36px;
        color: #ea6f5a;
        &:hover{
            background: rgba(236,97,73,.05);
            color: #ec6149;
            border-color: #ec6149;
        }
    }
    &.btn-write{
        margin-left: 17px;
        width: 100px;
        background: #ea6f5a;
        color: #fff;
        .icon{
            display: inline-block;
            vertical-align: bottom;
            margin-right: 3px;
            font-size: 19px;
            font-weight: bold;
        }
        &:hover{
            background: #ec6149;
        }
    }
`;

export const ModeSelect = styled.div`
    position: relative;
    float: left;
    .icon{
        display: block;
        font-size: 19px;
        cursor: pointer;
    }
`;

export const BtnBeta = styled.a`
    float: left;
    width: 50px;
    margin: 8px 0 0 23px;
    img{
        display: block;
        width: 100%;
    }
`;


export const NavWrap = styled.nav`
    float: left;
    margin-left: -15px;
    li{
        float: left;
    }
`;

export const NavItem = styled.a`
    display: block;
    padding: 9px 15px;
    color: #333;
    font-size: 17px;
    .icon{
        display: inline-block;
        vertical-align: bottom;
        margin-right: 5px;
        font-size: 20px;
    }
    &:not(.home):hover{
        background: #f5f5f5;
    }
    &.home{
        color: #ea6f5a;
    }
`;

export const HeaderSearch = styled.div`
    float: left;
    position: relative;
    margin: 9px 0 0 25px;
`;

export const SearchBtn = styled.a.attrs({
    href: "javascript:;"
})`
    position: absolute;
    top: 50%;
    right: 5px;
    margin-top: -15px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    text-align: center;
    line-height: 30px;
    color: #999;
    &.focused{
        background: #999;
        color: #fff;
    }
`;

export const SearchInput = styled.input.attrs({
    placeholder: "搜索"
})`
    display: block;
    width: 150px;
    height: 38px;
    padding: 6px 40px 6px 20px;
    border-radius: 20px;
    background: #eee;
    border: 1px solid #eee;
    line-height: 24px;
    &::placeholder{
        color: #999;
    }
    &:focus{
        outline: none;
    }
    &.slide-exit-done,
    &.slide-enter{
        width: 150px;
    }
    &.slide-enter-active{
        width: 240px;
        transition: 300ms;
    }
    &.slide-exit,
    &.slide-enter-done{
        width: 240px;
    }
    &.slide-exit-active{
        width: 150px;
        transition: 300ms;
    }
`;

export const SearchTips = styled.div`
    position: absolute;
    top: 100%;
    left: 0;
    width: 250px;
    padding: 20px 20px 10px;
    margin-top: 9px;
    border-radius: 4px;
    background: white;
    box-shadow: 0 0 8px rgba(0,0,0,.2);
    &:before, &:after{
        content: "";
        position: absolute;
    }
    &:before{
        left: 25px;
        top: -5px;
        z-index: -1;
        width: 10px;
        height: 10px;
        background: white;
        transform: rotate(45deg);
        box-shadow: 0 0 8px rgba(0,0,0,.2);
    }
    &:after{
        bottom: 100%;
        left: 20px;
        width: 0;
        height: 0;
        border-left: 10px solid transparent;
        border-right: 10px solid transparent;
        border-bottom: 9px solid white;
    }
    .t{
        margin-bottom: 14px;
        line-height: 20px;
        color: #999;
    }
`;

export const NextTipsBtn = styled.a`
    float: right;
    font-size: 13px;
    color: #999;
    .icon{
        display: inline-block;
        vertical-align: bottom;
        font-size: 12px;
        transition: .5s;
    }
    &:hover{
        color: #2f2f2f;
    }
`;

export const SearchTipsList = styled.ul`
    li{
        float: left;
        margin: 0 10px 12px 0;
    }
    a{
        display: block;
        padding: 0 6px;
        border: 1px solid #ddd;
        border-radius: 3px;
        font-size: 12px;
        line-height: 18px;
        color: #787878;
        &:hover{
            color: #333;
            border-color: #b4b4b4;
        }
    }
`;