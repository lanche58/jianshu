import React from 'react';
import { Link } from 'react-router-dom';
import HotsList from './subpage/hotsList';
import { connect } from 'react-redux';
import { actionCreators } from './store';
import { 
    HomeWrap,
    HomeRight,
    HomeLeft,
    HomeBanner
} from './style';

class Home extends React.Component {
    render() {
        return (
            <HomeWrap className="container clearfix">
                <HomeRight></HomeRight>
                <HomeLeft>
                    <HomeBanner><Link to="/"><img src="//upload.jianshu.io/admin_banners/web_images/4660/224da83c76e01d5deff07e163615921233af5c82.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt="banner"/></Link></HomeBanner>
                    <HotsList>

                    </HotsList>
                </HomeLeft>
            </HomeWrap>
        )
    }
    componentDidMount() {
        this.props.getAsyncHotsListData();
    }
}

const mapStateToProps = (state) => {
    return {
        
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        getAsyncHotsListData() {
            dispatch(actionCreators.getAsyncHotsListAction)
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Home);