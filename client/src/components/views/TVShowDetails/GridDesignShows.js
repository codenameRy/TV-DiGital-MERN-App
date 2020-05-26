import React, { Component } from 'react';
import {Col} from 'antd';

class GridDesignShows extends Component {
    render() {
        return (
            <Col lg={6} md={8} sm={16} xs={24}>
                 <div style={{ position: 'relative' }}>
                        <img style={{ width: '100%', height: '320px' }} alt={'temp'} src={this.props.profile_path} />
                </div>
            </Col>
        );
    }
}

export default GridDesignShows;