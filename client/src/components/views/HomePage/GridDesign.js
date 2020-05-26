import React, { Component } from 'react';
import {Col} from 'antd';

class GridDesign extends Component {
    render() {
        return (
            <Col lg={6} md={8} sm={16} xs={24}>
                 <div style={{ position: 'relative' }}>
                    <a href={`/tv/${this.props.tvShowID}`} >
                        <img style={{ width: '100%', height: '320px' }} alt={'temp'} src={this.props.image} />
                    </a>
                </div>
            </Col>
        );
    }
}

export default GridDesign;