import styled from 'styled-components';

export const HomeWrap = styled.div`
    padding-top: 30px;
`;

export const HomeRight = styled.div`
    width: 280px;
    float: right;
    margin-left: 40px;
    min-height: 1px;
`;

export const HomeLeft = styled.div`
    overflow: hidden;
`;

export const HomeBanner = styled.div`
    overflow: hidden;
    border-radius: 6px;
    margin-bottom: 15px;
    img{
        display: block;
        width: 100%;
    }
`;

export const HotsList = styled.ul`
    li{
        display: flex;
        align-items: center;
        border-bottom: 1px solid #f0f0f0;
        padding: 20px 0;
    }
    .pic{
        width: 150px;
        height: 100px;
        border-radius: 4px;
        margin-left: 15px;
        overflow: hidden;
        img{
            display: block;
            width: 100%;
        }
    }
    .desc{
        flex: 1;
    }
    a{
        color: #999;
    }
    .title{
        font-size: 18px;
        color: #333;
        line-height: 1.5;
        font-weight: bold;
        &:hover{
            text-decoration: underline;
        }
    }
    .text{
        margin-top: 4px;
        font-size: 13px;
        line-height: 24px;
    }
    .meta{
        margin-top: 8px;
        font-size: 12px;
        color: #b4b4b4;
        line-height: 20px;
        a{
            color: #b4b4b4;
            &:hover{
                color: #787878;
            }
        }
        > div{
            float: left;
            margin-right: 10px;
        }
        .icon{
            font-size: 12px;
            display: line-block;
            vertical-align: bottom;
        }
        .jewel{
            color: #ea6f5a;
        }
    }
`;