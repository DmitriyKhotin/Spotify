import React, {FC} from 'react'
import './OportunityList.scss'

type Oportunity = {
  id: string,
  title: string
}

const OportunityList: FC = () => {
  const oportunities: Oportunity[]  = [
    {id: '1', title: 'Get an Album\'s Tracks'},
    {id: '2', title: 'Get Multiple Albums'},
    {id: '3', title: 'Get Yours Top Artists and Tracks'},
    {id: '4', title: 'Change a Playlist\'s Details'}
  ]

  return (
    <div className="oportunities">
      <h3 className="oportunities__title">You can:</h3>
      <ul className="oportunities__body list">
        {oportunities.map(value => <li className="list__elem" key={value.id}>{value.title}</li>)}
      </ul>
    </div>
  )
}

export default OportunityList