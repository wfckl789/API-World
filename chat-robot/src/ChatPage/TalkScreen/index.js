import React from 'react';
import {Button, Col, Empty, Input, Row, Space} from 'antd';

const TalkScreen = () => (
    <>
        <Row>
            <Empty
                image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
                imageStyle={{
                    height: 60,
                }}
                description={
                    <span>
                        Customize <a href="#API">Description </a> No data Now
                    </span>
                }
            >
                <Button type="primary">Create Now</Button>
            </Empty>
        </Row>
    </>
);

export default TalkScreen;