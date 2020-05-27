import React, { Component } from 'react';
import {Col} from 'antd';
import { Link } from 'react-router-dom'

class GridDesign extends Component {
    render() {
        return (
            <Col lg={6} md={8} sm={16} xs={24}>
                 <div style={{ position: 'relative' }}>
                    <Link to={`/tv/${this.props.tvShowID}`} >
                        <img style={{ width: '100%', height: '320px' }} alt={'temp'} src={this.props.image} />
                    </Link>
                </div>
            </Col>
        )
    }
    
}

export default GridDesign;