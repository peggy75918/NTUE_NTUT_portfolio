import { useState } from 'react';

import { EyeFilled, HeartFilled } from '@ant-design/icons';
import { FilePptFilled } from '@ant-design/icons';
import { GithubFilled } from '@ant-design/icons';
import { HeartOutlined } from '@ant-design/icons';

export default function PortfolioWork({getSchoolIndex}) {

    const _schoolIndex = getSchoolIndex; // 0=NTUE 1=NTUT

    const [ heart, setHeart ] = useState(false);

    const heartClick = () => {
        setHeart(!heart);
    };

    return (
        <div className='portwork-base'>
            <div className='portwork-frame'>

                {/* 觀看數 */}
                <div className='portwork-view'><EyeFilled style={{ paddingRight: '4px' }}/>114514</div> 

                {/* 根據學校去設定無作品圖片時的預設背景 */}
                <div className={_schoolIndex?'portwork-imgframe default NTUT':'portwork-imgframe default NTUE'}>

                    {/* 作品圖片位置 */}
                    <img src=''/>
                
                </div>
                <div>
                    <div className='portwork-info-base'>
                        <div className='portwork-info-left'>

                            {/* 作品名稱 */}
                            <p className='portwork-title'>作品名稱</p>

                            {/* 作者&團隊 */}
                            <p className='portwork-team'>BY 作者&團隊</p>

                            <div className='portwork-tagrow'>

                                {/* 標籤 */}
                                <div className='portwork-tag'>Bootstrap</div>
                                <div className='portwork-tag'>css</div>
                                <div className='portwork-tag'>html</div>
                                <div className='portwork-tag'>JQuery</div>

                            </div>
                        </div>
                        <div className='port-work-info-right'>

                            <div className='portwork-icons'>

                                {/* 簡報網址 */}
                                <FilePptFilled style={{ paddingRight: '8px' }} />

                                {/* GitHub 網址 */}
                                <GithubFilled />
                            </div>

                            {/* 愛心數 */}
                            <div className='portwork-hearts' onClick={heartClick}>
                                { heart?
                                    <HeartFilled style={{ paddingRight: '8px' }}/>:
                                    <HeartOutlined style={{ paddingRight: '8px' }}/>
                                }
                                114514
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}