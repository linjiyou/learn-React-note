import React from 'react';
 function Vote(){
    return <section className={'panel panel-default'} style={{width:'50%'
    ,margin:'20px auto'}}>
        <div className={'panel-heading'}>
            <h3 className={'panel-title'}>
                标题内容
            </h3>
        </div>
        <div className={'panel-body'}>
            支持人数：<span>0</span>
            <br/>
            反对人数：<span>0</span>
            <br/>
            支持比率：<span>0</span>
            <br/>
        </div>
        <div className={'panel-footer'}>
            <button className={'btn btn-success'}>支持</button>
            <button className={'btn btn-danger'}>反对</button>
        </div>
    </section>
}
function Vo(){
    return <section className={'panel panel-default'} style={{width:'50%'
    ,margin:'20px auto'}}>
        <div className={'panel-heading'}>
            <h3 className={'panel-title'}>
                标题内容
            </h3>
        </div>
        <div className={'panel-body'}>
            支持人数：<span>0</span>
            <br/>
            反对人数：<span>0</span>
            <br/>
            支持比率：<span>0</span>
            <br/>
        </div>
        <div className={'panel-footer'}>
            <button className={'btn btn-success'}>支持</button>
            <button className={'btn btn-danger'}>反对</button>
        </div>
    </section>
}
export{Vote,Vo}