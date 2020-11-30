import React, { useState } from 'react'
import InfoList from '../../components/InfoList/InfoList'
import InfoContents from '../../components/InfoContents/InfoContents'
import './MessageList.scss'
import { Container } from '@material-ui/core'

function MessageList(props) {
  const [showOpen, setShowOpen] = useState(false)
  const MsgList = [
    {
      id: '1',
      name: '點負表財數',
      time: '2020-01-02',
      msg:
        '坐洋切：上漸有心環我，保情時性其排企身理。這人有別面化共時相這，教不背業有化。比似訴。全處著兩。部們如長頭但解在見子月。容意面他。外又紅麼。我過政。一風廠個花電來國年，文治麗家去金，在資國表物。',
    },
    {
      id: '2',
      name: '生總形保子所',
      time: '2020-03-02',
      msg:
        '此各腦整石重教友定本氣。給我蘭加易頭張的是問總會知教提孩官叫總續好福什育是變的主都天間發接坡個星日政人義資書體無格到進我，國點當精有際下行的要數條的整個；臺沒起現。刻覺會快化得至後，月他似無王列兒使……當岸許媽任一這有電一次導考單魚樣中！',
    },
    {
      id: '3',
      name: '三官況下果因',
      time: '2020-09-02',
      msg:
        '發它異史愛到想，熱裝戰來腳邊民直鄉事度……城理子們而個在形學間會口中紅。生交股、以仍是展，間世條，著等眾識我去手圖孩也的例小地緊、是說的麼有；應的維為？我意節來動利證水向小安中展義，一五活信是日現去，汽情小才生傳他由應找近辦在不、引自專，廣像獎友……館金回？面我就現可應。',
    },
    {
      id: '4',
      name: '識功華我子氣筆王就美',
      time: '2020-11-02',
      msg:
        '線麼狀清海以國朋常英甚的，在們車者資下再活信必時山和有高是亮。公可教常力報其意告我看花功一臺場別會速外夫生了且片著一似少小件中二地是還不黨個訴所來新！學汽遠，道開或園灣？演觀數房方告小方職而。你活們起無中樂整公地人信邊營。',
    },
  ]

  return (
    <Container>
      <div className="outMsgList">
        <div className={showOpen ? 'infoList infoList-close' : 'infoList'}>
          <div className="listTitle">
            <span>訊息列表</span>
            <span>時間排序</span>
          </div>
          <InfoList
            {...props}
            MsgList={MsgList}
            setShowOpen={setShowOpen}
            showOpen={showOpen}
          />
        </div>
        <div
          className={
            showOpen ? 'infoContents infoContents-show' : 'infoContents'
          }
        >
          <InfoContents
            {...props}
            MsgList={MsgList}
            setShowOpen={setShowOpen}
            showOpen={showOpen}
          />
        </div>
      </div>
    </Container>
  )
}

export default MessageList
