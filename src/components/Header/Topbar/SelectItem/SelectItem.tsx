import './SelectItem.css'

interface Params {
  name: string,
  url: string
}

const SelectItem = ({name, url}: Params) => { 
 return (
    <div className='container'>
      <div className='flagContainer'>
          <img className='flag' src={url}/>
          <p>{name}</p>
      </div>
    </div>
  )
}

export default SelectItem;

