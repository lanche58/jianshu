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