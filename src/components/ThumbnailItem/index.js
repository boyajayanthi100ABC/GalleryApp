// Write your code here.

import './index.css'

const ThumbnailItem = props => {
  const {eachDetail, clickTabItem, isActive} = props
  const {id, thumbnailUrl} = eachDetail

  const onClickTabItem = () => {
    clickTabItem(id)
  }

  const activeTabBtnClassName = isActive ? '' : 'active-tab-btn'

  return (
    <li className="container-thumbnail">
      <button onClick={onClickTabItem} type="button" className="button-s">
        <img
          src={thumbnailUrl}
          alt="thumbnailAltText"
          className={`${activeTabBtnClassName}`}
        />
      </button>
    </li>
  )
}

export default ThumbnailItem
