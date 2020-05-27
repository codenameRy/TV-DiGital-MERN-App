import React, { Component } from 'react';
import {Col} from 'antd';

class GridDesignShows extends Component {
    render() {
        if (this.props.actor) {
        return (
            <Col lg={6} md={8} sm={16} xs={24}>
                 <div style={{ position: 'relative' }}>
                        <img style={{ width: '100%', height: '320px' }} alt={'temp'} src={this.props.image} />
                        <h3 style={{justifyContent: 'center'}}>{this.props.character}</h3>
                </div>
            </Col>
        );
    }
    }
}

export default GridDesignShows;