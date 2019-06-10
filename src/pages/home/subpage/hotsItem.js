import React from 'react';
import { Link } from 'react-router-dom';

class HotsList extends React.Component {
    render() {
        const { data } = this.props;
        return (
            <li>
                <div className="desc">
                    <Link to="/detail">
                        <h3 className="title">{data.title}</h3>
                        <p className="text">{data.text}</p>
                    </Link>
                    <div className="meta clearfix">
                        <div className="jewel"><i className="icon iconfont icondiamond"></i> {data.jewel}</div>
                        <div className="author"><Link to="/">{data.author}</Link></div>
                        <div className="message"><Link to="/"><i className="icon iconfont iconxinxi"></i> {data.message}</Link></div>
                        <div className="like"><i className="icon iconfont iconxin"></i> {data.like}</div>
                    </div>
                </div>
                { data.img ? <div className="pic"><Link to="/detail"><img src={data.img} alt={data.title}/></Link></div> : null }
            </li>
        )
    }
}

export default HotsList;